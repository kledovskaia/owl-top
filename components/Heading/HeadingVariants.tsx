import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>

export const h1: FC<Props> = props => <h1 {...props} />
export const h2: FC<Props> = props => <h2 {...props} />
export const h3: FC<Props> = props => <h3 {...props} />
export const h4: FC<Props> = props => <h4 {...props} />
export const h5: FC<Props> = props => <h5 {...props} />
export const h6: FC<Props> = props => <h6 {...props} />
