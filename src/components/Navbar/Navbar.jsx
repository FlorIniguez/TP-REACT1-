import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { RiShoppingCartLine } from 'react-icons/ri'
import "./Navbar.css";

export function NavBar({}) {
  return (
    <Navbar className="NavBar" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Mi Tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown
              className="me-5"
              title="Categorias "
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#">Celulares</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Camaras y Accesorios</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Computacion</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Electronica, audio y video
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Consolas y Videojuegos
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#"><RiShoppingCartLine/></Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-1"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
