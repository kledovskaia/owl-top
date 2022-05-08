import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './Product.module.scss'
import ProductHeader from '../ProductHeader/ProductHeader'
import Button from '../Button/Button'
import ArrowIcon from '../../public/arrow.svg'
import Tag from '../Tag/Tag'
import Heading from '../Heading/Heading'

type Props = {
  item: Product
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

const Product: FC<Props> = ({ className, item, ...props }) => {
  console.log(item.advantages)
  console.log(item.disAdvantages)

  return (
    <section className={cn(className, styles.product)} {...props}>
      <ProductHeader item={item} />
      <div className={styles.product__body}>
        <p className={styles.product__description}>{item.description}</p>
        <div className={styles.product__info}>
          <dl className={styles.product__characteristics}>
            {item.characteristics.map(({ name, value }) => (
              <div key={name}>
                <dt>{name}</dt>
                <div></div>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <ul className={styles.product__tags}>
            {item.tags.map(tag => (
              <li key={tag}>
                <Tag ghost small>
                  {tag}
                </Tag>
              </li>
            ))}
          </ul>
        </div>
        {(!!item.advantages || !!item.disAdvantages) && (
          <div className={styles.product__advantagesAndDisadvantages}>
            {item.advantages && (
              <div className={styles.product__advantages}>
                <Heading h4>Преимущества</Heading>
                <p>{item.advantages}</p>
              </div>
            )}
            {item.disAdvantages && (
              <div className={styles.product__disadvantages}>
                <Heading h4>Недостатки</Heading>
                <p>{item.disAdvantages}</p>
              </div>
            )}
          </div>
        )}
      </div>
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
