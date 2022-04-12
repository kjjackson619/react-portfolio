import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import About from '../About';
import Contact from '../Contact';
import Portfolio from '../Projects';
import Resume from '../Resume';

const AppNav = () => {

    return (
        <>
            <Navbar>
                <Container fluid>
                    <Navbar.Brand as={Link} to='/'>
                        💻 Kevin Jackson Portfolio
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='navbar' />
                    <Navbar.Collapse id="navbar">
                        <Nav className='ml-auto'>
                            <Nav.Link as={Link} to={About}>
                                About me
                            </Nav.Link>
                            <Nav.Link as={Link} to={Contact}>
                                Contact
                            </Nav.Link>
                            <Nav.Link as={Link} to={Portfolio}>
                                Portfolio
                            </Nav.Link>
                            <Nav.Link as={Link} to={Resume}>
                                Resume
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default AppNav;