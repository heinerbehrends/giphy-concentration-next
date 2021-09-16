import { AppProps } from 'next/app';
import { useState } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [nrOfCardTurned, setNrOfCardsTurned] = useState(0);
  return (
    <Component
      nrOfCardsTurned={nrOfCardTurned}
      setNrOfCardsTurned={setNrOfCardsTurned}
      {...pageProps}
    />
  );
}

export default MyApp;
