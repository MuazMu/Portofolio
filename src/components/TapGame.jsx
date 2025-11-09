import { useState, useEffect } from 'react';
import { FaGamepad, FaTimes } from 'react-icons/fa';

const TapGame = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isPlaying, setIsPlaying] = useState(false);
  const [highScore, setHighScore] = useState(parseInt(localStorage.getItem('tapGameHighScore')) || 0);

  useEffect(() => {
    let timer;
    if (isPlaying && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isPlaying) {
      endGame();
    }
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(10);
    setIsPlaying(true);
  };

  const endGame = () => {
    setIsPlaying(false);
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('tapGameHighScore', score.toString());
    }
  };

  const handleTap = () => {
    if (isPlaying) {
      setScore(prev => prev + 1);
    }
  };

  return (
    <>
      {/* Floating Game Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 bg-accent hover:bg-accent-light text-white p-4 rounded-full shadow-glow transition-all duration-300 z-40 group"
        title="Play Tap Game"
      >
        <FaGamepad className="text-2xl group-hover:scale-110 transition-transform" />
      </button>

      {/* Game Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="card p-8 max-w-md w-full relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
            >
              <FaTimes className="text-2xl" />
            </button>

            {/* Game Title */}
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Tap <span className="text-accent">Challenge</span>
            </h2>

            {/* High Score */}
            <div className="text-center mb-6">
              <p className="text-white/60 text-sm">High Score</p>
              <p className="text-2xl font-bold text-accent">{highScore}</p>
            </div>

            {!isPlaying && timeLeft === 10 ? (
              /* Start Screen */
              <div className="text-center">
                <p className="text-white/70 mb-6">
                  Tap the button as many times as you can in 10 seconds!
                </p>
                <button
                  onClick={startGame}
                  className="px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Start Game
                </button>
              </div>
            ) : (
              /* Game Screen */
              <div>
                {/* Game Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <p className="text-white/60 text-sm">Time Left</p>
                    <p className="text-3xl font-bold text-white">{timeLeft}s</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white/60 text-sm">Score</p>
                    <p className="text-3xl font-bold text-accent">{score}</p>
                  </div>
                </div>

                {/* Tap Button */}
                <button
                  onClick={handleTap}
                  disabled={!isPlaying}
                  className={`w-full h-48 rounded-lg font-bold text-2xl transition-all duration-150 ${
                    isPlaying
                      ? 'bg-accent hover:bg-accent-light text-white active:scale-95'
                      : 'bg-dark-border text-white/40 cursor-not-allowed'
                  }`}
                >
                  {isPlaying ? 'TAP!' : 'GAME OVER'}
                </button>

                {/* Play Again */}
                {!isPlaying && timeLeft === 0 && (
                  <div className="mt-6 text-center">
                    <p className="text-white/70 mb-4">
                      {score > highScore - 1 ? '🎉 New High Score!' : 'Good job!'}
                    </p>
                    <button
                      onClick={startGame}
                      className="px-6 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-all duration-300"
                    >
                      Play Again
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TapGame;
