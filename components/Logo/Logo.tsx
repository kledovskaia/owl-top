import { DetailedHTMLProps, FC, HTMLAttributes, memo } from 'react'
import cn from 'classnames'
import LogoIcon from '../../public/logo.svg'
import styles from './Logo.module.scss'

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const Logo: FC<Props> = ({ className, ...props }) => {
  return (
    <div className={cn(styles.logo, className)} {...props}>
      <LogoIcon className={styles.logo__icon} />
      <h1 className={styles.logo__title}>
        <div className={cn(styles.logo__text, styles.logo__text_large)}>
          OWL
        </div>
        <div className={styles.logo__text}>top</div>
      </h1>
    </div>
  )
}

export default memo(Logo)
