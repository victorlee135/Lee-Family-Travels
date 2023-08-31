import type { AppProps } from 'next/app';
import '../styles/globals.css';

function LeeFamilyTravels({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default LeeFamilyTravels;