import React from "react";
import { Route,Routes, BrowserRouter,Navigate} from "react-router-dom";
import BarraNav from "../Navbar/BarraNav";
import CarouselOfertas from "../ofertas/CarouselOfertas";
import Productos from '../Carrito/Productos'
import Footer from "../Footer/Footer";
import Categorias from "../categorias/Categorias";
import ModalCarrito from "../Carrito/store/ModalCarrito";
import Home from "../Home/Home";
const Rutas = () => {
  return (
   <BrowserRouter>

      <BarraNav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="/Ofertas" element={<CarouselOfertas />} />
        <Route path="/Categorias" element={<Categorias />} />
        <Route path="/CartModal" element={<ModalCarrito />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
      <Footer />
      </BrowserRouter>
  )
};

export default Rutas;
