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
      <h1>Detail Dentist id </h1>
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
      {!odontologo && <h1>Dentist Not Found</h1>}
    </div>
  );
};

export default Detail;
