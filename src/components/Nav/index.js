import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import About from '../About';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Resume from '../Resume';

const AppNav = () => {

    return (
        <>
            <Navbar expand='lg'>
                <Container fluid>
                    <Navbar.Brand as={Link} to='/'>
                        💻 Kevin Jackson Portfolio
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='navbar' />
                    <Navbar.Collapse id="navbar">
                        <Nav className='ml-auto'>
                            <Nav.Link as={Link} to='/'>
                                About me
                            </Nav.Link>
                            <Nav.Link as={Link} to='/contact'>
                                Contact
                            </Nav.Link>
                            <Nav.Link as={Link} to='/portfolio'>
                                Portfolio
                            </Nav.Link>
                            <Nav.Link as={Link} to='/resume'>
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