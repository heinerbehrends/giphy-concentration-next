import { NextRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {
  Cards,
  CardT,
  flipCard,
  shouldFlip,
  isPair,
  makeNextCards,
  countCards,
} from './logic';

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

export function useFetchGiphy(searchTerm: string) {
  const [cards, setCards] = useState<CardT[] | null>(null);

  useEffect(() => {
    async function fetchGifs() {
      await fetch('./api/giphy-fetch', {
        body: JSON.stringify({ searchTerm }),
        method: 'POST',
      })
        .then((response) => response.json())
        .then(({ data }) => setCards(data.cards));
    }
    if (searchTerm && searchTerm !== 'undefined') {
      fetchGifs();
    }
  }, [searchTerm]);
  return { cards, setCards };
}

export function useShowConfetti(flipCount: number, cards: Cards) {
  const [showConfetti, setShowConfetti] = useState(false);
  useEffect(() => {
    if (flipCount === 2 && isPair(cards as CardT[])) {
      setShowConfetti(true);
    }
  }, [cards]);
  return { showConfetti, setShowConfetti };
}

export function useParseSearchTerm(router: NextRouter) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setSearchTerm(decodeURIComponent(router.query.searchTerm as string));
  }, [router.query]);
  return searchTerm;
}

export function isGameOver(cards: CardT[]) {
  if (cards) {
    return cards.length && !countCards(cards);
  }
  return false;
}

export function useGamePlay(
  cards: Cards,
  setCards: React.Dispatch<React.SetStateAction<CardT[] | null>>
) {
  const [flipCount, setFlipCount] = useState(0);
  useEffect(() => {
    if (flipCount === 2) {
      const nextCards = makeNextCards(cards as [CardT]);
      setTimeout(() => {
        setFlipCount(0);
        setCards(nextCards);
      }, 2500);
    }
  }, [flipCount]);
  return { flipCount, setFlipCount };
}
