import cn from 'classnames'
import Image from 'next/image'
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import Heading from '../Heading/Heading'
import Tag from '../Tag/Tag'
import styles from './ProductHeader.module.scss'
import TrophyIcon from '../../public/trophy.svg'
import { priceRu } from '../../helpers'
import Rating from '../Rating/Rating'

type Props = {
  item: Product
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const ProductHeader: FC<Props> = ({ className, item, ...props }) => {
  console.log(item.initialRating)

  return (
    <div className={cn(className, styles.productHeader)} {...props}>
      <div className={styles.productHeader__logo}>
        <Image
          height={70}
          width={70}
          src={`https://courses-top.ru${item.image}`}
          alt=""
        />
      </div>
      <Heading h3 className={styles.productHeader__title}>
        {item.title}
        <span className={styles.productHeader__leader}>
          <TrophyIcon />
        </span>
      </Heading>
      <div className={styles.productHeader__tags}>
        {item.tags.map(tag => (
          <Tag key={tag} ghost small>
            {tag}
          </Tag>
        ))}
      </div>
      <div className={styles.productHeader__price}>
        <span className={styles.productHeader__price}>
          {priceRu(item.price)}
        </span>
        <Tag green small bold>
          -{priceRu(item.oldPrice - item.price)}
        </Tag>
      </div>
      <div className={styles.productHeader__label}>цена</div>
      <div className={styles.productHeader__credit}>
        <span className={styles.productHeader__price}>
          {priceRu(item.credit)}
        </span>
        <span>/мес</span>
      </div>
      <div className={styles.productHeader__label}>в кредит</div>
      <Rating
        score={item.initialRating}
        className={styles.productHeader__rating}
      />
      <div className={styles.productHeader__label}>
        {item.reviewCount} отзывов
      </div>
    </div>
  )
}

export default ProductHeader
