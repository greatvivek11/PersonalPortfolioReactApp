import {  Github, Linkedin, Envelope } from 'react-bootstrap-icons';
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/Footer.css';

export default function FooterComponent() {
    return (
        <div>
            <Navbar className="Navbar" sticky="bottom" expand="xl|lg|sm|md">
                    <Nav className="Nav" activeKey="/home" fill="true">
                        <Navbar.Brand style={{color:"black"}}>Connect with me @</Navbar.Brand>
                        <Nav.Item className="NavItem">
                            <Nav.Link rel="noopener" id="email" href="Email:vcoolkaushik@gmail.com" target="_blank"><Envelope size={30} color="black"></Envelope> Email</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="NavItem">
                            <Nav.Link rel="noopener" id="github" href="https://github.com/greatvivek11/PersonalPortfolioReactApp" target="_blank" ><Github size={30} color="black"></Github> Github</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="NavItem">
                            <Nav.Link rel="noopener" id="linkedin" href="https://www.linkedin.com/in/vivek-kaushik/" target="_blank"><Linkedin size={30} color="#004085"></Linkedin> Linkedin</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    Hosted on Azure Static Web Apps
            </Navbar>
        </div>
    )
}
