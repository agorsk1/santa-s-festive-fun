import { motion } from 'framer-motion';
import { Lock, Gift, Check } from 'lucide-react';

interface GiftBoxProps {
  index: number;
  status: 'locked' | 'current' | 'completed';
  onClick?: () => void;
}

const GiftBox = ({ index, status, onClick }: GiftBoxProps) => {
  const colors = [
    { bg: 'from-primary to-candy-red', ribbon: 'bg-accent' },
    { bg: 'from-secondary to-pine', ribbon: 'bg-accent' },
    { bg: 'from-accent to-warm-glow', ribbon: 'bg-primary' },
    { bg: 'from-ice to-snow', ribbon: 'bg-primary' },
    { bg: 'from-primary to-candy-red', ribbon: 'bg-secondary' },
  ];

  const color = colors[index % colors.length];

  return (
    <motion.button
      onClick={onClick}
      disabled={status === 'locked'}
      className={`relative w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${color.bg} 
        ${status === 'current' ? 'ring-4 ring-accent ring-offset-2 ring-offset-background' : ''}
        ${status === 'locked' ? 'opacity-50 grayscale cursor-not-allowed' : 'cursor-pointer hover:scale-110'}
        transition-all duration-300 shadow-lg`}
      whileHover={status !== 'locked' ? { rotate: [0, -5, 5, 0] } : {}}
      whileTap={status !== 'locked' ? { scale: 0.95 } : {}}
    >
      {/* Ribbon vertical */}
      <div className={`absolute left-1/2 -translate-x-1/2 w-3 h-full ${color.ribbon} opacity-80`} />
      {/* Ribbon horizontal */}
      <div className={`absolute top-1/2 -translate-y-1/2 w-full h-3 ${color.ribbon} opacity-80`} />
      {/* Bow */}
      <div className={`absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-4 ${color.ribbon} rounded-full`} />
      
      {/* Status icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        {status === 'locked' && (
          <Lock className="w-5 h-5 text-foreground/60" />
        )}
        {status === 'completed' && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center"
          >
            <Check className="w-5 h-5 text-secondary-foreground" />
          </motion.div>
        )}
        {status === 'current' && (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Gift className="w-6 h-6 text-foreground drop-shadow-lg" />
          </motion.div>
        )}
      </div>
    </motion.button>
  );
};

export default GiftBox;
