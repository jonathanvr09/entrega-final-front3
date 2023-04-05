import { Link } from "react-router-dom";
import { useEstadosGlobalesContext } from "./global.context";
import { links } from "./links";
import "./notFoundStyle.css";

const NotFound = () => {
  const { theme } = useEstadosGlobalesContext();
  return (
    <section className={`page_404 ${theme.color}`}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-10 col-sm-offset-1 text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center h404">Error 404 (Page Not Found)</h1>
              </div>

              <div className={`contant_box_404 `}>

                <p>That's an error.</p>

                <Link to={links.home.path} className="link_404">
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
