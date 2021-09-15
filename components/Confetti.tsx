import React from 'react';
import ReactConfetti from 'react-confetti';

type ConfettiProps = {
  setShowConfetti: React.Dispatch<React.SetStateAction<number>>;
  showConfetti: number;
  shouldRecycle: boolean;
};
export default function Confetti({
  setShowConfetti,
  showConfetti,
  shouldRecycle = false,
}: ConfettiProps) {
  return (
    <ReactConfetti
      recycle={shouldRecycle}
      onConfettiComplete={() => setShowConfetti(showConfetti - 1)}
    />
  );
}
