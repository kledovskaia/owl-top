import { InferGetStaticPropsType } from 'next'
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import { getMenu } from '../../lib/getMenu'

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
  return <section {...props}>Type</section>
}

export default Type
