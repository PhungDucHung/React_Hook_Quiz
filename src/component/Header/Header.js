import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  }
  const handleRegister = () => {
    navigate('/register');
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Brand href="#home">Quizzzzzzzzz</Navbar.Brand> */}
        <NavLink to = "/" className='navbar-brand '> Quizzzzzzzzz</NavLink>   
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* react-router-dom */}
            <NavLink to = "/" className='nav-link '> Home</NavLink>       {/*className='nav-link' để đồng bộ với bootstrap*/}
            <NavLink to = "/users" className='nav-link '>User</NavLink>   { /* chức năng ẩn active giúp đổi màu khi nhấn v */ }
            <NavLink to = "/admins" className='nav-link'> Admin</NavLink>
            {/* --------------------------- */}
            </Nav>
           
          <nav>                                { /* muốn nó qua phải thì tạo cái tag nav mới rồi quăng qua */}
          <button className='btn-login' onClick={()=>handleLogin()}>Log in</button>
          <button className='btn-signup'onClick={()=>handleRegister()}>Sign up</button> 
          {/* <NavDropdown title="Setting" id="basic-nav-dropdown">
              <NavDropdown.Item>Log in</NavDropdown.Item>
              <NavDropdown.Item>Log out</NavDropdown.Item>
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </NavDropdown> */}
          </nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Header;