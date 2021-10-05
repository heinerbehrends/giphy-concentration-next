import React from 'react';
import Search from '../components/Search';
import { useSearch } from '../logic/useSearch';

type HomeProps = {
  nrOfCardsTurned: number;
};

export default function Home({ nrOfCardsTurned }: HomeProps) {
  const { input, handleChange, handleSubmit } = useSearch();
  return (
    <Search
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      value={input}
      nrOfCardsTurned={nrOfCardsTurned}
    />
  );
}
