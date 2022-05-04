import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from 'react'

type MenuContext = {
  menu: MenuProps[]
  setMenu: (menu: MenuProps[]) => void
}

export const MenuContext = createContext<MenuContext>({
  menu: null,
  setMenu: m => m,
})

export const MenuContextProvider: FC<
  PropsWithChildren<{ menu: MenuProps[] }>
> = ({ children, menu: initialMenu }) => {
  const [menu, setMenu] = useState(initialMenu)

  const handleSetMenu = useCallback((menu: MenuProps[]) => setMenu(menu), [])

  return (
    <MenuContext.Provider value={{ menu, setMenu: handleSetMenu }}>
      {children}
    </MenuContext.Provider>
  )
}

export const useMenu = () => useContext(MenuContext)
