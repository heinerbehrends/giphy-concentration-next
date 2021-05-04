import React from 'react';
import Search from '../components/Search';
import { useSearch } from '../logic/gameLogic';

export default function Home() {
  const { input, handleChange, handleSubmit } = useSearch();
  return (
    <Search
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      value={input}
    />
  );
}
