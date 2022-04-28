export enum Category {
  Courses,
  School,
  Student,
}
interface Id {
  secondCategory: string;
}

interface Page {
  alias: string;
  title: string;
  _id: string;
  category: string;
}

interface Menu {
  _id: Id;
  pages: Page[];
}

interface Domain {
  id: string;
  city: string;
  inCity: string;
}

export interface PageProps {
  menu: Menu[];
  firstCategory: Category;
  firstCategoryName: keyof typeof Category;
  domain?: any;
  domains: Domain[];
}

interface RootObject {
  pageProps: PageProps;
}
