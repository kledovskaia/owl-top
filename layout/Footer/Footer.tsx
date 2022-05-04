import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './Footer.module.scss'

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

const Footer: FC<Props> = ({ className, ...props }) => {
  const year = new Date().getFullYear()
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <p className={styles.footer__copy}>
        OwlTop © 2020 - {year} Все права защищены
      </p>
      <a className={styles.footer__link} href="#" target="_blank">
        Пользовательское соглашение
      </a>
      <a className={styles.footer__link} href="#" target="_blank">
        Политика конфиденциальности
      </a>
    </footer>
  )
}

export default Footer
