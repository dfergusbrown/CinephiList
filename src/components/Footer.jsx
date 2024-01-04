import { Nav } from 'react-bootstrap';

function Footer() {
  return (
    <footer>
      <Nav className="justify-content-center pt-2 footerText">
        <Nav.Link href="meetthedevelopers" className="text-center" style={{ color: 'black' }}>
          Meet the Developers
        </Nav.Link>
      </Nav>
    </footer>
  );
}

export default Footer;