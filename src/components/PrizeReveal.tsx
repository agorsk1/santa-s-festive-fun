import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, RotateCcw, Share2 } from 'lucide-react';
import Snowfall from './Snowfall';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

interface PrizeRevealProps {
  onPlayAgain: () => void;
}

const PrizeReveal = ({ onPlayAgain }: PrizeRevealProps) => {
  useEffect(() => {
    // Trigger confetti celebration
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: ReturnType<typeof setInterval> = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#e53e3e', '#38a169', '#ecc94b', '#63b3ed'],
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#e53e3e', '#38a169', '#ecc94b', '#63b3ed'],
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const handleDownload = () => {
    // Create a link to download the prize image
    const link = document.createElement('a');
    link.href = '/prize-image.png';
    link.download = 'swiateczna-niespodzianka-mikolaja.png';
    link.click();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Ukończyłem Świąteczne Łamigłówki!",
          text: "Rozwiązałem wszystkie 5 zagadek i odblokowałem specjalną świąteczną niespodziankę od Mikołaja! 🎅🎄",
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Snowfall />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Header celebration */}
        <motion.div 
          className="text-center mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <motion.div 
            className="text-6xl md:text-8xl mb-4"
            animate={{ 
              rotate: [0, -10, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          >
            🎅
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-christmas text-accent mb-4">
            Ho Ho Ho!
          </h1>
          <p className="text-xl md:text-2xl text-foreground font-body max-w-lg mx-auto">
            Udowodniłeś, że zasługujesz na specjalną świąteczną niespodziankę od Mikołaja!
          </p>
        </motion.div>

        {/* Prize reveal */}
        <motion.div 
          className="relative mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, type: "spring", duration: 1 }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-accent/30 blur-3xl rounded-full scale-125" />
          
          {/* Prize container */}
          <div className="relative bg-gradient-to-br from-accent/20 to-primary/20 p-2 rounded-3xl border-4 border-accent shadow-2xl">
            <div className="bg-card rounded-2xl p-4 md:p-6">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-xl flex items-center justify-center overflow-hidden">
                {/* Festive prize image placeholder */}
                <div className="text-center">
                  <motion.div 
                    className="text-8xl md:text-9xl mb-4"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🎁
                  </motion.div>
                  <div className="flex justify-center gap-2 text-4xl">
                    <span>🎄</span>
                    <span>⭐</span>
                    <span>🎄</span>
                  </div>
                  <p className="mt-4 text-lg font-christmas text-accent">
                    Wesołych Świąt!
                  </p>
                  <p className="text-sm text-muted-foreground font-body mt-2">
                    Od Mikołaja i Elfów
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative stars */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              ✨
            </motion.div>
          ))}
        </motion.div>

        {/* Completion message */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-xl"
              >
                ✓
              </motion.div>
            ))}
          </div>
          <p className="text-muted-foreground font-body">
            Wszystkie 5 quizów ukończone! Jesteś prawdziwym świątecznym mistrzem!
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <Button onClick={handleShare} className="btn-elf">
            <Share2 className="mr-2 w-5 h-5" /> Udostępnij
          </Button>
          <Button onClick={onPlayAgain} className="btn-santa">
            <RotateCcw className="mr-2 w-5 h-5" /> Zagraj Ponownie
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default PrizeReveal;
