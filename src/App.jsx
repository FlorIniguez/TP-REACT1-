import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import ListaProductos from "./components/cards/ListaProductos";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/carrousel/Carousel";
import { Navbar } from "./components/Navbar/Navbar";
import Redes from "./components/carrousel/Redes";
import CarouselOfertas from "./components/ofertas/CarouselOfertas";
import Instagram from "./components/Instagram/Instagram";
// import ProductosProvider from "./components/context/ContextProducts";
import Categorias from "./components/categorias/Categorias";
import Carrito from "./components/Carrito/Carrito";

const App = () => {
  //todos los componentes que quiero que se vean los paso a Home
  //para envolverlos en el contexto
  return (
  
    <div className="container">
      <Navbar />
      <Carousel />
      <CarouselOfertas />
      <Carrito />
      {/* <Categorias/> */}
      {/* <ListaProductos /> */}
      <Redes />
      <Instagram />
      <Footer />
    </div>

  );
};

export default App;
