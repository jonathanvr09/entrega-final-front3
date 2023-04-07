import React from "react";
import Form from "../Components/Form";
import { useEstadosGlobalesContext } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Contact = () => {
  const { theme } = useEstadosGlobalesContext();

  return (
    <div className={theme.color}>
      <h1>Acerca de nosotros</h1>
      <p className="centered">Ingresa tus datos y nos pondremos en contacto contigo</p>
      <Form />
    </div>
  );

};

export default Contact;
