import { motion } from 'framer-motion';
import GiftBox from './GiftBox';

interface ProgressTrackerProps {
  currentQuiz: number;
  completedQuizzes: number[];
  onGiftClick?: (index: number) => void;
}

const ProgressTracker = ({ currentQuiz, completedQuizzes, onGiftClick }: ProgressTrackerProps) => {
  const getStatus = (index: number): 'locked' | 'current' | 'completed' => {
    if (completedQuizzes.includes(index)) return 'completed';
    if (index === currentQuiz) return 'current';
    return 'locked';
  };

  const progress = (completedQuizzes.length / 5) * 100;

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-muted-foreground font-body">Progress</span>
        <span className="text-sm font-semibold text-accent font-body">{completedQuizzes.length}/5 Quizzes</span>
      </div>
      
      {/* Progress bar */}
      <div className="relative h-3 bg-muted rounded-full overflow-hidden mb-6">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-secondary to-accent rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" 
          style={{ backgroundSize: '200% 100%' }} 
        />
      </div>

      {/* Gift boxes */}
      <div className="flex justify-between items-center gap-2">
        {[0, 1, 2, 3, 4].map((index) => (
          <GiftBox
            key={index}
            index={index}
            status={getStatus(index)}
            onClick={() => onGiftClick?.(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressTracker;
