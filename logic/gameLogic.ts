import { NextRouter, useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {
  Cards,
  CardT,
  flipCard,
  shouldFlip,
  isPair,
  countCards,
  shouldTriggerFlipBack,
  flipOrRemove,
} from './logic';

export function useOnClickCard(
  cards: Cards,
  setCards: React.Dispatch<React.SetStateAction<CardT[] | null>>,
  setFlipCount: React.Dispatch<React.SetStateAction<number>>,
  timeoutObj: NodeJS.Timeout
) {
  function onClickCard(key: number, flipCount: number) {
    if (shouldFlip(cards as Cards, key, flipCount)) {
      setFlipCount(flipCount + 1);
      setCards(flipCard(cards as Cards, key));
    }
    if (shouldTriggerFlipBack(cards as Cards, key, flipCount)) {
      clearTimeout(timeoutObj);
      setCards(flipCard(flipOrRemove(cards as Cards, isPair(cards)), key));
      setFlipCount(1);
    }
  }
  return { onClickCard };
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
    if (!!searchTerm && searchTerm !== 'undefined') {
      fetchGifs();
    }
  }, [searchTerm]);
  return { cards, setCards };
}

export function useShowConfetti(flipCount: number, cards: Cards) {
  const [showConfetti, setShowConfetti] = useState(false);
  useEffect(() => {
    if (flipCount === 2 && isPair(cards as CardT[])) {
      // if confetti is still falling restart the confetti machine
      if (showConfetti) setShowConfetti(false);
      setTimeout(() => {
        setShowConfetti(true);
      }, 100);
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
  const [timeoutObj, setTimeoutObj] = useState<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (flipCount === 2) {
      const nextCards = flipOrRemove(cards as [CardT], isPair(cards));
      const timeout = setTimeout(() => {
        setFlipCount(0);
        setCards(nextCards);
      }, 2500);
      setTimeoutObj(timeout);
    }
  }, [flipCount]);
  return { flipCount, setFlipCount, timeoutObj };
}

export function useSearch() {
  const [input, setInput] = useState('');
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(encodeURIComponent(input));
  }
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }
  return { input, handleChange, handleSubmit };
}
