import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './Product.module.scss'
import ProductHeader from '../ProductHeader/ProductHeader'

type Props = {
  item: Product
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

const Product: FC<Props> = ({ className, item, ...props }) => {
  return (
    <section className={cn(className, styles.product)} {...props}>
      <ProductHeader item={item} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, harum.
      </p>
    </section>
  )
}

export default Product
