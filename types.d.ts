enum Category {
  courses = 0,
  school = 4,
  students = 5,
}

type MenuProps = {
  menu: Menu[];
  firstCategory: Category;
  firstCategoryName: keyof typeof Category;
  firstCategoryLabel: string;
};
type Id = {
  secondCategory: string;
};

type MenuItem = {
  alias: string;
  title: string;
  _id: string;
  category: string;
};

type Menu = {
  _id: Id;
  pages: MenuItem[];
};

type Blog = {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  views: number;
  _id: string;
};

type Hh = {
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
  updatedAt: Date;
  _id: string;
};

type Page = {
  _id: string;
  firstCategory: number;
  secondCategory: string;
  alias: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  categoryOn: string;
  tagsTitle: string;
  tags: string[];
  blog: Blog;
  advantages: any[];
  qas: any[];
  addresses: any[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  hh: Hh;
};

type Characteristic = {
  name: string;
  value: string;
};

type Product = {
  _id: string;
  categories: string[];
  tags: string[];
  title: string;
  image: string;
  characteristics: Characteristic[];
  price: number;
  oldPrice: number;
  credit: number;
  initialRating: number;
  link: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  html: string;
  reviews: any[];
  reviewCount: number;
  reviewAvg?: any;
  advantages: string;
  disAdvantages: string;
};

type Domain = {
  id: string;
  city: string;
  inCity: string;
};

type PageProps = {
  menu: Menu[];
  firstCategory: Category;
  domain?: any;
  domains: Domain[];
  page?: Page;
  products?: Product[];
};

type RootObject = {
  pageProps: PageProps;
  __N_SSG: boolean;
};
