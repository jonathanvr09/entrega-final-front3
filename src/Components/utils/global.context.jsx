import { createContext, useContext, useReducer, useState } from "react";

const initialThemeState = { color: "light" };
const initialOdontologosState = [];

const EstadosGlobales = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "SET_LIGHT":
      return { ...state, color: "light" };
    case "SET_DARK":
      return { ...state, color: "dark" };
    default:
      return state;
  }
};
const EstadosGlobalesProvider = ({ children }) => {
  const [odontologos, setOdontologos] = useState(initialOdontologosState);
  const [theme, dispatchTheme] = useReducer(themeReducer, initialThemeState);

  const value = {
    odontologos,
    setOdontologos,
    theme,
    dispatchTheme,
  };

  return (
    <EstadosGlobales.Provider value={value}>
      {children}
    </EstadosGlobales.Provider>
  );
};

export default EstadosGlobalesProvider;
export const useEstadosGlobalesContext = () => useContext(EstadosGlobales);
