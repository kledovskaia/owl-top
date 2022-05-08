import cn from 'classnames'
import Image from 'next/image'
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import Heading from '../Heading/Heading'
import Tag from '../Tag/Tag'
import styles from './styles.module.scss'
import TrophyIcon from '../../public/trophy.svg'
import { priceRu } from '../../helpers'
import Rating from '../Rating/Rating'

type Props = {
  item: Product
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const Header: FC<Props> = ({ className, item, ...props }) => {
  return (
    <div className={cn(className, styles.product__header)} {...props}>
      <div className={styles.product__logo}>
        <Image
          height={70}
          width={70}
          src={`https://courses-top.ru${item.image}`}
          alt=""
        />
      </div>
      <Heading h3 className={styles.product__title}>
        {item.title}
        <span className={styles.product__leader}>
          <TrophyIcon />
        </span>
      </Heading>
      <div className={styles.product__categories}>
        {item.categories.map(category => (
          <Tag key={category} ghost small>
            {category}
          </Tag>
        ))}
      </div>
      <div className={styles.product__price}>
        <span className={styles.product__price}>{priceRu(item.price)}</span>
        <Tag green small bold>
          -{priceRu(item.oldPrice - item.price)}
        </Tag>
      </div>
      <div className={styles.product__label}>цена</div>
      <div className={styles.product__credit}>
        <span className={styles.product__price}>{priceRu(item.credit)}</span>
        <span>/мес</span>
      </div>
      <div className={styles.product__label}>в кредит</div>
      <Rating score={item.initialRating} className={styles.product__rating} />
      <div className={styles.product__label}>{item.reviewCount} отзывов</div>
    </div>
  )
}

export default Header
