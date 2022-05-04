import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import Heading from '../Heading/Heading'
import Salaries from './Salaries'
import Vacancies from './Vacancies'

type Props = {
  info: Page['hh']
  title: Page['category']
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

const HHruInfo: FC<Props> = ({ className, info, title, ...props }) => {
  return (
    <section className={cn(className, styles.hhru)} {...props}>
      <Heading h4>Вакансии - {title}</Heading>
      <div className={styles.hhru__content}>
        <Vacancies className={cn(styles.hhru__card, styles.hhru__vacancies)}>
          {info.count}
        </Vacancies>
        <Salaries
          className={cn(styles.hhru__card, styles.hhru__salaries)}
          salaries={{
            junior: info.juniorSalary,
            middle: info.middleSalary,
            senior: info.seniorSalary,
          }}
        />
      </div>
    </section>
  )
}

export default HHruInfo
