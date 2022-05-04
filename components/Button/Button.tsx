import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'

enum Modifications {
  primary,
  ghost,
}

type Modification = keyof typeof Modifications

type Props = {
  [key in Modification]?: boolean
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const Button: FC<Props> = ({ className, children, ...props }) => {
  const propEntries = Object.entries(props)
  const appliedModifications = propEntries.filter(
    ([key]) => key in Modifications,
  )
  const restProps = propEntries.filter(([key]) => !(key in Modifications))

  return (
    <button
      className={cn(
        className,
        styles.button,
        Object.fromEntries(
          appliedModifications.map(([key, value]) => [
            styles[`button_${key}`],
            value,
          ]),
        ),
      )}
      {...restProps}
    >
      {children}
    </button>
  )
}

export default Button
