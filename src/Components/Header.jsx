import {Button, Col, Container, Form, Nav, Navbar, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas} from "@fortawesome/free-solid-svg-icons";

library.add(fas);

const Header = () => {
  return (
  <Navbar bg="dark" data-bs-theme="dark">
	<Container>
	  <Navbar.Brand>
          <Nav.Link href="/">FAE Importaciones</Nav.Link>
	  </Navbar.Brand>
	  <Nav className="me-auto">
		<Nav.Link href="catalogo">Catálogo</Nav.Link>
          <Nav.Link href="novedades">Novedades</Nav.Link>
	  </Nav>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
			  type="text"
			  placeholder="Buscar"
			  className="me-auto"
            />
          </Col>
            <Col xs="auto">
                <Button type="submit">
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                </Button>
            </Col>
            <Col xs="auto">
                <Button>
                    <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                </Button>
            </Col>
        </Row>
	</Form>
	</Container>
  </Navbar>
  );
}

export default Header;