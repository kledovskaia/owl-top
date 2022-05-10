import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './Controls.module.scss'
import Button from '../Button/Button'
import SortIcon from '../../public/sort.svg'

const sortVariants: {
  type: SortType
  label: string
}[] = [
  { type: 'rating', label: 'По рейтингу' },
  { type: 'price', label: 'По цене' },
]

type Props = {
  handleRatingSort: () => void
  handlePriceSort: () => void
  currentSortType: SortType
  currentSortOrder: SortOrder
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const Controls: FC<Props> = ({
  className,
  handleRatingSort,
  handlePriceSort,
  currentSortType,
  currentSortOrder,
  ...props
}) => {
  return (
    <div
      className={cn(className, styles.controls, {
        [styles.controls_reverse]: currentSortOrder === 'asc',
      })}
      {...props}
    >
      {sortVariants.map(sort => (
        <Button
          key={sort.type}
          large
          {...(currentSortType !== sort.type
            ? {
                secondaryGhost: true,
              }
            : {
                bold: true,
                primaryGhost: true,
              })}
          onClick={
            sort.type === 'price'
              ? handlePriceSort
              : sort.type === 'rating'
              ? handleRatingSort
              : null
          }
        >
          <SortIcon
            className={cn(styles.controls__icon, {
              [styles.controls__icon_shown]: currentSortType === sort.type,
            })}
          />
          <span>{sort.label}</span>
        </Button>
      ))}
    </div>
  )
}

export default Controls
