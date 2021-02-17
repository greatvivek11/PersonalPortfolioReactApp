import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
// import '../styles/navbar.css';

export default function NavbarComponent() {
    return (
        <div>
            <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
                <Navbar.Brand>Vivek Kaushik</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
