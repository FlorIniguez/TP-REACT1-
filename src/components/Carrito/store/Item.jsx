import React, { useContext } from "react";
import { ProductosContext } from "../../Contexto/ContextProducts";
import { Row, Button } from "react-bootstrap";
import "./item.css";

const Item = ({data}) => {
  const {deleteFromCart, addToCart } = useContext(ProductosContext);
  const {id, nombre, precio,imagenes,cantidad, nombreCorto, porcentajedescuento, descuento} = data;

// Cálculo del precio final con descuento
const precioDescuento = precio - (precio * porcentajedescuento) / 100;
const precioDescuentoRedondeado = Math.round(precioDescuento);
const precioFinal = descuento ? precioDescuentoRedondeado : precio;
  return (
    <Row className="container flex-column flex-sm-row justify-content-center align-items-center w-100">

      <div className="col-2 img-item">
        <img
          className="my-auto"
          style={{ width: "3.5rem" }}
          src={imagenes?.imgPrincipal}
          alt={nombre}
        />
      </div>
      <div className="col-3">
        <h4 className="texto-modal">{nombreCorto}</h4>
      </div>

      <div className="col-3 d-flex justify-content-around align-items-center">
        <Button
          onClick={() => deleteFromCart(id, false)}
          className="borrar-uno btn-sm d-flex align-items-center"
        >
          -
        </Button>
        <h5 className="texto-modal">{cantidad} </h5>
        <Button
          onClick={() => addToCart(id)}
          className="sumar-uno btn-sm d-flex align-items-center"
        >
          +
        </Button>
      </div>
      <div className="col-3 text-center">
        <h5 className="texto-modal">$ {precioFinal * cantidad}</h5>
      </div>
      <div className="col-1">
        <button
          className="borrar-todos"
          onClick={() => deleteFromCart(data.id, true)}
        >
          x
        </button>
      </div>
    </Row>
  );
};

export default Item;
