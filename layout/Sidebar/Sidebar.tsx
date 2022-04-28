import { useRouter } from 'next/router';
import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  useEffect,
  useState,
} from 'react';
import { useMenu } from '../../context/MenuContext';
import cn from 'classnames';
import styles from './Sidebar.module.scss';
import Link from 'next/link';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Sidebar: FC<Props> = (props) => {
  const { menu } = useMenu();
  const router = useRouter();
  const [currentFirst, setCurrentFirst] = useState<string>();
  const [currentSecond, setCurrentSecond] = useState<string>();
  const [currentThird, setCurrentThird] = useState<string>();

  useEffect(() => {
    const [, first, third] = router.asPath.split('/');
    setCurrentFirst(first);
    setCurrentThird(third);
  }, [router]);

  return (
    <div {...props}>
      <ul>
        {menu?.map((firstLevel, index) => (
          <li key={firstLevel.firstCategory}>
            <h2 onClick={() => setCurrentFirst(firstLevel.firstCategoryName)}>
              {firstLevel.firstCategoryLabel}
            </h2>
            <ul
              className={cn({
                [styles.closed]: firstLevel.firstCategoryName !== currentFirst,
              })}
            >
              {firstLevel.menu.map((secondLevel) => (
                <li key={secondLevel._id.secondCategory}>
                  <h3
                    onClick={() =>
                      setCurrentSecond(secondLevel._id.secondCategory)
                    }
                  >
                    {secondLevel._id.secondCategory}
                  </h3>
                  <ul
                    className={cn({
                      [styles.closed]:
                        currentSecond !== secondLevel._id.secondCategory &&
                        secondLevel.pages.every(
                          (page) => page.alias !== currentThird
                        ),
                    })}
                  >
                    {secondLevel.pages.map((thirdLevel) => (
                      <Link
                        href={`/${firstLevel.firstCategoryName}/${thirdLevel.alias}`}
                        key={thirdLevel._id}
                      >
                        <a>
                          <li>{thirdLevel.title}</li>
                        </a>
                      </Link>
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
