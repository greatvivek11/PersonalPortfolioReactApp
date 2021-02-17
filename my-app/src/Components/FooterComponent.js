import React from 'react';
import { Instagram, Github, Linkedin, Envelope } from 'react-bootstrap-icons';
import { Container } from 'react-bootstrap';
import { Navbar,Nav } from 'react-bootstrap';

export default function FooterComponent() {
    return (
        <div>
            <Navbar className="justify-content-center" fixed="bottom" bg="dark" variant="dark" expand="xl">
                    <Navbar.Brand>Connect with me @</Navbar.Brand>
                    <Nav activeKey="/home">
                        <Nav.Item>
                            <Nav.Link href="Email:vcoolkaushik@gmail.com" target="_blank"><Envelope size={30} color="orange"></Envelope></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="https://www.instagram.com/greatvivek" target="_blank"><Instagram size={30} color="deeppink"></Instagram></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="https://github.com/greatvivek11/PersonalPortfolioReactApp" target="_blank" ><Github size={30} color="black"></Github></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="https://www.linkedin.com/in/vivek-kaushik/" target="_blank"><Linkedin size={30} color="dodgerblue"></Linkedin></Nav.Link>
                        </Nav.Item>
                        
                    </Nav>
                    
                    {/* <a href="Email:vcoolkaushik@gmail.com" target="_blank"><Envelope size={30} color="orange"></Envelope></a>
                    <a href="https://www.instagram.com/greatvivek" target="_blank"><Instagram size={30} color="deeppink"></Instagram></a>
                    <a href="https://github.com/greatvivek11/PersonalPortfolioReactApp" target="_blank" ><Github size={30} color="black"></Github></a>
                    <a href="https://www.linkedin.com/in/vivek-kaushik/" target="_blank"><Linkedin size={30} color="dodgerblue"></Linkedin></a> */}

            </Navbar>
        </div>
    )
}
