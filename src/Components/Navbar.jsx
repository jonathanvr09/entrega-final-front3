import styles from "./Navbar.module.css"
import {Link} from "react-router-dom"

const Navbar = () => {

    return (
        <header >
            <nav className="flex">
                <div className="menu">
                    {/* Ao clicar, o usuário deve ser redirecionado a home, com react-router */}
                    <a className={`navbar-brand ${styles.navbarBrand}`} href="/home">
                        Clínica odontológica
                    </a>
                    {/* <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarsExample03"
                        aria-controls="navbarsExample03"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button> */}

                    <div
                        // className="collapse navbar-collapse justify-content-end"
                        // id="navbarsExample03"
                        
                    >
                        {/* className="navbar-nav mb-2 mb-sm-0" */}
                        <ul >
                        {/* className={`nav-item ${styles.navBarLink}`} */}
                            <li >
                            {/* className="nav-link" */}
                                <Link  to="/home">
                                    Home
                                </Link>
                            </li>
                            {/* className={`nav-item ${styles.navBarLink}`} */}
                            <li >
                                {/* Se o usuário estiver logado, deverá aparecer um botão de logout
                que vai apagar o token do localstorage.
                Se o usuário estiver deslogado, um link fará um redirecionamento, com react-router,
                ao formulário de login
                O botão de logout deverá ser testado darkmode
                se sim, btn-dark, se não, btn-light */}
                {/* className="nav-link"  */}
                                <Link to="/contacto">
                                    Contacto
                                </Link>
                            </li>
                            {/* className={`nav-item`} */}
                            <li >
                                {/* Ao ser clicado, esse botão mudará a aplicação para dark mode ou light mode.
                Lembre-se de usar um estado no contexto para fazer essa alteração.
                Na linha seguinte deverá ser feito um teste se a aplicação
                está em dark mode e deverá utilizar o icone ☀ ou 🌙 e btn-dark ou btn-light*/}
                                {/* <button
                                    className={`btn btn-light${styles.btnStyle
                                        }`}
                                >
                                    ☀ 🌙{" "}
                                </button> */}
                            </li>
                            
                            {/* className={`nav-item`} */}
                            <li >
                            {/* className="nav-link" */}
                            <Link  to="/detalles">
                                    Detalles
                            </Link>
                            </li>
                            {/* className={`nav-item`} */}
                            <li >
                            {/* className="nav-link" */}
                            <Link  to="/destacados">
                                    Destacados
                            </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar