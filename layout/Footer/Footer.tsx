import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const Footer: FC<Props> = (props) => {
  return <footer {...props}>Footer</footer>;
};

export default Footer;
