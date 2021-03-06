import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'
import { useCallback, useEffect, useMemo, useState } from 'react'
import Advantages from '../../components/Advantages/Advantages'
import Controls from '../../components/Controls/Controls'
import Heading from '../../components/Heading/Heading'
import HHruInfo from '../../components/HHruInfo/HHruInfo'
import PageHeader from '../../components/PageHeader/PageHeader'
import Product from '../../components/Product/Product'
import Skills from '../../components/Skills/Skills'
import Tag from '../../components/Tag/Tag'
import { getMenu } from '../../lib/getMenu'
import styles from '../../styles/ProductsPage.module.scss'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = []
  const { categories } = await import('../../data')
  for await (const category of categories) {
    if (!category) continue
    const { pageProps }: RootObject = await import(
      `../../data/${category}.json`
    )
    for (const { pages } of pageProps.menu) {
      for (const { alias } of pages) {
        paths.push({
          params: {
            alias,
            type: category,
          },
        })
      }
    }
  }

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  const menu = await getMenu()
  const {
    pageProps: { products, page },
  }: RootObject = await import(`../../data/${params.alias}.json`)

  return {
    props: {
      menu,
      products,
      page,
    },
  }
}

type Props = {
  page: Page
  products: Product[]
} & InferGetStaticPropsType<typeof getStaticProps>

const Page: NextPage<Props> = ({ page, products }) => {
  const [sortType, setSortType] = useState<SortType>('rating')
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc')
  const [sortedProducts, setSortedProducts] = useState(products)

  useEffect(() => {
    setSortedProducts(state => {
      let result = [...state]
      switch (sortType) {
        case 'price':
          result.sort((a, b) => b.price - a.price)
          break
        case 'rating':
          result.sort((a, b) => b.initialRating - a.initialRating)
          break
      }
      switch (sortOrder) {
        case 'asc':
          result.reverse()
      }
      return result
    })
  }, [sortType, sortOrder])

  const handlePriceSort = useCallback(() => {
    if (sortType === 'price') {
      setSortOrder(state => (state === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortType('price')
      setSortOrder('desc')
    }
  }, [sortType])
  const handleRatingSort = useCallback(() => {
    if (sortType === 'rating') {
      setSortOrder(state => (state === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortType('rating')
      setSortOrder('desc')
    }
  }, [sortType])

  const highestRating = useMemo(() => {
    return products.reduce(
      (max, item) => (max = Math.max(max, item.initialRating)),
      0,
    )
  }, [products])

  return (
    <main className={styles.productsPage}>
      <Head>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
      </Head>
      <PageHeader>
        <Heading h1>
          <span>{page.title}</span>
          <Tag large gray>
            {products.length}
          </Tag>
        </Heading>
        <Controls
          currentSortOrder={sortOrder}
          currentSortType={sortType}
          handlePriceSort={handlePriceSort}
          handleRatingSort={handleRatingSort}
        />
      </PageHeader>

      <div className={styles.productsPage__content}>
        <ul className={styles.productsPage__productList}>
          {sortedProducts.map(product => (
            <li key={product._id}>
              <Product
                isLeader={highestRating === product.initialRating}
                item={product}
              />
            </li>
          ))}
        </ul>
        <HHruInfo info={page.hh} title={page.category} />
        {!!page.advantages.length && <Advantages items={page.advantages} />}
        <Skills items={page.tags} />
      </div>
    </main>
  )
}

export default Page
