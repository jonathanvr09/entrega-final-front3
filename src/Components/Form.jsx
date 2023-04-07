import { useState } from "react";

const Form = () => {

  //Aqui deberan implementar el form completo con sus validaciones
  
  const [addUser, setAddUser] = useState({
    nombre: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {

    setAddUser({
      ...addUser,
      [e.target.name]: e.target.value,
    });
  };

  const validateData = (addUser) => {

    const emailRegex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    const error = { nombreError: "", emailError: "" };

    if (!addUser.nombre || addUser.nombre.length < 5) {
      error.nombreError =
        "El nombre es requerido y debe tener al menos 5 caracteres";
    }

    if (!addUser.email || !emailRegex.test(addUser.email)) {
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
    
    const isValid = validateData(addUser);

    if (!isValid) {
      return;
    }
    alert(` ${addUser.nombre}, nos pondremos en contacto contigo vía mail`);
  };

  return (
    <div>
      <form>
        <div>
          <input
            className={errors.nombreError ? "inputError" : ""}
            onChange={handleInputChange}
            placeholder="Ingresar nombre" name="nombre" required
          />
          {errors.nombreError && <label> ⚠ {errors.nombreError}</label>}
        </div>
        <div>
          <input
            className={errors.emailError ? "inputError" : ""}
            onChange={handleInputChange}
            placeholder="Ingresar e-mail" name="email" required
          />
          {errors.emailError && <label> ⚠ {errors.emailError}</label>}
        </div>
        <button onClick={handleSubmit}>Enviar datos</button>
      </form>
    </div>
  );
};

export default Form;
