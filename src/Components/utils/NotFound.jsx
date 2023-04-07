import { Link } from "react-router-dom";
import { useEstadosGlobalesContext } from "./global.context";
import { links } from "./links";
import "./notFoundStyle.css";

const NotFound = () => {
  const { theme } = useEstadosGlobalesContext();
  return (
    <section className={`error-page ${theme.color}`}>
      <div>
        <div>
          <div>
            <div>
              <div className="not-found">
                <h1 className="text-center">Error 404 (Page Not Found)</h1>
              </div>
              <div className={`contant-404`}>
                <p>That's an error.</p>
                <Link to={links.home.path} className="back-to-home">
                  {" "}
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
