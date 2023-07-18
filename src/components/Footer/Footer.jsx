import React from "react";
import "./Footer.css";
import logoAncho from "../../assets/logoAncho.png";

export const Footer = () => {
  return (
    <div className="sup">
      <div className="container">
        <footer className="row text-center row-cols-1 row-cols-sm-4 row-cols-md-6 py-4 mt-3">
          <div className="col mb-2">
            <a href="#" className="d-flex justify-content-center mb-3  ">
              <img className="bi me-2 w-100 logo-footer" src={logoAncho}></img>
            </a>
            <p className="text-center">Derechos reservados</p>
            <p className="text-center">&copy; React Tech 2023</p>
          </div>

          <div className="col mb-2">
            <h5>Atención al cliente</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">0099-4456-2132</li>
              <li className="nav-item mb-2">0877-3698-2133</li>
              <li className="nav-item mb-2">Lu-Vi de 09:00 a 18:00 hs</li>
              <li className="nav-item mb-2">Sa de 09:00 a 13:00 hs</li>
            </ul>
          </div>

          <div className="col mb-2">
            <h5>Venta telefónica</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">0099-4456-2132</li>
              <li className="nav-item mb-2">Lu-Vi de 08:00 a 20:00</li>
              <li className="nav-item mb-2">Sa-Do-Fer. de 09:00 a 21:00</li>
            </ul>
          </div>

          <div className="col-md-3 offset-md-1 mb-3">
            <form>
              <h5>Suscribete </h5>
              <p>Recibe Nuestras Ofertas</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label forhtml="newsletter1" className="visually-hidden">
                  Email
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Ingresa tu Email"
                />
                <button className="btn btn-success" type="button">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
