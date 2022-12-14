import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import image from '../../../images/logo.png';

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/home" className='d-flex align-items-center gap-2'>
                        <img src={image} width='30px' alt="লোগো" />
                        <span className='' style={{color: '#330662'}}>বাংলা রিসোর্স</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto py-1">
                            <NavDropdown title="টিউটরিয়াল" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/pythonHome/python_introduction">পাইথন</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/cHome/c_introduction">সি</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            {
                                user ? <Nav.Link style={{backgroundColor: '#04AA6D'}} className='btn px-4 text-light' as={Link} to="/login" onClick={logout}>সাইন আউট</Nav.Link>
                                : <Nav.Link style={{backgroundColor: '#04AA6D'}} className='btn px-4 text-light' as={Link} to="/login">লগইন</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;