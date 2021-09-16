import React from 'react';
import Card from './Card';
import { Cards } from '../logic/logic';
import { BoardSection, BoardStyled } from './BoardStyles';

type BoardProps = {
  cards: Cards | null;
  flipCount: number;
  handleCardClick: (key: number, flipCount: number) => void;
  children?: React.ReactNode;
};

function Board({ cards, flipCount, handleCardClick, children }: BoardProps) {
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
        {cards.map((card) => Card({ ...card, handleCardClick, flipCount }))}
      </BoardStyled>
    </BoardSection>
  );
}

export default Board;
