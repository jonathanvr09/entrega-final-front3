import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [newUser, setNewUser] = useState({
    nombre: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const validate = (newUser) => {
    const emailRegex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    const error = { nombreError: "", emailError: "" };

    if (!newUser.nombre || newUser.nombre.length < 5) {
      error.nombreError =
        "El nombre es requerido y debe tener al menos 5 caracteres";
    }

    if (!newUser.email || !emailRegex.test(newUser.email)) {
      error.emailError = "El email debe ser válido";
    }

    if (error.nombreError || error.emailError) {
      setErrors(error);
      return false;
    }

    setErrors({});
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const isValid = validate(newUser);

    if (!isValid) {
      return;
    }
    alert(`Gracias ${newUser.nombre}, te contactaremos cuando antes vía mail`);
  };

  return (
    <div>
      <form>
        <input
          className={errors.nombreError ? "inputError" : ""}
          name="nombre"
          type="text"
          onChange={handleInputChange}
        />
        {errors.nombreError && <label> ⚠ {errors.nombreError}</label>}
        <input
          className={errors.emailError ? "inputError" : ""}
          name="email"
          type="email"
          onChange={handleInputChange}
        />
        {errors.emailError && <label> ⚠ {errors.emailError}</label>}
        <button onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
