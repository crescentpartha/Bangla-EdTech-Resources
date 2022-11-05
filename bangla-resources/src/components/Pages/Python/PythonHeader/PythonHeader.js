import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import CustomLink1 from '../../../SharedPages/CustomLink1/CustomLink1';
import './PythonHeader.css';

const PythonHeader = () => {
    const [python, setPython] = useState(true);
    let location = useLocation();
    let path = location.pathname;

    // Conditional Rendering of Header component for Python Tutorial
    let python_result = path.includes('pythonHome');
    useEffect(() => {
        (python_result) ? setPython(true) : setPython(false)
    }, [python_result]);

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='python-header p-0'>
                <Container className='d-flex align-items-center justify-content-center header-hover'>
                    <Navbar.Brand className='text-light me-0 p-3' as={CustomLink1} to="/home">
                        <FontAwesomeIcon className='text-orange-400 text-sm' icon={faHouseChimney}></FontAwesomeIcon>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className=''>
                        <Nav className="header-hover">
                            {
                                python ? <Nav.Link className='text-light p-3' as={CustomLink1} to={path} >পাইথন</Nav.Link> : <Nav.Link className='text-light p-3' as={Link} to={path} >পাইথন</Nav.Link>
                            }
                            {/* <Nav.Link className='text-light p-3' as={CustomLink1} to="introduction">পাইথন</Nav.Link> */}
                            <Nav.Link className='text-light p-3' as={CustomLink1} to="/cHome">সি</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default PythonHeader;