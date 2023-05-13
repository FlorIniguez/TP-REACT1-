import React, { useContext, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./cardsStyle.css";
import ProductosModal from "../Modal/ProductosModal";

const CardsLista = ({ data }) => {
  const { id, nombreCorto, precio, porcentajedescuento, descuento, imagenes } =
    data ?? {};
  //Modal
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  //descuento
  const precioDescuento = precio - (precio * porcentajedescuento) / 100;
  const precioDescuentoRedondeado = Math.round(precioDescuento);
  const precioFinal = descuento ? precioDescuentoRedondeado : precio;
  return (
    <div className="contenedor-productos" style={{ width: "15rem" }}>
      <Carousel interval={null} variant="dark" indicators={false}>
        <Carousel.Item style={{ height: "12rem" }}>
          <img
            className="img-product"
            src={imagenes.imgPrincipal}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item style={{ height: "12rem" }}>
          <img className="img-product" src={imagenes.img1} alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item style={{ height: "12rem" }}>
          <img className="img-product" src={imagenes.img2} alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      <div className="card-body">
        <h5 className="text-center prod-nombre">{nombreCorto}</h5>
        <div className="text-center">
          <span className={descuento ? "antes" : "tarjeta-precio fw-bold"}>
            $ {precio}
          </span>

          {descuento ? (
            <>
              <span className="descuento"> %{porcentajedescuento} OFF </span>
              <p className="fw-bold oferta"> ${precioDescuentoRedondeado} </p>
            </>
          ) : (
            false
          )}
            <div className={`contenedor-botones ${descuento ? "" : "btn-sindescuento"}`}>
            <button className="btn btn-cards" onClick={handleShowModal}>
              COMPRAR
            </button>
</div>
          <ProductosModal
            producto={data}
            show={showModal}
            handleClose={handleCloseModal}
          />
        </div>
      </div>
    </div>
  );
};

export default CardsLista;
