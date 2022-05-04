import {
  DetailedHTMLProps,
  FC,
  Fragment,
  HTMLAttributes,
  useState,
} from 'react'
import StarIcon from '../icons/Star'
import cn from 'classnames'
import styles from './Rating.module.scss'

enum Modificators {
  editable,
}

type Modificator = keyof typeof Modificators

type Props = {
  score?: number
  outOf?: number
  updateScore?: (val: Props['score']) => void
} & {
  [key in Modificator]?: boolean
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const Rating: FC<Props> = ({
  className,
  score,
  outOf = 5,
  editable,
  updateScore,
  ...props
}) => {
  const [currentScore, setCurrentScore] = useState(score)
  const propEntries = Object.entries(props)
  const appliedModificators = propEntries.filter(([key]) => key in Modificators)
  const restProps = propEntries.filter(([key]) => !(key in Modificators))

  return (
    <div
      className={cn(
        className,
        styles.rating,
        Object.fromEntries(
          appliedModificators.map(([key, value]) => [
            styles[`rating_${key}`],
            value,
          ]),
        ),
      )}
      {...restProps}
    >
      {new Array(outOf).fill(null).map((_, i) => (
        <StarIcon
          key={i}
          className={cn(styles.rating__star, {
            [styles.rating__star_editable]: editable,
            [styles.rating__star_filled]: i < currentScore,
          })}
          {...(editable
            ? {
                onMouseEnter: () => setCurrentScore(i + 1),
                onMouseLeave: () => setCurrentScore(score),
                onClick: () => updateScore(i + 1),
              }
            : {})}
        />
      ))}
    </div>
  )
}

export default Rating
