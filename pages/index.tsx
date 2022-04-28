import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { FC } from 'react';
import Head from 'next/head';
import { PageProps } from '../@types/types';

export const getStaticProps: GetStaticProps = async () => {
  const pageProps: PageProps[] = [];
  const { categories } = await import('../data/categories');
  categories.forEach(async (category) => {
    const { pageProps: props } = await import(`../data/${category}.json`);
    const name = categories[props.firstCategory];
    pageProps.push({
      ...props,
      firstCategoryName: name[0].toUpperCase() + name.slice(1),
    });
  });

  return {
    props: {
      menu: pageProps,
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
