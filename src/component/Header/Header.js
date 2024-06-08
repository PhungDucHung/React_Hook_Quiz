import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Brand href="#home">Quizzzzzzzzz</Navbar.Brand> */}
        <NavLink to = "/" className='navbar-brand'> Quizzzzzzzzz</NavLink>   
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* react-router-dom */}
            <NavLink to = "/" className='nav-link '> Home</NavLink>       {/*className='nav-link' để đồng bộ với bootstrap*/}
            <NavLink to = "/users" className='nav-link '>User</NavLink>   { /* chức năng ẩn active giúp đổi màu khi nhấn vào */ }
            <NavLink to = "/admins" className='nav-link'> Admin</NavLink>
            {/* --------------------------- */}
            </Nav>
          <nav>
          <NavDropdown title="Setting" id="basic-nav-dropdown">
              <NavDropdown.Item>Log in</NavDropdown.Item>
              <NavDropdown.Item>Log out</NavDropdown.Item>
              <NavDropdown.Item>Profile</NavDropdown.Item>

            </NavDropdown>
          </nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Header;