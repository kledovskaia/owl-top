import Head from 'next/head';
import Paragraph from '../components/Paragraph/Paragraph';

const Home = () => {
  return (
    <>
      <Head>
        <title>Top App</title>
      </Head>
      <Paragraph small>Hello World!</Paragraph>
      <Paragraph medium>Hello World!</Paragraph>
      <Paragraph large>Hello World!</Paragraph>
    </>
  );
};

export default Home;
