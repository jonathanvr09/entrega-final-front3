import axios from "axios";
import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useEstadosGlobalesContext } from "../Components/utils/global.context";

const Home = () => {
  const { theme, odontologos, setOdontologos } = useEstadosGlobalesContext();

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) => {
      setOdontologos(res.data);
    });
  }, []);

  return (
    <main className={theme.color}>
      <h1>Catálogo de dentistas:</h1>
      <div className="div-card">
        {odontologos.map((odontologo) => (
          <Card
            key={odontologo.id}
            name={odontologo.name}
            username={odontologo.username}
            id={odontologo.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
