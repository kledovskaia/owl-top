import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import { priceRu } from '../../helpers'
import Heading from '../Heading/Heading'
import JobRating from './JobRating'

const grades = {
  junior: 'Начальный',
  middle: 'Средний',
  senior: 'Профессионал',
}

type Props = {
  salaries: {
    [key in keyof typeof grades]: number
  }
} & DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>

const Salaries: FC<Props> = ({ salaries, ...props }) => {
  return (
    <ul {...props}>
      {Object.entries(salaries).map(([grade, value]) => (
        <li key={grade + value}>
          <Heading h5>{grades[grade]}</Heading>
          <p>{priceRu(value)}</p>
          <JobRating
            value={Object.keys(grades).indexOf(grade) + 1}
            outOf={Object.keys(grades).length}
          />
        </li>
      ))}
    </ul>
  )
}

export default Salaries
