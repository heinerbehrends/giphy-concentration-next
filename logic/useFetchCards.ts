import { CardT } from './logic';

export function useFetchCards(
  input: string,
  setCards: React.Dispatch<React.SetStateAction<CardT[] | null>>
) {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await fetch('./api/giphy-fetch', {
      body: JSON.stringify({ searchTerm: input }),
      method: 'POST',
    })
      .then((response) => response.json())
      .then(({ data }) => setCards(data.cards));
  }
  return { handleSubmit };
}
