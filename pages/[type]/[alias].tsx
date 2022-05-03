import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import { ParsedUrlQuery } from 'querystring';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { getMenu } from '../../helper/getMenu';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [];
  const { categories } = await import('../../data/categories');
  for await (const category of categories) {
    if (!category) continue;
    const { pageProps }: RootObject = await import(
      `../../data/${category}.json`
    );
    for (const { pages } of pageProps.menu) {
      for (const { alias } of pages) {
        paths.push({
          params: {
            alias,
            type: category,
          },
        });
      }
    }
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  const menu = await getMenu();
  const {
    pageProps: { products, page },
  }: RootObject = await import(`../../data/${params.alias}.json`);

  return {
    props: {
      menu,
      products,
      page,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps> &
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Page: FC<Props> = ({ className, page, products, ...props }) => {
  return <div {...props}></div>;
};

export default Page;
