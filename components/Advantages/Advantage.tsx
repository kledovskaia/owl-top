import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import Icon from '../../public/done.svg'
import Heading from '../Heading/Heading'

type Props = {
  item: Advantage
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

const Advantage: FC<Props> = ({ className, item, ...props }) => {
  return (
    <section className={cn(className, styles.advantage)} {...props}>
      <Heading h5 className={styles.advantage__title}>
        <span className={styles.advantage__icon}>
          <Icon />
        </span>
        <span>{item.title}</span>
      </Heading>
      <p className={styles.advantage__description}>{item.description}</p>
    </section>
  )
}

export default Advantage
