import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useLocation } from "react-router-dom";
function Header() {
  let location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') {
      document.title = "Todo List- Home"
    } else {
      document.title = "Todo List- About"
    }
  }, [location.pathname])
  return (
    <>
      <Navbar expand="lg" data-bs-theme="dark" className="sticky-top bg-body-tertiary mb-1">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="mx-3">Todos List</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas data-bs-theme="dark"
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title as={Link} to="/" id={`offcanvasNavbarLabel-expand-lg`}>
                Todos List
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} className={location.pathname === "/" ? "active" : ""} to="/">Home</Nav.Link>
                <Nav.Link as={Link} className={location.pathname === "/about" ? "active" : ""} to="/about">About</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button border="success" variant="outline-primary">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;