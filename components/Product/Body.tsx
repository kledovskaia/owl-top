import { FC } from 'react'
import Heading from '../Heading/Heading'
import Tag from '../Tag/Tag'
import styles from './styles.module.scss'

type Props = {
  item: Product
}

const Body: FC<Props> = ({ item }) => {
  return (
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
  )
}
export default Body
