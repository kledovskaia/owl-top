import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const Header: FC<Props> = (props) => {
  return <header {...props}>Header</header>;
};

export default Header;
