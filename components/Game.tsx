import React, { useState, useEffect } from 'react';
import Board from './Board';
import Search from './Search';

import {
  makeNextCards,
  cardCount,
  flipCard,
  shouldFlip,
  CardT,
  Cards,
} from '../logic/logic';

function Game() {
  const [input, setInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [cards, setCards] = useState<CardT[] | null>(null);
  const [flipCount, setFlipCount] = useState(0);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await fetch('./api/giphy-fetch', {
      body: JSON.stringify({ searchTerm: input }),
      method: 'POST',
    })
      .then((response) => response.json())
      .then(({ data }) => setCards(data.cards));
  }

  // useEffect(() => {
  //   if (searchTerm) {
  //     search(searchTerm, options);
  //   }
  // }, [searchTerm]);

  useEffect(() => {
    if (flipCount === 2) {
      const nextCards = makeNextCards(cards as Cards);
      setTimeout(() => {
        setFlipCount(0);
        setCards(nextCards);
      }, 2500);
    }
  });

  if (cards && !cardCount(cards)) {
    setCards(null);
    setInput('');
  }

  function clickCard(key: number, flipCount: number) {
    if (shouldFlip(cards as Cards, key, flipCount)) {
      setFlipCount(flipCount + 1);
      setCards(flipCard(cards as Cards, key));
    }
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
