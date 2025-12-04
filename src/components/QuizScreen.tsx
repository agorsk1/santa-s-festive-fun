import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Category, Question } from '@/data/quizData';
import { Button } from '@/components/ui/button';
import { Lightbulb, ArrowRight, RotateCcw } from 'lucide-react';
import SantaMascot from './SantaMascot';

interface QuizScreenProps {
  category: Category;
  onComplete: (passed: boolean) => void;
  onBack: () => void;
}

const QuizScreen = ({ category, onComplete, onBack }: QuizScreenProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const question = category.questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;
  const totalQuestions = category.questions.length;
  const passingScore = Math.ceil(totalQuestions * 0.7);

  const handleAnswer = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);
    if (index === question.correctAnswer) {
      setCorrectAnswers(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setShowHint(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleUseHint = () => {
    if (hintsUsed < 2 && !showHint && !showResult) {
      setShowHint(true);
      setHintsUsed(prev => prev + 1);
    }
  };

  const passed = correctAnswers >= passingScore;

  if (quizComplete) {
    return (
      <motion.div 
        className="flex flex-col items-center justify-center min-h-[60vh] px-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <SantaMascot 
          message={passed 
            ? "Ho Ho Ho! Wspaniała robota! Udowodniłeś, że jesteś godny nagrody!" 
            : "Nie martw się! Nawet elfy potrzebują praktyki. Spróbuj jeszcze raz!"
          }
          size="large"
        />

        <motion.div 
          className="mt-8 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className={`text-4xl font-christmas mb-4 ${passed ? 'text-accent' : 'text-primary'}`}>
            {passed ? '🎉 Quiz Zaliczony!' : '❄️ Spróbuj Ponownie!'}
          </h2>
          <p className="text-xl text-foreground mb-2 font-body">
            Masz <span className="text-accent font-bold">{correctAnswers}</span> z <span className="font-bold">{totalQuestions}</span> poprawnych odpowiedzi
          </p>
          <p className="text-muted-foreground font-body">
            {passed ? `Potrzebowałeś ${passingScore} aby zdać` : `Potrzebujesz ${passingScore} poprawnych odpowiedzi aby zdać`}
          </p>
        </motion.div>

        <motion.div 
          className="flex gap-4 mt-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {passed ? (
            <Button onClick={() => onComplete(true)} className="btn-santa text-lg">
              Kontynuuj Podróż <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          ) : (
            <>
              <Button onClick={() => {
                setCurrentQuestion(0);
                setSelectedAnswer(null);
                setShowResult(false);
                setCorrectAnswers(0);
                setShowHint(false);
                setHintsUsed(0);
                setQuizComplete(false);
              }} className="btn-santa">
                <RotateCcw className="mr-2 w-5 h-5" /> Spróbuj Ponownie
              </Button>
              <Button onClick={onBack} variant="outline" className="border-border text-foreground hover:bg-muted">
                Powrót do Kategorii
              </Button>
            </>
          )}
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{category.icon}</span>
          <h2 className="text-xl font-christmas text-accent">{category.name}</h2>
        </div>
        <div className="text-sm text-muted-foreground font-body">
          Pytanie {currentQuestion + 1}/{totalQuestions}
        </div>
      </div>

      {/* Progress dots */}
      <div className="flex gap-2 mb-8">
        {category.questions.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-2 flex-1 rounded-full transition-all duration-300
              ${idx < currentQuestion ? 'bg-secondary' : idx === currentQuestion ? 'bg-accent' : 'bg-muted'}`}
          />
        ))}
      </div>

      {/* Question card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          className="card-christmas p-6 md:p-8"
        >
          <h3 className="text-xl md:text-2xl text-foreground mb-6 font-body font-semibold">
            {question.question}
          </h3>

          {/* Hint section */}
          {question.hint && !showResult && (
            <div className="mb-6">
              {showHint ? (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-accent bg-accent/10 px-4 py-2 rounded-lg"
                >
                  <Lightbulb className="w-5 h-5" />
                  <span className="font-body">{question.hint}</span>
                </motion.div>
              ) : (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleUseHint}
                  disabled={hintsUsed >= 2}
                  className="text-muted-foreground hover:text-accent"
                >
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Użyj Podpowiedzi (zostało {2 - hintsUsed})
                </Button>
              )}
            </div>
          )}

          {/* Answer options */}
          <div className="grid gap-3">
            {question.options.map((option, idx) => (
              <motion.button
                key={idx}
                onClick={() => handleAnswer(idx)}
                disabled={showResult}
                className={`w-full p-4 rounded-xl text-left font-body transition-all duration-300
                  ${showResult 
                    ? idx === question.correctAnswer 
                      ? 'bg-secondary text-secondary-foreground border-2 border-secondary'
                      : idx === selectedAnswer && !isCorrect
                      ? 'bg-destructive/20 text-foreground border-2 border-destructive'
                      : 'bg-muted/50 text-muted-foreground'
                    : selectedAnswer === idx
                    ? 'bg-accent/20 border-2 border-accent text-foreground'
                    : 'bg-muted/50 hover:bg-muted border-2 border-transparent text-foreground hover:border-border'
                  }`}
                whileHover={!showResult ? { scale: 1.01 } : {}}
                whileTap={!showResult ? { scale: 0.99 } : {}}
              >
                <span className="inline-block w-8 h-8 rounded-full bg-background/50 text-center leading-8 mr-3 text-sm">
                  {String.fromCharCode(65 + idx)}
                </span>
                {option}
              </motion.button>
            ))}
          </div>

          {/* Result feedback */}
          {showResult && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 flex items-center justify-between"
            >
              <p className={`text-lg font-body ${isCorrect ? 'text-secondary' : 'text-destructive'}`}>
                {isCorrect ? '🎉 Poprawnie!' : '❌ Niestety nie'}
              </p>
              <Button onClick={handleNext} className="btn-elf">
                {currentQuestion < totalQuestions - 1 ? 'Następne Pytanie' : 'Zobacz Wyniki'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default QuizScreen;
