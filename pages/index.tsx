import Head from 'next/head';
import Paragraph from '../components/Paragraph/Paragraph';
import Tag from '../components/Tag/Tag';

const Home = () => {
  return (
    <>
      <Head>
        <title>Top App</title>
      </Head>
      <Paragraph small>Hello World!</Paragraph>
      <Paragraph medium>Hello World!</Paragraph>
      <Paragraph large>Hello World!</Paragraph>
      <hr />
      <Tag>Tag</Tag>
      <Tag small>Tag</Tag>
      <Tag red>Tag</Tag>
      <Tag red small>
        Tag
      </Tag>
      <Tag green large>
        Tag
      </Tag>
      <Tag green>Tag</Tag>
      <Tag green small>
        Tag
      </Tag>
      <Tag ghost>Tag</Tag>
      <Tag ghost small>
        Tag
      </Tag>
      <Tag primary>Tag</Tag>
      <Tag primary small>
        Tag
      </Tag>
      <Tag gray>Tag</Tag>
      <Tag gray small>
        Tag
      </Tag>
    </>
  );
};

export default Home;
