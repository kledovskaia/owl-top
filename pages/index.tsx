import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { FC } from 'react';
import Head from 'next/head';
import { PageProps } from '../@types/types';

export const getStaticProps: GetStaticProps = async () => {
  const pageProps: PageProps[] = [];
  const { categories, categoryLabels } = await import('../data/categories');
  for await (const category of categories) {
    if (!category) continue;
    const { pageProps: props } = await import(`../data/${category}.json`);
    pageProps.push({
      ...props,
      firstCategoryName: categoryLabels[category],
    });
  }

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
