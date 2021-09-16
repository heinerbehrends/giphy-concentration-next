import React, { ChangeEventHandler, FormEventHandler } from 'react';
import { useRouter } from 'next/router';
import {
  SearchSection,
  Heading,
  Form,
  TextInput,
  Button,
  ReplayButton,
} from './SearchStyles';

type SearchProps = {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  value: string;
  nrOfCardsTurned: number;
};

export default function Search({
  handleSubmit,
  handleChange,
  value,
  nrOfCardsTurned,
}: SearchProps) {
  const router = useRouter();
  return (
    <SearchSection>
      {nrOfCardsTurned > 0 ? (
        <ReplayButton as="button" onClick={() => router.back()}>
          Play again!
        </ReplayButton>
      ) : null}

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
