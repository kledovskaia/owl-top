import { NextRouter } from 'next/router';
import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  memo,
  useCallback,
  useMemo,
  useState,
} from 'react';
import Heading from '../../components/Heading/Heading';
import { menuItems } from '../../data';
import cn from 'classnames';

type Props = {
  info: MenuProps;
  activeClassName?: string;
  router: NextRouter;
} & DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement>;

const FirstLevel: FC<Props> = ({
  className,
  children,
  info,
  activeClassName,
  router,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isInPath = useMemo(
    () => router.asPath.split('/').includes(info.firstCategoryName),
    [router, info.firstCategoryName]
  );

  const handleClick = useCallback(() => {
    if (!isInPath) setIsOpen((state) => !state);
  }, [isInPath]);

  return (
    <li className={className} {...props}>
      <Heading
        h2
        handleClick={handleClick}
        className={cn({
          [activeClassName]: router.asPath
            .split('/')
            .includes(info.firstCategoryName),
        })}
      >
        {menuItems[info.firstCategory].icon}
        <span>{info.firstCategoryLabel}</span>
      </Heading>
      {(isOpen || isInPath) && children}
    </li>
  );
};

export default memo(FirstLevel);
