import { NextRouter } from 'next/router';
import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Heading from '../../components/Heading/Heading';

type Props = {
  info: Menu;
  router: NextRouter;
} & DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement>;

const SecondLevel: FC<Props> = ({
  className,
  children,
  info,
  router,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isInPath = useMemo(
    () =>
      router.asPath
        .split('/')
        .some((item) => info.pages.some((page) => item === page.alias)),
    [router, info.pages]
  );

  useEffect(() => {
    setIsOpen(isInPath);
  }, [isInPath]);

  const handleClick = useCallback(() => {
    console.log('click');
    if (!isInPath) {
      setIsOpen((state) => !state);
    }
  }, [isInPath]);

  return (
    <li className={className} {...props}>
      <Heading h3 handleClick={handleClick}>
        {info._id.secondCategory}
      </Heading>
      {isOpen && children}
    </li>
  );
};

export default memo(SecondLevel);
