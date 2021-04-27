import React from 'react';
import Card, { CardProps } from './Card';
import styled from 'styled-components';
import { Cards } from '../logic/logic';

const BoardStyled = styled.div`
  display: flex-box;
`;

type BoardProps = {
  cards: Cards | null;
  flipCount: number;
  handleCardClick: (key: number, flipCount: number) => void;
};

function Board({ cards, flipCount, handleCardClick }: BoardProps) {
  if (!cards) {
    return null;
  }
  return (
    <BoardStyled>
      {cards.map((card) => Card({ ...card, handleCardClick, flipCount }))}
    </BoardStyled>
  );
}

export default Board;
