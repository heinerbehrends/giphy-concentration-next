import { useState, useEffect } from 'react';
import { CardT } from './logic';

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
