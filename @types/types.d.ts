enum Category {
  courses,
  school,
  students,
}
interface MenuProps {
  menu: Menu[];
  firstCategory: Category;
  firstCategoryName: keyof typeof Category;
  firstCategoryLabel: string;
}
interface Id {
  secondCategory: string;
}

interface MenuItem {
  alias: string;
  title: string;
  _id: string;
  category: string;
}

interface Menu {
  _id: Id;
  pages: MenuItem[];
}

interface Blog {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  views: number;
  _id: string;
}

interface Hh {
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
  updatedAt: Date;
  _id: string;
}

interface Page {
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
}

interface Characteristic {
  name: string;
  value: string;
}

interface Product {
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
}

interface Domain {
  id: string;
  city: string;
  inCity: string;
}

interface PageProps {
  menu: Menu[];
  firstCategory: Category;
  domain?: any;
  domains: Domain[];
  page?: Page;
  products?: Product[];
}

interface RootObject {
  pageProps: PageProps;
  __N_SSG: boolean;
}
