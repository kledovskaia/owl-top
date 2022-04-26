import Head from 'next/head';
import Button from '../components/Button/Button';
import Heading from '../components/Heading/Heading';
import Paragraph from '../components/Paragraph/Paragraph';
import Tag from '../components/Tag/Tag';
import ArrowIcon from '../components/icons/Arrow';
import Rating from '../components/Rating/Rating';
import { useState } from 'react';
import Layout from '../layout/Layout';

const Home = () => {
  const [score, setScore] = useState(0);

  return (
    <>
      <Head>
        <title>Top App</title>
      </Head>
      <Paragraph small>Hello World!</Paragraph>
      <Paragraph medium>Hello World!</Paragraph>
      <Paragraph large>Hello World!</Paragraph>
      <br />
      <hr />
      <br />
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
      <br />
      <hr />
      <br />
      <Heading>Hello World!</Heading>
      <Heading h1>Hello World!</Heading>
      <Heading h2>Hello World!</Heading>
      <Heading h3>Hello World!</Heading>
      <Heading h4>Hello World!</Heading>
      <Heading h5>Hello World!</Heading>
      <br />
      <hr />
      <br />
      <Button>Hello World!</Button>
      <Button primary>Hello World!</Button>
      <Button ghost>Hello World!</Button>
      <Button ghost>
        <span>Hello World!</span>
        <ArrowIcon />
      </Button>
      <br />
      <br />
      <hr />
      <br />
      <Rating score={score} updateScore={setScore} editable />
      <Rating />
    </>
  );
};

export default Home;
