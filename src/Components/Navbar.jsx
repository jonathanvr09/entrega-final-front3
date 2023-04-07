import React from "react";
import { useEstadosGlobalesContext } from "./utils/global.context";
import { Link } from "react-router-dom";
import { links } from "./utils/links";
import DarkButton from "./DarkButton/DarkButton";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Navbar = () => {

  const { theme, dispatchTheme } = useEstadosGlobalesContext();
  const { home, contacto, favs, dentista } = links;

  const handleTheme = () => {

    dispatchTheme({ type: theme.color === "light" ? "SET_DARK" : "SET_LIGHT" });

  };

  return (
    <nav className={theme.color}>

      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      <Link className="navbarBrand" to={home.path}>DH Dentistas</Link>
      <Link to={home.path}>{home.name}</Link>
      <Link to={contacto.path}>{contacto.name}</Link>
      <Link to={favs.path}>{favs.name}</Link>
      <DarkButton onClick={handleTheme} />
    </nav>
  );
  
};

export default Navbar;
