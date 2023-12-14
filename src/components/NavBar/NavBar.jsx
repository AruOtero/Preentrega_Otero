import { Container, Nav, Navbar } from "react-bootstrap"
import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Casa de Comidas</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Pizzas</Nav.Link>
              <Nav.Link href="#pricing">Empanadas</Nav.Link>
              <Nav.Link href="#milas">Milanesas</Nav.Link>
              <Nav.Link href="#milas">Hamburguesas</Nav.Link>
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
  



