import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import Body from './Body'
import Header from './Header'
import Footer from './Footer'

type Props = {
  item: Product
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

const Product: FC<Props> = ({ className, item, ...props }) => {
  return (
    <section className={cn(className, styles.product)} {...props}>
      <Header item={item} />
      <Body item={item} />
      <Footer />
    </section>
  )
}

export default Product
