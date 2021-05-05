import React from 'react';
import { useRouter } from 'next/router';
import { isGameOver, useParseSearchTerm } from '../logic/gameLogic';
import Board from '../components/Board';
import { Cards } from '../logic/logic';
import Confetti from '../components/Confetti';
import { useOnClickCard } from '../logic/useOnClickCard';
import { useFetchGiphy } from '../logic/useFetchGiphy';
import { useShowConfetti } from '../logic/useShowConfetti';
import { useGamePlay } from '../logic/useGamePlay';

function Game() {
  const router = useRouter();
  const searchTerm = useParseSearchTerm(router);
  const { cards, setCards } = useFetchGiphy(searchTerm);
  const { flipCount, setFlipCount, timeoutObj } = useGamePlay(
    cards as Cards,
    setCards
  );
  const { onClickCard } = useOnClickCard(
    cards as Cards,
    setCards,
    setFlipCount,
    timeoutObj as NodeJS.Timeout
  );
  const { showConfetti, setShowConfetti } = useShowConfetti(
    flipCount,
    cards as Cards
  );

  if (isGameOver(cards as Cards)) {
    router.push('/');
  }
  return (
    <>
      {showConfetti ? <Confetti setShowConfetti={setShowConfetti} /> : null}
      <Board
        cards={cards}
        flipCount={flipCount}
        handleCardClick={onClickCard}
      />
    </>
  );
}

export default Game;
