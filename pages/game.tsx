import React, { useState, useEffect, useContext } from 'react';
import Board from '../components/Board';
import { makeNextCards, countCards, CardT, Cards } from '../logic/logic';
import { useClickCard } from '../logic/gameLogic';
import { SearchTermContext } from '../pages/_app';
import { useRouter } from 'next/router';

function Game() {
  const [cards, setCards] = useState<CardT[] | null>(null);
  const [flipCount, setFlipCount] = useState(0);
  const { searchTerm } = useContext(SearchTermContext);
  const router = useRouter();

  useEffect(() => {
    async function fetchGifs() {
      await fetch('./api/giphy-fetch', {
        body: JSON.stringify({ searchTerm }),
        method: 'POST',
      })
        .then((response) => response.json())
        .then(({ data }) => setCards(data.cards));
    }
    fetchGifs();
  }, []);
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
  if (cards && !countCards(cards)) {
    // confetti
    router.push('/');
  }
  return (
    <Board cards={cards} flipCount={flipCount} handleCardClick={clickCard} />
  );
}

export default Game;
