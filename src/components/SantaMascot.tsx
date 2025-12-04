import { motion } from 'framer-motion';

interface SantaMascotProps {
  message: string;
  size?: 'small' | 'medium' | 'large';
}

const SantaMascot = ({ message, size = 'medium' }: SantaMascotProps) => {
  const sizeClasses = {
    small: 'w-16 h-16 text-3xl',
    medium: 'w-24 h-24 text-5xl',
    large: 'w-32 h-32 text-6xl',
  };

  return (
    <motion.div 
      className="flex flex-col items-center gap-3"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", duration: 0.6 }}
    >
      <motion.div 
        className={`${sizeClasses[size]} bg-primary rounded-full flex items-center justify-center shadow-lg border-4 border-candy-white/30`}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        🎅
      </motion.div>
      
      <motion.div 
        className="relative bg-card/90 backdrop-blur-sm px-6 py-3 rounded-2xl border border-border/50 max-w-xs"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-card/90 border-l border-t border-border/50 rotate-45" />
        <p className="text-foreground text-center font-body text-sm md:text-base relative z-10">
          {message}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default SantaMascot;
