import { createContext } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  // function MyComponent() {
  //   const { theme } = useContext(ThemeContext);
  
  //   const content = useMemo(() => {
  //     return theme === 'dark' ? 'Contenido oscuro' : 'Contenido claro';
  //   }, [theme]);
  
  //   return (
  //     <div>
  //       {content}
  //     </div>
  //   );
  // }
  
  return (
    <ContextGlobal.Provider value={{}}>
      {children}
    </ContextGlobal.Provider>
  );
};
