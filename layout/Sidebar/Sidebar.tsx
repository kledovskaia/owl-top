import { useRouter } from 'next/router';
import { DetailedHTMLProps, FC, HTMLAttributes, useMemo } from 'react';
import cn from 'classnames';
import { useMenu } from '../../context/MenuContext';
import Logo from '../../components/Logo/Logo';

import styles from './Sidebar.module.scss';
import Search from '../../components/Search/Search';
import FirstLevel from './FirstLevel';
import SecondLevel from './SecondLevel';
import ThirdLevel from './ThirdLevel';
import { Category } from '../../@types/types';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Sidebar: FC<Props> = ({ className, ...props }) => {
  const { menu } = useMenu();
  const router = useRouter();

  const isSomeFirstLevelOpen = useMemo(() => {
    return menu.some((item) =>
      router.asPath.split('/').includes(item.firstCategoryName)
    );
  }, [router, menu]);

  return (
    <nav className={cn(className, styles.sidebar)} {...props}>
      <Logo />
      <Search />
      <ul className={styles.sidebar__firstLevel}>
        {menu.map((firstLevel) => (
          <FirstLevel
            isInitiallyOpen={
              firstLevel.firstCategory === Category['courses'] &&
              !isSomeFirstLevelOpen
            }
            router={router}
            key={firstLevel.firstCategory}
            info={firstLevel}
            activeClassName={styles.active}
          >
            <ul className={styles.sidebar__secondLevel}>
              {firstLevel.menu.map((secondLevel) => (
                <SecondLevel
                  router={router}
                  key={secondLevel._id.secondCategory}
                  info={secondLevel}
                >
                  <ul className={styles.sidebar__thirdLevel}>
                    {secondLevel.pages.map((thirdLevel) => (
                      <ThirdLevel
                        router={router}
                        key={thirdLevel._id}
                        info={thirdLevel}
                        link={`/${firstLevel.firstCategoryName}/${thirdLevel.alias}`}
                        activeClassName={styles.active}
                      />
                    ))}
                  </ul>
                </SecondLevel>
              ))}
            </ul>
          </FirstLevel>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
