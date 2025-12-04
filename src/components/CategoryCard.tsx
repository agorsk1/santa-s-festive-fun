import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

interface CategoryCardProps {
  name: string;
  icon: string;
  description: string;
  status: 'locked' | 'current' | 'completed';
  onClick: () => void;
}

const CategoryCard = ({ name, icon, description, status, onClick }: CategoryCardProps) => {
  const isClickable = status === 'current';

  return (
    <motion.button
      onClick={onClick}
      disabled={!isClickable}
      className={`relative w-full p-4 rounded-2xl border transition-all duration-300
        ${status === 'current' 
          ? 'bg-card/90 border-accent hover:border-accent/80 cursor-pointer shadow-lg hover:shadow-xl' 
          : status === 'completed'
          ? 'bg-secondary/20 border-secondary/50 cursor-default'
          : 'bg-muted/30 border-border/30 cursor-not-allowed opacity-60'
        }`}
      whileHover={isClickable ? { scale: 1.02, y: -2 } : {}}
      whileTap={isClickable ? { scale: 0.98 } : {}}
    >
      <div className="flex items-center gap-4">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl
          ${status === 'current' ? 'bg-accent/20' : status === 'completed' ? 'bg-secondary/30' : 'bg-muted/50'}`}>
          {status === 'locked' ? <Lock className="w-6 h-6 text-muted-foreground" /> : icon}
        </div>
        
        <div className="flex-1 text-left">
          <h3 className={`font-christmas text-lg mb-1
            ${status === 'current' ? 'text-accent' : status === 'completed' ? 'text-secondary' : 'text-muted-foreground'}`}>
            {name}
          </h3>
          <p className="text-sm text-muted-foreground font-body line-clamp-1">
            {description}
          </p>
        </div>

        {status === 'completed' && (
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
            <span className="text-secondary-foreground">✓</span>
          </div>
        )}

        {status === 'current' && (
          <motion.div 
            className="w-8 h-8 rounded-full bg-accent flex items-center justify-center"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-accent-foreground text-sm">▶</span>
          </motion.div>
        )}
      </div>
    </motion.button>
  );
};

export default CategoryCard;
