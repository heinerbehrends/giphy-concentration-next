import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import Search from '../components/Search';
import { SearchTermContext } from './_app';

export default function Home() {
  const [input, setInput] = useState('');
  const { setSearchTerm } = useContext(SearchTermContext);
  const router = useRouter();
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearchTerm(input);
    router.push('game');
    setInput('');
  }
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }
  return (
    <Search
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      value={input}
    />
  );
}
