import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink} from "react-router-dom";
import './Header.scss'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                {/*<Navbar.Brand href="#home">ZeusBD</Navbar.Brand>*/}
                <NavLink className="navbar-brand" to="/">ZeusBD</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="User">User</NavLink>
                        <NavLink className="nav-link" to="Admin">Admin</NavLink>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Settings" id="basic-nav-dropdown">
                            <NavDropdown.Item href="">Log In</NavDropdown.Item>
                            <NavDropdown.Item href="">Log Out</NavDropdown.Item>
                            <NavDropdown.Item href="">Profile</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;