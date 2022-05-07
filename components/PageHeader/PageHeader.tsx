import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './PageHeader.module.scss'

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

const PageHeader: FC<Props> = ({ className, children, ...props }) => {
  return (
    <header className={cn(className, styles.header)} {...props}>
      {children}
    </header>
  )
}

export default PageHeader
