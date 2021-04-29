import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Search from '../components/Search';

export default function Home() {
  const [input, setInput] = useState('');
  const router = useRouter();
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(`${input}`);
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
