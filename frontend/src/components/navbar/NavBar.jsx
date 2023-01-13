import './/navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../images/logo3.png'

function TopBar() {
  return (
    <Navbar bg="myColor" expand="lg">
      <Container>
              <Navbar.Brand href="/">Food & Travel Blog</Navbar.Brand>
              <img className='logo' src={logo} alt='Plane Logo' />
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="links">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#gallery">Travel Gallery</Nav.Link>
            {/* <Nav.Link href="#details">Details</Nav.Link> */}
            <NavDropdown title="Login" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/signup">
                SignUp
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;