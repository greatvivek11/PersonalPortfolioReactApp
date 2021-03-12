import { Instagram, Github, Linkedin, Envelope } from 'react-bootstrap-icons';
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/Footer.css';

export default function FooterComponent() {
    return (
        <div>
            <Navbar className="Navbar" sticky="bottom" expand="xl|lg|sm|md">
                    <Nav className="Nav" activeKey="/home" fill="true">
                        <Navbar.Brand style={{color:"white"}}>Connect with me @</Navbar.Brand>
                        <Nav.Item className="NavItem">
                            <Nav.Link href="Email:vcoolkaushik@gmail.com" target="_blank"><Envelope size={30} color="white"></Envelope></Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="NavItem">
                            <Nav.Link href="https://www.instagram.com/greatvivek" target="_blank"><Instagram size={30} color="deeppink"></Instagram></Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="NavItem">
                            <Nav.Link href="https://github.com/greatvivek11/PersonalPortfolioReactApp" target="_blank" ><Github size={30} color="black"></Github></Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="NavItem">
                            <Nav.Link href="https://www.linkedin.com/in/vivek-kaushik/" target="_blank"><Linkedin size={30} color="blue"></Linkedin></Nav.Link>
                        </Nav.Item>
                    </Nav>
                    Hosted on Azure Static Web Apps
            </Navbar>
        </div>
    )
}
