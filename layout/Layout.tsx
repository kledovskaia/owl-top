import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './Layout.module.scss';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Layout: FC<Props> = ({ className, children, ...props }) => {
  return (
    <div className={cn(className, styles.layout)} {...props}>
      <Header className={styles.layout__header} />
      <Sidebar className={styles.layout__sidebar} />
      <main className={styles.layout__main}>{children}</main>
      <Footer className={styles.layout__footer} />
    </div>
  );
};

export default Layout;
