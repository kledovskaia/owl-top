import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { FC } from 'react'
import Head from 'next/head'
import { getMenu } from '../lib/getMenu'

export const getStaticProps: GetStaticProps = async () => {
  const menu = await getMenu()

  return {
    props: {
      menu,
    },
  }
}

const Home: FC<InferGetStaticPropsType<typeof getStaticProps>> = () => {
  return (
    <>
      <Head>
        <title>Top App</title>
      </Head>
    </>
  )
}

export default Home
