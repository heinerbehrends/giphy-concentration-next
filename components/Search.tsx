import React, { ChangeEventHandler, FormEventHandler } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 1.5rem;
  margin-top: 3rem;
  margin: 0 auto;
`;

const Input = styled.input`
  margin-left: 1.5rem;
  padding: 1rem;
  padding-left: 1.5rem;
  font-size: 1.5rem;
  border-radius: 1.5rem;
  box-shadow: 0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.3);
  :focus {
    border-width: 0.15rem;
    box-shadow: 0.28rem 0.28em 0.56rem rgba(0, 0, 0, 0.3);
    outline: none;
    transform: scale(1.05);
  }
`;
const TextInput = styled(Input)`
  :focus {
    box-shadow: 0.3rem 0.3em 0.6rem rgba(0, 0, 0, 0.3),
      0.1rem 0.1rem 0.2rem rgb(189, 189, 189) inset;
    outline: none;
  }
`;
const Button = styled(Input)`
  margin-left: 3rem;
  padding-left: 3rem;
  padding-right: 3rem;
  font-weight: 700;
  background-color: rgba(255, 151, 151, 0.4);
  :active {
    transform: scale(0.95);
    box-shadow: 0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.3);
  }
`;

const SearchSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Heading = styled.h1`
  font-size: 3rem;
`;

type SearchProps = {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  value: string;
};

export default function Search({
  handleSubmit,
  handleChange,
  value,
}: SearchProps) {
  return (
    <SearchSection>
      <Heading>Search Giphy to start a game</Heading>
      <Form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder={'Enter search term'}
          value={value}
          onChange={handleChange}
        />
        <Button type="submit" value="Go!" />
      </Form>
    </SearchSection>
  );
}
