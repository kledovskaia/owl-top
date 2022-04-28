import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './Layout.module.scss';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';
import { MenuContextProvider } from '../context/MenuContext';
import { PageProps } from '../@types/types';

type Props = {
  menu: PageProps[];
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Layout: FC<Props> = ({ className, children, menu, ...props }) => {
  return (
    <div className={cn(className, styles.layout)} {...props}>
      <MenuContextProvider menu={menu}>
        <Header className={styles.layout__header} />
        <Sidebar className={styles.layout__sidebar} />
      </MenuContextProvider>
      <main className={styles.layout__main}>{children}</main>
      <Footer className={styles.layout__footer} />
    </div>
  );
};

export default Layout;
