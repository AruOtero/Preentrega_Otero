import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap"
import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Casa de Comidas</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Pizzas</Nav.Link>
              <Nav.Link href="#pricing">Empanadas</Nav.Link>
              <Nav.Link href="#milas">Milanesas</Nav.Link>
              <NavDropdown title="Bebidas" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Gaseosas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Jugos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Vinos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Postres</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Sugerencias</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Mi pedido<CartWidget />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
};
  



