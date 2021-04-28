import React, { useState } from 'react';
import { Cards, CardT, flipCard, makeNextCards, shouldFlip } from './logic';

export function useClickCard(
  cards: Cards,
  setCards: React.Dispatch<React.SetStateAction<CardT[] | null>>,
  setFlipCount: React.Dispatch<React.SetStateAction<number>>
) {
  function clickCard(key: number, flipCount: number) {
    if (shouldFlip(cards as Cards, key, flipCount)) {
      setFlipCount(flipCount + 1);
      setCards(flipCard(cards as Cards, key));
    }
  }
  return { clickCard };
}

export function useFlipCount(
  cards: Cards,
  setCards: React.Dispatch<React.SetStateAction<CardT[] | null>>
) {
  const [flipCount, setFlipCount] = useState(0);
  if (flipCount === 2) {
    const nextCards = makeNextCards(cards as [CardT]);
    setTimeout(() => {
      setFlipCount(0);
      setCards(nextCards);
    }, 2500);
  }
  return { flipCount, setFlipCount };
}
