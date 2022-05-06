import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import cn from 'classnames'
import RoundStarIcon from '../../public/round-star.svg'
import styles from './styles.module.scss'

type Props = {
  value: number
  outOf: number
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const JobRating: FC<Props> = ({ className, value, outOf, ...props }) => {
  return (
    <div className={cn(className, styles.jobRating)} {...props}>
      <div className={styles.jobRating__items}>
        {new Array(outOf).fill(RoundStarIcon).map((Icon, i) => (
          <Icon key={i} />
        ))}
      </div>
      <div
        className={cn(styles.jobRating__items, styles.jobRating__items_filled)}
      >
        {new Array(value).fill(RoundStarIcon).map((Icon, i) => (
          <Icon key={i} />
        ))}
      </div>
    </div>
  )
}

export default JobRating
