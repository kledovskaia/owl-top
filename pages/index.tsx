import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { FC } from 'react'
import Head from 'next/head'
import { getMenu } from '../lib/getMenu'
import Heading from '../components/Heading/Heading'
import HeroImage from '../public/hero.svg'
import styles from '../styles/MainPage.module.scss'
import Paragraph from '../components/Paragraph/Paragraph'
import { menuItems } from '../data'
import Link from 'next/link'

export const getStaticProps: GetStaticProps<{
  menu: MenuProps[]
}> = async () => {
  const menu = await getMenu()

  return {
    props: {
      menu,
    },
  }
}

const Home: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ menu }) => {
  return (
    <>
      <Head>
        <title>Top App</title>
      </Head>
      <section className={styles.mainPage}>
        <div className={styles.mainPage__content}>
          <Heading h1 className={styles.mainPage__title}>
            Обучайся с нами!
          </Heading>
          <Paragraph large>
            Подборки лучших курсов и рейтинги, основанные на реальных отзывах.
          </Paragraph>
          <ul className={styles.mainPage__list}>
            {menu.map(item => (
              <li key={item.firstCategory}>
                <Link href={`/${item.firstCategoryName}`}>
                  <a>
                    <Heading h2 className={styles.mainPage__item}>
                      <span className={styles.mainPage__iconContainer}>
                        {menuItems[item.firstCategory].icon}
                      </span>
                      <span>{item.firstCategoryLabel}</span>
                    </Heading>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <HeroImage />
      </section>
    </>
  )
}

export default Home
