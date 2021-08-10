import {  Github, Linkedin, Envelope } from 'react-bootstrap-icons';
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/Footer.css';

export default function FooterComponent() {
    return (
        <div>
            <Navbar className="Navbar" sticky="bottom" expand="xl">
                    <Nav className="Nav" fill="true">
                        <Navbar.Brand className="brand">Connect with me @</Navbar.Brand>
                        <Nav.Item className="NavItem">
                            <Nav.Link rel="noopener" id="email" href="mailto:vcoolkaushik@gmail.com" target="_blank"><Envelope className="btLogo" color="black"></Envelope> Email</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="NavItem">
                            <Nav.Link rel="noopener" id="github" href="https://github.com/greatvivek11/" target="_blank" ><Github className="btLogo" color="black"></Github> Github</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="NavItem">
                            <Nav.Link rel="noopener" id="linkedin" href="https://www.linkedin.com/in/vivek-kaushik/" target="_blank"><Linkedin className="btLogo" color="#004085"></Linkedin> Linkedin</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <a className="footerCredit" href="https://azure.microsoft.com/en-us/services/app-service/static/" target="_blank">Hosted on Azure Static Web Apps with ❤️</a>
            </Navbar>
        </div>
    )
}
