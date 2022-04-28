import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { useMenu } from '../../context/MenuContext';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const Header: FC<Props> = (props) => {
  const { menu } = useMenu();

  return <header {...props}>Header</header>;
};

export default Header;
