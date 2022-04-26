import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import cn from 'classnames';
import styles from './Paragraph.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  size?: 's' | 'm' | 'l'
}

const Paragraph: FC<Props> = ({ size = 'm', children, className, ...props }) => {
  return <p className={cn(className, styles.paragraph, styles[`paragraph_${size}`])} {...props}>{children}</p>
}

export default Paragraph