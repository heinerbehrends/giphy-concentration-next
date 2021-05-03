import React from 'react';
import { useRouter } from 'next/router';
import {
  isGameOver,
  useOnClickCard,
  useGamePlay,
  useFetchGiphy,
  useParseSearchTerm,
  useShowConfetti,
} from '../logic/gameLogic';
import Board from '../components/Board';
import { Cards } from '../logic/logic';
import Confetti from '../components/Confetti';

function Game() {
  const router = useRouter();
  const searchTerm = useParseSearchTerm(router);
  const { cards, setCards } = useFetchGiphy(searchTerm);
  const { flipCount, setFlipCount } = useGamePlay(cards as Cards, setCards);
  const { onClickCard } = useOnClickCard(
    cards as Cards,
    setCards,
    setFlipCount
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
