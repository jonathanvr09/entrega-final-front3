import { Outlet, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";


function App() {
  return (
      <div className="App">
          <Navbar/>
          <main>
            <Outlet/>
          </main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/contacto" element={<Contact/>}/>
            <Route path="/detalle" element={<Detail/>}/>
            <Route path="/destacados" element={<Favs/>}/>
            <Route path="*" element={
              <>
              <h1>Error 404</h1>
              </>
            }/>
          </Routes>
          <Footer/>
      </div>
  );
}


export default App;