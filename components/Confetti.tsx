import React from 'react';
import ReactConfetti from 'react-confetti';

type ConfettiProps = {
  setShowConfetti: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Confetti({ setShowConfetti }: ConfettiProps) {
  return (
    <ReactConfetti
      recycle={false}
      onConfettiComplete={() => setShowConfetti(false)}
    />
  );
}
