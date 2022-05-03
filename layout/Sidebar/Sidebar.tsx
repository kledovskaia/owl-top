import { useRouter } from 'next/router';
import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  useEffect,
  useState,
} from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { useMenu } from '../../context/MenuContext';
import Logo from '../../components/Logo/Logo';
import CoursesIcon from '../../public/courses.svg';
import SchoolIcon from '../../public/school.svg';
import StudentsIcon from '../../public/students.svg';
import styles from './Sidebar.module.scss';

const menuItems = [
  { icon: <CoursesIcon /> },
  ,
  ,
  ,
  { icon: <SchoolIcon /> },
  { icon: <StudentsIcon /> },
];

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Sidebar: FC<Props> = ({ className, ...props }) => {
  const { menu } = useMenu();
  const router = useRouter();
  const [currentFirst, setCurrentFirst] = useState<string>();
  const [currentSecond, setCurrentSecond] = useState<string>();
  const [currentThird, setCurrentThird] = useState<string>();

  useEffect(() => {
    const path = router.asPath;
    if (path === '/') {
      setCurrentFirst('courses');
      return;
    }
    const [, first, third] = path.split('/');
    setCurrentFirst(first);
    setCurrentThird(third);
  }, [router]);

  return (
    <nav className={cn(className, styles.sidebar)} {...props}>
      <Logo />
      <ul className={styles.sidebar__firstLevel}>
        {menu?.map((firstLevel) => (
          <li key={firstLevel.firstCategory}>
            <h2
              className={cn({
                [styles.active]: currentFirst === firstLevel.firstCategoryName,
              })}
              onClick={() => setCurrentFirst(firstLevel.firstCategoryName)}
            >
              {menuItems[firstLevel.firstCategory].icon}
              <span>{firstLevel.firstCategoryLabel}</span>
            </h2>
            <ul
              className={cn(styles.sidebar__secondLevel, {
                [styles.closed]:
                  !router.asPath
                    .split('/')
                    .includes(firstLevel.firstCategoryName) &&
                  firstLevel.firstCategoryName !== currentFirst,
              })}
            >
              {firstLevel.menu.map((secondLevel) => (
                <li key={secondLevel._id.secondCategory}>
                  <h3
                    onClick={() =>
                      setCurrentSecond((state) =>
                        state === secondLevel._id.secondCategory
                          ? null
                          : secondLevel._id.secondCategory
                      )
                    }
                  >
                    {secondLevel._id.secondCategory}
                  </h3>
                  <ul
                    className={cn(styles.sidebar__thirdLevel, {
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
                          <li>
                            <h4
                              className={cn({
                                [styles.active]:
                                  thirdLevel.alias === currentThird,
                              })}
                            >
                              {thirdLevel.title}
                            </h4>
                          </li>
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
    </nav>
  );
};

export default Sidebar;
