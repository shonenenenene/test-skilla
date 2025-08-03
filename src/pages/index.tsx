import Head from 'next/head';
import localFont from 'next/font/local';
import CallsList from '@/components/CallsList';

const sfSans = localFont({
  src: [
    {
      path: '../styles/fonts/SFProDisplay-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../styles/fonts/SFProDisplay-Semibold.otf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-sf-sans',
  display: 'swap',
  preload: true,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Skilla</title>
        <meta name='description' content='Skilla' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={` ${sfSans.variable}`}>
        <CallsList />
      </div>
    </>
  );
}
