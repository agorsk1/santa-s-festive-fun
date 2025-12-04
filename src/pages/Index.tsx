import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Snowfall from '@/components/Snowfall';
import SantaMascot from '@/components/SantaMascot';
import ProgressTracker from '@/components/ProgressTracker';
import CategoryCard from '@/components/CategoryCard';
import QuizScreen from '@/components/QuizScreen';
import PrizeReveal from '@/components/PrizeReveal';
import { categories } from '@/data/quizData';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

type GameState = 'welcome' | 'categories' | 'quiz' | 'prize';

interface GameProgress {
  completedQuizzes: number[];
  currentQuiz: number;
}

const STORAGE_KEY = 'santas-mind-games-progress';

const Index = () => {
  const [gameState, setGameState] = useState<GameState>('welcome');
  const [progress, setProgress] = useState<GameProgress>({
    completedQuizzes: [],
    currentQuiz: 0,
  });
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setProgress(parsed);
        if (parsed.completedQuizzes.length === 5) {
          setGameState('prize');
        } else if (parsed.completedQuizzes.length > 0) {
          setGameState('categories');
        }
      } catch (e) {
        console.error('Failed to parse saved progress');
      }
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const handleStartAdventure = () => {
    setGameState('categories');
  };

  const handleSelectCategory = (index: number) => {
    if (index === progress.currentQuiz) {
      setSelectedCategory(index);
      setGameState('quiz');
    }
  };

  const handleQuizComplete = (passed: boolean) => {
    if (passed) {
      const newCompleted = [...progress.completedQuizzes, progress.currentQuiz];
      const newCurrent = progress.currentQuiz + 1;
      
      setProgress({
        completedQuizzes: newCompleted,
        currentQuiz: newCurrent,
      });

      if (newCompleted.length === 5) {
        setGameState('prize');
      } else {
        setGameState('categories');
      }
    } else {
      setGameState('categories');
    }
    setSelectedCategory(null);
  };

  const handlePlayAgain = () => {
    setProgress({ completedQuizzes: [], currentQuiz: 0 });
    setGameState('welcome');
    localStorage.removeItem(STORAGE_KEY);
  };

  const getCategoryStatus = (index: number): 'locked' | 'current' | 'completed' => {
    if (progress.completedQuizzes.includes(index)) return 'completed';
    if (index === progress.currentQuiz) return 'current';
    return 'locked';
  };

  // Prize reveal screen
  if (gameState === 'prize') {
    return <PrizeReveal onPlayAgain={handlePlayAgain} />;
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Snowfall />
      
      <div className="relative z-10 min-h-screen">
        <AnimatePresence mode="wait">
          {/* Welcome Screen */}
          {gameState === 'welcome' && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -50 }}
              className="flex flex-col items-center justify-center min-h-screen px-4 py-8"
            >
              {/* Title */}
              <motion.div 
                className="text-center mb-8"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-5xl md:text-7xl font-christmas text-accent mb-2 drop-shadow-lg">
                  Santa's Mind Games
                </h1>
                <p className="text-xl md:text-2xl text-foreground/80 font-body">
                  A Magical Christmas Adventure
                </p>
              </motion.div>

              {/* Santa mascot */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <SantaMascot 
                  message="Ho Ho Ho! Can you prove you're ready for your Christmas surprise? Complete 5 magical quizzes to unlock a special gift!" 
                  size="large"
                />
              </motion.div>

              {/* Instructions */}
              <motion.div 
                className="card-christmas p-6 md:p-8 max-w-md mx-auto mt-8 text-center"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="text-2xl font-christmas text-accent mb-4">How to Play</h2>
                <ul className="text-left text-foreground/80 font-body space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent">🎄</span>
                    <span>Complete 5 different quiz categories</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">⭐</span>
                    <span>Score at least 70% to pass each quiz</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">🎁</span>
                    <span>Unlock Santa's special surprise at the end!</span>
                  </li>
                </ul>
                
                <Button 
                  onClick={handleStartAdventure} 
                  className="btn-santa w-full text-lg"
                >
                  <Sparkles className="mr-2 w-5 h-5" />
                  Start Adventure
                </Button>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
            </motion.div>
          )}

          {/* Categories Screen */}
          {gameState === 'categories' && (
            <motion.div
              key="categories"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="container max-w-2xl mx-auto px-4 py-8"
            >
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-christmas text-accent mb-2">
                  Choose Your Challenge
                </h1>
                <p className="text-muted-foreground font-body">
                  Complete quizzes in order to progress
                </p>
              </div>

              {/* Progress tracker */}
              <div className="mb-8">
                <ProgressTracker 
                  currentQuiz={progress.currentQuiz}
                  completedQuizzes={progress.completedQuizzes}
                />
              </div>

              {/* Santa message */}
              <div className="mb-8">
                <SantaMascot 
                  message={
                    progress.completedQuizzes.length === 0
                      ? "Let's begin your journey! Start with the first challenge."
                      : progress.completedQuizzes.length === 4
                      ? "One more quiz to go! You're almost there!"
                      : `Great progress! ${5 - progress.completedQuizzes.length} more quizzes to unlock the surprise!`
                  }
                  size="small"
                />
              </div>

              {/* Category cards */}
              <div className="space-y-3">
                {categories.slice(0, 5).map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CategoryCard
                      name={category.name}
                      icon={category.icon}
                      description={category.description}
                      status={getCategoryStatus(index)}
                      onClick={() => handleSelectCategory(index)}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Quiz Screen */}
          {gameState === 'quiz' && selectedCategory !== null && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="container mx-auto py-8"
            >
              <QuizScreen
                category={categories[selectedCategory]}
                onComplete={handleQuizComplete}
                onBack={() => {
                  setGameState('categories');
                  setSelectedCategory(null);
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
