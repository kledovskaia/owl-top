import { AppProps } from 'next/app';
import Layout from '../layout/Layout';
import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout menu={pageProps.menu}>
      <Component {...pageProps} />
    </Layout>
  );
}
