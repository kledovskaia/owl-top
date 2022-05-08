import Button from '../Button/Button'
import styles from './styles.module.scss'
import ArrowIcon from '../../public/arrow.svg'

const Footer = () => {
  return (
    <div className={styles.product__footer}>
      <Button primary large>
        Узнать подробнее
      </Button>
      <Button ghost large>
        <span>Читать отзывы</span>
        <ArrowIcon />
      </Button>
    </div>
  )
}

export default Footer
