import Link from 'next/link'
import { DetailedHTMLProps, FC, LiHTMLAttributes, memo } from 'react'
import Heading from '../../components/Heading/Heading'
import cn from 'classnames'
import { NextRouter } from 'next/router'

type Props = {
  info: MenuItem
  link: string
  activeClassName?: string
  router: NextRouter
} & DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>

const ThirdLevel: FC<Props> = ({
  className,
  children,
  info,
  link,
  router,
  activeClassName,
  ...props
}) => {
  return (
    <li className={className} {...props}>
      <Link href={link}>
        <a>
          <Heading
            h4
            className={cn({
              [activeClassName]: router.asPath.split('/').includes(info.alias),
            })}
          >
            {info.title}
          </Heading>
        </a>
      </Link>
    </li>
  )
}

export default memo(ThirdLevel)
