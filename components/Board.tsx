import React, { useState } from 'react';
import Card from './Card';
import { Cards } from '../logic/logic';
import { BoardSection, BoardStyled } from './BoardStyles';
import { Progress, Indicator, Loading } from './ProgressBar';

type BoardProps = {
  cards: Cards | null;
  flipCount: number;
  handleCardClick: (key: number, flipCount: number, progress: number) => void;
  children?: React.ReactNode;
};

function Board({ cards, flipCount, handleCardClick, children }: BoardProps) {
  const [progress, setProgress] = useState(0);
  if (!cards) {
    return null;
  }
  return (
    <BoardSection
      onDragStart={(event) => {
        event.preventDefault();
        return false;
      }}
    >
      <BoardStyled>
        {children}
        {cards.map((card) =>
          Card({ ...card, handleCardClick, flipCount, progress, setProgress })
        )}
      </BoardStyled>
      {progress < 24 && (
        <>
          <Loading>Loading...</Loading>
          <Progress max={24} value={progress}>
            <Indicator style={{ width: `${(progress / 24) * 100}%` }} />
          </Progress>
        </>
      )}
    </BoardSection>
  );
}

export default Board;
