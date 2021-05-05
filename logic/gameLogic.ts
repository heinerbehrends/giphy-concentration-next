import { NextRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { CardT, countCards } from './logic';

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
