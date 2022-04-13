import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';


const AppNav = () => {

    return (
        <>
            <Navbar>

                <Container fluid>
                    <Navbar.Brand as={Link} to='/'>
                        <h2>💻 Kevin Jackson</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='navbar' />
                    <Navbar.Collapse id="navbar">
                        <Nav className='ml-auto'>
                            <Nav.Link as={Link} to='/'>
                                <h4>About</h4>
                            </Nav.Link>
                            <Nav.Link as={Link} to='/contact'>
                                <h4>Contact</h4>
                            </Nav.Link>
                            <Nav.Link as={Link} to='/portfolio'>
                                <h4>Portfolio</h4>
                            </Nav.Link>
                            <Nav.Link as={Link} to='/resume'>
                                <h4>Resume</h4>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>

            </Navbar>
        </>
    );
};

export default AppNav;