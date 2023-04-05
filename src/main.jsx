import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import EstadosGlobalesProvider from "./Components/utils/global.context";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <EstadosGlobalesProvider>
      <App />
    </EstadosGlobalesProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
