import { useState } from "react";
import "./Navbar.css";
import ModalCarrito from "../Carrito/ModalCarrito";
import { NavbarBrand, Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoAncho from "../../assets/logoAncho.png";

function BarraNav() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <Navbar className="barra-nav" collapseOnSelect expand="lg" variant="dark">
        <Container>
          
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Productos">
                Productos
              </Nav.Link>
              <Nav.Link as={Link} to="/Ofertas">
                Ofertas{" "}
              </Nav.Link>
              <Nav.Link as={Link} to="/Categorias">
                Categorias
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logoAncho}
              alt="logo"
              className="d-inline-block align-top"
              style={{ height: "4rem" }}
            />
          </Navbar.Brand>
          <NavbarBrand>
            <ModalCarrito
              className="carrito-btn"
              showModal={showModal}
              setShowModal={setShowModal}
            />
          </NavbarBrand>

        </Container>
      </Navbar>
    </>
  );
}

export default BarraNav;
