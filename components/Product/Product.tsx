import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import Body from './Body'
import Header from './Header'
import Footer from './Footer'

type Props = {
  item: Product
  isLeader: boolean
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

const Product: FC<Props> = ({ className, item, isLeader, ...props }) => {
  return (
    <section className={cn(className, styles.product)} {...props}>
      <Header item={item} isLeader={isLeader} />
      <Body item={item} />
      <Footer />
    </section>
  )
}

export default Product
