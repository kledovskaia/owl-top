import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import Heading from '../../components/Heading/Heading'
import { menuItems } from '../../data'
import { getMenu } from '../../lib/getMenu'
import styles from '../../styles/CategoryPage.module.scss'

export const getStaticPaths = async () => {
  const { categories } = await import('../../data')
  const paths = categories
    .filter(type => type)
    .map(type => ({
      params: { type },
    }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const menu = await getMenu()
  const page = menu.find(item => item.firstCategoryName === params.type)

  return {
    props: {
      menu,
      page,
    },
  }
}

type Props = InferGetStaticPropsType<typeof getStaticProps> &
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

const Type: FC<Props> = ({ page, ...props }) => {
  return (
    <section className={styles.categoryPage} {...props}>
      <Heading h1 className={styles.categoryPage__title}>
        <span className={styles.categoryPage__iconContainer}>
          {menuItems[page.firstCategory].icon}
        </span>
        <span>{page.firstCategoryLabel}</span>
      </Heading>
      <ul className={styles.categoryPage__cardsContainer}>
        {page.menu.map(secondLevel => (
          <li
            className={styles.categoryPage__card}
            key={secondLevel._id.secondCategory}
          >
            <Heading h2>{secondLevel._id.secondCategory}</Heading>
            <ul className={styles.categoryPage__cardList}>
              {secondLevel.pages.map(thirdLevel => (
                <li key={thirdLevel._id}>
                  <Link href={`/${page.firstCategoryName}/${thirdLevel.alias}`}>
                    <a>{thirdLevel.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Type
