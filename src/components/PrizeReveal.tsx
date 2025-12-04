import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { RotateCcw, Share2, Ticket, MapPin, Calendar } from 'lucide-react';
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

        {/* Prize reveal - Concert Ticket */}
        <motion.div 
          className="relative mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, type: "spring", duration: 1 }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-accent/30 blur-3xl rounded-full scale-125" />
          
          {/* Ticket container */}
          <div className="relative bg-gradient-to-br from-accent/20 to-primary/20 p-2 rounded-3xl border-4 border-accent shadow-2xl">
            <div className="bg-card rounded-2xl overflow-hidden">
              {/* Ticket design */}
              <div className="w-72 md:w-96 bg-gradient-to-br from-purple-900/90 via-indigo-900/90 to-purple-800/90 relative">
                {/* Ticket header */}
                <div className="bg-gradient-to-r from-accent to-primary p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Ticket className="w-5 h-5 text-white" />
                    <span className="text-xs uppercase tracking-wider text-white/90 font-body">Bilet na koncert</span>
                  </div>
                </div>
                
                {/* Main ticket content */}
                <div className="p-6 text-center">
                  <motion.div 
                    className="text-5xl md:text-6xl mb-2"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🎵
                  </motion.div>
                  
                  <h2 className="text-3xl md:text-4xl font-christmas text-white mb-2">
                    Polo & Pan
                  </h2>
                  
                  <p className="text-accent font-body text-lg mb-6">
                    Live in Concert
                  </p>
                  
                  {/* Ticket details */}
                  <div className="space-y-3 text-left bg-black/20 rounded-xl p-4">
                    <div className="flex items-center gap-3 text-white/90">
                      <Calendar className="w-5 h-5 text-accent" />
                      <div>
                        <p className="text-xs text-white/60 font-body">Data</p>
                        <p className="font-body font-semibold">07.02.2026</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 text-white/90">
                      <MapPin className="w-5 h-5 text-accent" />
                      <div>
                        <p className="text-xs text-white/60 font-body">Miejsce</p>
                        <p className="font-body font-semibold">Warszawa</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="flex justify-center gap-2 text-2xl mt-4">
                    <span>🎄</span>
                    <span>🎶</span>
                    <span>🎄</span>
                  </div>
                </div>
                
                {/* Ticket footer */}
                <div className="border-t border-dashed border-white/20 p-4 text-center bg-black/10">
                  <p className="text-sm text-white/70 font-body">
                    Prezent od Mikołaja 🎅❤️
                  </p>
                </div>
                
                {/* Ticket perforation effect */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-card rounded-r-full" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-card rounded-l-full" />
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
            Wszystkie 5 quizów ukończone! Zapraszam Cię na koncert Polo & Pan! 🎶
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
