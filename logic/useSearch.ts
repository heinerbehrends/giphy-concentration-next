import { useRouter } from 'next/router';
import { useState } from 'react';

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
