import React, { ChangeEventHandler, FormEventHandler } from 'react';
import styled from 'styled-components';
import { CardT } from '../logic/logic';

const Form = styled.form`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 1.5rem;
  margin-top: 3rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1.5rem;
  margin-left: 1.5rem;
`;

type SearchProps = {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  value: string;
  cards: CardT[] | null;
};

export default function Search({
  handleSubmit,
  handleChange,
  value,
  cards,
}: SearchProps) {
  if (cards) {
    return null;
  }
  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Search Giphy to start a game...
        <Input type="text" value={value} onChange={handleChange} />
      </label>
      <Input type="submit" value="Go!" />
    </Form>
  );
}
