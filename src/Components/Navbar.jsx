import React from "react";
import { useEstadosGlobalesContext } from "./utils/global.context";
import { Link } from "react-router-dom";
import { links } from "./utils/links";
import DarkButton from "./DarkButton/DarkButton";

const Navbar = () => {
  const { theme, dispatchTheme } = useEstadosGlobalesContext();
  const { home, contacto, favs, dentista } = links;

  const handleTheme = () => {
    dispatchTheme({ type: theme.color === "light" ? "SET_DARK" : "SET_LIGHT" });
  };

  return (
    <nav className={theme.color}>
      <Link className="navbarBrand" to={home.path}>DH Dentistas</Link>
      <Link to={home.path}>{home.name}</Link>
      <Link to={contacto.path}>{contacto.name}</Link>
      <Link to={favs.path}>{favs.name}</Link>
      {/* <Link to={dentista.path}>{dentista.name}</Link> */}
      {/* <button onClick={handleTheme}>Change theme</button> */}
      <DarkButton onClick={handleTheme} />
    </nav>
  );
};

export default Navbar;
