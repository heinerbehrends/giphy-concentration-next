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
  padding: 1rem;
  font-size: 1.5rem;
  margin-left: 1.5rem;
`;
const Button = styled(Input)`
  padding-left: 3rem;
  padding-right: 3rem;
`;

const SearchSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    <>
      <h1>Search Giphy to start a game</h1>
      <SearchSection>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder={'Enter search term'}
            value={value}
            onChange={handleChange}
          />
          <Button type="submit" value="Go!" />
        </Form>
      </SearchSection>
    </>
  );
}
