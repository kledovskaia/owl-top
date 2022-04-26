import Head from 'next/head';
import Paragraph from '../components/Paragraph/Paragraph';

const Home = () => {
  return (
    <>
      <Head>
        <title>Top App</title>
      </Head>
      <Paragraph size="s">Hello World!</Paragraph>
      <Paragraph size="m">Hello World!</Paragraph>
      <Paragraph size="l">Hello World!</Paragraph>
    </>
  );
};

export default Home;
