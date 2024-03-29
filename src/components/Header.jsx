import { Container, Nav, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">CinephiList</Navbar.Brand>
        <Navbar.Text>your personal movie library</Navbar.Text>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="browse">Browse</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link href="userPage">User</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default Header;
