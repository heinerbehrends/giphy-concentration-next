import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useClickCard } from '../logic/gameLogic';
import Board from '../components/Board';
import {
  makeNextCards,
  countCards,
  CardT,
  Cards,
  isPair,
} from '../logic/logic';
import Confetti from '../components/Confetti';

function Game() {
  const [cards, setCards] = useState<CardT[] | null>(null);
  const [flipCount, setFlipCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  console.log(showConfetti);
  const router = useRouter();
  const searchTerm = decodeURIComponent(router.query.searchTerm as string);

  useEffect(() => {
    if (flipCount === 2 && isPair(cards as CardT[])) {
      setShowConfetti(true);
    }
  }, [cards]);

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
  }, [flipCount]);

  const { clickCard } = useClickCard(cards as Cards, setCards, setFlipCount);
  if (cards && !countCards(cards)) {
    // confetti
    router.push('/');
  }
  return (
    <>
      {showConfetti ? <Confetti setShowConfetti={setShowConfetti} /> : null}
      <Board cards={cards} flipCount={flipCount} handleCardClick={clickCard} />
    </>
  );
}

export default Game;
