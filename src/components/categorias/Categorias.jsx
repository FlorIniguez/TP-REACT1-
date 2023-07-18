import React, { useState,useContext } from "react";
import Card from "react-bootstrap/Card";
import "./categorias.css";
import smartphones from './imgsCategorias/smartphones.png'
import relojes from './imgsCategorias/relojes.png'
import cafetera from './imgsCategorias/cafetera.png'
import ProductosCategoria from "./ProductosCategoria";
// import { ProductosContext } from "../Contexto/ContextProducts";
import { Container } from "react-bootstrap";

const Categorias = () => {
  // const {productos}= useContext(ProductosContext);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const seleccionarCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  return (
    <div className="contenedor-categorias">
      <h5 className="fondo-categoria">CATEGORIAS</h5>
    <div className="categorias container-fluid py-2">
      
      <Card className="my-3 container-fluid contenedor-cat-individual" onClick={() => seleccionarCategoria("Smartphones")}>
        <h5 className="texto-categoria"> SMARTHPHONES </h5>
        <img className="img-categoria" src={smartphones} alt="Smarthphones" />
      </Card>
      <Card className="my-3 container-fluid contenedor-cat-individual" onClick={() => seleccionarCategoria("Smart watch")}>
        <h5 className="texto-categoria"> SMART WATCH </h5>
        <img className="img-categoria" src={relojes} alt="Smarth watch" />
      </Card>
      <Card className="my-3 container-fluid  contenedor-cat-individual" onClick={() => seleccionarCategoria("Cafeteras")}>
        <h5 className="texto-categoria"> CAFETERAS </h5>
        <img className="img-categoria" src={cafetera} alt="Cafeteras" />
      </Card>
      </div>
      <h5 className={`p-1 my-3 text-center  ${categoriaSeleccionada ? 'fondo-categoria' : 'none'}`}>{categoriaSeleccionada}</h5>
      <Container className="w-100"> 
      {categoriaSeleccionada && <ProductosCategoria categoria={categoriaSeleccionada} />}
    </Container>
    
    </div>
  );
};

export default Categorias;

