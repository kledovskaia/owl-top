import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import Advantage from './Advantage'
import Heading from '../Heading/Heading'

type Props = {
  items: Advantage[]
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

const Advantages: FC<Props> = ({ className, items, ...props }) => {
  return (
    <section className={cn(className, styles.advantages)} {...props}>
      <Heading h4>Преимущества</Heading>
      <ul className={styles.advantages__list}>
        {items.map(item => (
          <li className={styles.advantages__listItem} key={item._id}>
            <Advantage className={styles.advantages__advantage} item={item} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Advantages
