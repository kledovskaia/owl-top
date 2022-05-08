import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './Product.module.scss'
import ProductHeader from '../ProductHeader/ProductHeader'
import Button from '../Button/Button'
import ArrowIcon from '../../public/arrow.svg'

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
      <div className={styles.product__footer}>
        <Button primary large>
          Узнать подробнее
        </Button>
        <Button ghost large>
          <span>Читать отзывы</span>
          <ArrowIcon />
        </Button>
      </div>
    </section>
  )
}

export default Product
