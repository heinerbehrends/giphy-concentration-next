import React, { ChangeEventHandler, FormEventHandler } from 'react';
import {
  SearchSection,
  Heading,
  Form,
  TextInput,
  Button,
} from './SearchStyles';

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
          aria-label="Enter search term"
          placeholder={'Enter search term'}
          value={value}
          onChange={handleChange}
        />
        <Button type="submit" value="Go!" />
      </Form>
    </SearchSection>
  );
}
