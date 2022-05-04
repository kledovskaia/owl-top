import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next"
import Head from "next/head"
import { ParsedUrlQuery } from "querystring"
import Skills from "../../components/Skills/Skills"
import { getMenu } from "../../helper/getMenu"

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = []
  const { categories } = await import("../../data")
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
  console.log(page)
  console.log(products)

  return (
    <div>
      <Head>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
      </Head>
      <h1>{page.title}</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>{product.title}</li>
        ))}
      </ul>
      {/* <HHruInfo info={page.hh} />
      {!!page.advantages.length && <Advantages items={page.advantages} />} */}
      <Skills items={page.tags} />
    </div>
  )
}

export default Page
