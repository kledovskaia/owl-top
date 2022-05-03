import {
  ChangeEvent,
  DetailedHTMLProps,
  FC,
  FormHTMLAttributes,
  memo,
  useCallback,
  useState,
} from 'react';
import Button from '../Button/Button';
import SearchIcon from '../../public/search.svg';
import styles from './Search.module.scss';
import cn from 'classnames';

type Props = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

const Search: FC<Props> = ({ className, ...props }) => {
  const [search, setSearch] = useState('');

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }, []);

  return (
    <form className={cn(className, styles.search)} {...props}>
      <input
        className={styles.search__input}
        placeholder="Поиск..."
        value={search}
        onChange={handleChange}
      />
      <Button className={styles.search__button} primary>
        <SearchIcon />
      </Button>
    </form>
  );
};

export default memo(Search);
