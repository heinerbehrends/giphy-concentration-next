import { AppProps } from 'next/dist/next-server/lib/router/router';
import { createContext, useState } from 'react';
import '../styles/globals.css';

type SearchTermContextT = {
  searchTerm: string;
  setSearchTerm: (search: string) => void;
};
export const SearchTermContext = createContext<SearchTermContextT>({
  searchTerm: 'kitten',
  setSearchTerm: (string) => {},
});

function MyApp({ Component, pageProps }: AppProps) {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <SearchTermContext.Provider value={{ searchTerm, setSearchTerm }}>
      <Component {...pageProps} />
    </SearchTermContext.Provider>
  );
}

export default MyApp;
