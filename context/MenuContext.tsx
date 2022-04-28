import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from 'react';
import { PageProps } from '../@types/types';

type MenuContext = {
  menu: PageProps[];
  setMenu: (menu: PageProps[]) => void;
};

export const MenuContext = createContext<MenuContext>({
  menu: null,
  setMenu: (m) => m,
});

export const MenuContextProvider: FC<
  PropsWithChildren<{ menu: PageProps[] }>
> = ({ children, menu: initialMenu }) => {
  const [menu, setMenu] = useState(initialMenu);

  const handleSetMenu = useCallback((menu: PageProps[]) => setMenu(menu), []);

  return (
    <MenuContext.Provider value={{ menu, setMenu: handleSetMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
