type PartialRecord = void; // TODO

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

interface PageProps {
  menu: Menu[];
  firstCategory: number;
  domain?: any;
  domains: Domain[];
}

interface RootObject {
  pageProps: PageProps;
}
