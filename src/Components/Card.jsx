import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./utils/links";

const Card = ({ name, username, id }) => {

  // Aqui iria la logica para agregar la Card en el localStorage

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFav = favs.find((fav) => fav.id === id) ? true : false;
    setIsFav(isFav);
  }, []);

  const handleFavs = () => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    const newFavs = favs.filter((fav) => fav.id !== id);
    debugger;
    setIsFav(!isFav);

    if (isFav) {
      localStorage.setItem("favorites", JSON.stringify(newFavs));
      return;
    }

    localStorage.setItem(
      "favorites",
      JSON.stringify([...favs, { name, username, id }])
    );
  };

  return (
    <div className="card">

        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

      <Link to={`${links.dentista.path}/${id}`}>
        <img src="./images/dentista.png" alt={username} />
        <h4>{name}</h4>
        <p>{username}</p>
      </Link>
      <button onClick={handleFavs} className="favButton">
        <span className={`material-symbols-outlined ${isFav ? "fav" : ""}`}>
          favorite
        </span>
      </button>
    </div>
  );
  
};

export default Card;
