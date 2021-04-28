import React, { useState, useEffect } from 'react';
import Board from './Board';
import Search from './Search';

import { makeNextCards, countCards, CardT, Cards } from '../logic/logic';
import { useFetchCards } from '../logic/useFetchCards';
import { useClickCard } from '../logic/gameLogic';

function Game() {
  const [cards, setCards] = useState<CardT[] | null>(null);
  const [input, setInput] = useState('');

  const [flipCount, setFlipCount] = useState(0);
  useEffect(() => {
    if (flipCount === 2) {
      const nextCards = makeNextCards(cards as [CardT]);
      setTimeout(() => {
        setFlipCount(0);
        setCards(nextCards);
      }, 2500);
    }
  });

  const { clickCard } = useClickCard(cards as Cards, setCards, setFlipCount);
  const { handleSubmit } = useFetchCards(input, setCards);

  if (cards && !countCards(cards)) {
    setCards(null);
    setInput('');
  }
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

  return (
    <>
      <Search
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={input}
        cards={cards}
      />
      <Board cards={cards} flipCount={flipCount} handleCardClick={clickCard} />
    </>
  );
}

export default Game;
