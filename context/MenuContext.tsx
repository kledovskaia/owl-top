import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from 'react';

type MenuContext = {
  menu: Menu;
  setMenu: (menu: Menu) => void;
};

export const MenuContext = createContext(null);

export const MenuContextProvider: FC<PropsWithChildren<{ menu: Menu }>> = ({
  children,
  menu: initialMenu,
}) => {
  const [menu, setMenu] = useState(initialMenu);

  const handleSetMenu = useCallback((menu: Menu) => setMenu(menu), []);

  return (
    <MenuContext.Provider value={{ menu, setMenu: handleSetMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
