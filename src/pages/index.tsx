import Head from 'next/head';
import CallsList from '@/components/CallsList';

export default function Home() {
  return (
    <>
      <Head>
        <title>Skilla</title>
        <meta name='description' content='Skilla' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <link rel='icon' href='/favicon.ico' />
      </Head>

      <CallsList />
    </>
  );
}
