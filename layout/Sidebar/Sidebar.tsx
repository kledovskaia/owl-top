import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { useMenu } from '../../context/MenuContext';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Sidebar: FC<Props> = (props) => {
  const { menu } = useMenu();

  console.log(menu);

  return <div {...props}></div>;
};

export default Sidebar;
