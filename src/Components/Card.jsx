import React from "react";


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    function handleSave() {
      addCardToLocalStorage({ name, username, id });
    }
  }

  return (
    <div className="card">

        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

        <Link to={`/detail/${id}`}>
          <h2>{name}</h2>
          <p>{username}</p>
        </Link>
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
