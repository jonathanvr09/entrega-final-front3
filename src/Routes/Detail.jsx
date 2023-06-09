import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useEstadosGlobalesContext } from "../Components/utils/global.context";

const Detail = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  
  const { odontologos, theme } = useEstadosGlobalesContext();
  const { id } = useParams();

  const [odontologo, setOdontologo] = useState(undefined);

  useEffect(() => {
    
    const o = odontologos.find((odontologo) => {
      return odontologo.id == id;
    });
    setOdontologo(o);
  }, [odontologos]);

  return (
  
    <div className={theme.color}>
      <h1> Datos del dentista </h1>

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}

      {odontologo && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{odontologo.name}</td>
              <td>{odontologo.email}</td>
              <td>{odontologo.phone}</td>
              <td>{odontologo.website}</td>
            </tr>
          </tbody>
        </table>
      )}
      {!odontologo && <h1>Dentista no encontrado</h1>}
    </div>
  );

};

export default Detail;
