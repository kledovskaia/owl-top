import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import Heading from '../Heading/Heading'

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const Vacancies: FC<Props> = ({ children, ...props }) => {
  return (
    <div {...props}>
      <Heading h5>Всего вакансий</Heading>
      <p>{children}</p>
    </div>
  )
}

export default Vacancies
