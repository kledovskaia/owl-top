import { NextRouter } from 'next/router'
import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  memo,
  useCallback,
  useMemo,
  useState,
} from 'react'
import Heading from '../../components/Heading/Heading'
import { menuItems } from '../../data'
import cn from 'classnames'
import Link from 'next/link'

type Props = {
  info: MenuProps
  activeClassName?: string
  router: NextRouter
  isInitiallyOpen?: boolean
} & DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement>

const FirstLevel: FC<Props> = ({
  className,
  children,
  info,
  activeClassName,
  router,
  isInitiallyOpen,
  ...props
}) => {
  const isInPath = useMemo(
    () => router.asPath.split('/').includes(info.firstCategoryName),
    [router, info.firstCategoryName],
  )

  return (
    <li className={className} {...props}>
      <Link href={`/${info.firstCategoryName}`}>
        <a>
          <Heading
            h2
            className={cn({
              [activeClassName]: router.asPath
                .split('/')
                .includes(info.firstCategoryName),
            })}
          >
            {menuItems[info.firstCategory].icon}
            <span>{info.firstCategoryLabel}</span>
          </Heading>
        </a>
      </Link>
      {(isInitiallyOpen || isInPath) && children}
    </li>
  )
}

export default memo(FirstLevel)
