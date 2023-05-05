import React from "react";
import "./Instagram.css";
import Fotos from "../Fotos/Fotos";

function Instagram(props) {
  return (
    <div className="container">
      <h1 className="Ig">Ingresá a nuestro instagram: @ReactTech-2023</h1>

      <div className="row row-cols-1 row-cols-md-2">
        <div className="col mb-3">
          <Fotos></Fotos>
        </div>
      </div>
    </div>
  );
}

export default Instagram;
