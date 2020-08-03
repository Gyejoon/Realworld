import Head from 'next/head';
import { AppProps } from 'next/app';
import LayoutTemplate from 'components/layout/LayoutTemplate';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <LayoutTemplate>
        <Component {...pageProps} />
      </LayoutTemplate>
    </>
  );
}
