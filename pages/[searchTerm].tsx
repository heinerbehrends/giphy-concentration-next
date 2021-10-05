import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useRouter } from 'next/router';
import { isGameOver, useParseSearchTerm } from '../logic/gameLogic';
import Board from '../components/Board';
import Confetti from '../components/Confetti';
import { useOnClickCard } from '../logic/useOnClickCard';
import { useFetchGiphy } from '../logic/useFetchGiphy';
import { useShowConfetti } from '../logic/useShowConfetti';
import { useGamePlay } from '../logic/useGamePlay';
import { CardT } from '../logic/logic';

import { MessageSection } from '../components/BoardStyles';

type GameProps = {
  nrOfCardsTurned: number;
  setNrOfCardsTurned: Dispatch<SetStateAction<number>>;
};

function Game({ nrOfCardsTurned, setNrOfCardsTurned }: GameProps) {
  // reset the number of cards turned, once and not on rerender
  useEffect(() => setNrOfCardsTurned(0), []);
  const router = useRouter();
  const searchTerm = useParseSearchTerm(router);
  const { error, cards, setCards } = useFetchGiphy(searchTerm);
  const { flipCount, setFlipCount, timeoutObj } = useGamePlay(cards!, setCards);
  const { onClickCard } = useOnClickCard(
    cards! as CardT[],
    setCards,
    setFlipCount,
    timeoutObj!,
    nrOfCardsTurned,
    setNrOfCardsTurned
  );
  const { showConfetti } = useShowConfetti(flipCount, cards!);
  const gameIsOver = isGameOver(cards!);
  if (gameIsOver) {
    setTimeout(() => router.push('/'), 4000);
  }
  if (error) {
    setTimeout(() => router.push('/'), 3000);
  }
  return (
    <>
      {error ? <MessageSection>{error}</MessageSection> : null}
      {showConfetti > 0 ? (
        <Confetti
          // if a confetti starts while there's still confetti falling
          // shouldRecycle gets set to true so that confetti continues
          shouldRecycle={showConfetti > 1}
        />
      ) : null}
      <Board cards={cards} flipCount={flipCount} handleCardClick={onClickCard}>
        {gameIsOver ? (
          <MessageSection>
            It took you {nrOfCardsTurned} moves to finish the game
          </MessageSection>
        ) : null}
      </Board>
    </>
  );
}

export default Game;
