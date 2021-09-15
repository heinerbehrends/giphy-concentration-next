import React from 'react';
import { useRouter } from 'next/router';
import { isGameOver, useParseSearchTerm } from '../logic/gameLogic';
import Board from '../components/Board';
import Confetti from '../components/Confetti';
import { useOnClickCard } from '../logic/useOnClickCard';
import { useFetchGiphy } from '../logic/useFetchGiphy';
import { useShowConfetti } from '../logic/useShowConfetti';
import { useGamePlay } from '../logic/useGamePlay';

function Game() {
  const router = useRouter();
  const searchTerm = useParseSearchTerm(router);
  const { cards, setCards } = useFetchGiphy(searchTerm);
  const { flipCount, setFlipCount, timeoutObj } = useGamePlay(cards!, setCards);
  const { onClickCard } = useOnClickCard(
    cards!,
    setCards,
    setFlipCount,
    timeoutObj!
  );
  const { showConfetti, setShowConfetti } = useShowConfetti(flipCount, cards!);
  if (isGameOver(cards!)) {
    router.push('/');
  }
  return (
    <>
      {showConfetti ? (
        <Confetti
          // if a confetti starts while there's still confetti falling
          // shouldRecycle gets set to true
          shouldRecycle={showConfetti > 1}
          showConfetti={showConfetti}
          setShowConfetti={setShowConfetti}
        />
      ) : null}
      <Board
        cards={cards}
        flipCount={flipCount}
        handleCardClick={onClickCard}
      />
    </>
  );
}

export default Game;
