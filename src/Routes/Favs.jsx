import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useEstadosGlobalesContext } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { theme } = useEstadosGlobalesContext();
  const favs = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div className={theme.color}>
      <h1>Dentistas Favoritos</h1>
      <div className="div-card">

        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}

        {favs.length ? (
          favs.map((fav) => (
            <Card
              key={fav.id}
              name={fav.name}
              username={fav.username}
              id={fav.id}
            />
          ))
        ) : (
          <p className="fav-message"> No hay favoritos </p>
        )}
      </div>
    </div>
  );
  
};

export default Favs;
