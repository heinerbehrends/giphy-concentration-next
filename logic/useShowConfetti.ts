import { useState, useEffect } from 'react';
import { Cards, isPair, CardT } from './logic';

export function useShowConfetti(flipCount: number, cards: Cards) {
  const [showConfetti, setShowConfetti] = useState(false);
  useEffect(() => {
    if (flipCount === 2 && isPair(cards as CardT[])) {
      // if confetti is still falling restart the confetti machine
      if (showConfetti) setShowConfetti(false);
      setTimeout(() => {
        setShowConfetti(true);
      }, 100);
    }
  }, [cards]);
  return { showConfetti, setShowConfetti };
}
