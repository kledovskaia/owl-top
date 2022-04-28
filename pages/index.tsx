import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { FC } from 'react';
import Head from 'next/head';

export const getStaticProps: GetStaticProps = async () => {
  const {
    pageProps: { menu },
  } = await import('../data/base.json');

  return {
    props: {
      menu,
    },
  };
};

const Home: FC<InferGetStaticPropsType<typeof getStaticProps>> = () => {
  return (
    <>
      <Head>
        <title>Top App</title>
      </Head>
    </>
  );
};

export default Home;
