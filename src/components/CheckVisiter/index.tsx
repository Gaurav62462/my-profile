'use client';

import { useEffect, useState } from 'react';

export default function WaveHeart() {
  const [showWave, setShowWave] = useState(false);
  const [showHeart, setShowHeart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowWave(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = async () => {
    setShowWave(false);
    setShowHeart(true);

        await fetch("/api/wave-clicker", {
        method: "POST"
      });

    setTimeout(() => {
      setShowHeart(false);
    }, 2000);
  };

  return (
    <>
      {showWave && (
        <button
          onClick={handleClick}
          className="fixed bottom-6 right-6 z-50 group"
        >
          <span className="absolute inset-0 rounded-full bg-purple-400 opacity-30 blur-xl animate-pulse"></span>

          <span className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping"></span>

          <div className="relative bg-gradient-to-r from-[#95d9f1] to-blue-500 text-white p-2 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition duration-300">

            <span className="text-2xl animate-wave origin-bottom-right">
              👋
            </span>
          </div>
        </button>
      )}

      {showHeart && (
        <div className="fixed bottom-6 right-6 text-red-500 text-5xl animate-heart">
          ❤️
        </div>
      )}

      <style jsx>{`
        .animate-heart {
          animation: floatUp 2s ease-out forwards;
        }

        @keyframes floatUp {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-120px) scale(1.5);
          }
        }
      `}</style>
    </>
  );
}