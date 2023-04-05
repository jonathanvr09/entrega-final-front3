import React from "react";
import Form from "../Components/Form";
import { useEstadosGlobalesContext } from "../Components/utils/global.context";

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
