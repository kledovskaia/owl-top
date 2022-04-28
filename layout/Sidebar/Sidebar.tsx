import { useRouter } from 'next/router';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { useMenu } from '../../context/MenuContext';
import cn from 'classnames';
import styles from './Sidebar.module.scss';
import Link from 'next/link';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Sidebar: FC<Props> = (props) => {
  const { menu } = useMenu();
  const router = useRouter();

  return (
    <div {...props}>
      <ul>
        {menu?.map((firstLevel) => (
          <li key={firstLevel.firstCategory}>
            <h2>{firstLevel.firstCategoryLabel}</h2>
            <ul
              className={cn({
                [styles.closed]: !router.asPath
                  .split('/')
                  .includes(firstLevel.firstCategoryLabel),
              })}
            >
              {firstLevel.menu.map((secondLevel) => (
                <li key={secondLevel._id.secondCategory}>
                  <h3
                    className={cn({
                      [styles.closed]: !router.asPath
                        .split('/')
                        .some((param) =>
                          secondLevel.pages.some((page) => page.alias === param)
                        ),
                    })}
                  >
                    {secondLevel._id.secondCategory}
                  </h3>
                  <ul
                    className={cn({
                      [styles.closed]: !router.asPath
                        .split('/')
                        .includes(secondLevel._id.secondCategory),
                    })}
                  >
                    {secondLevel.pages.map((thirdLevel) => (
                      <li key={thirdLevel._id}>{thirdLevel.title}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
