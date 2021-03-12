import { Navbar,Nav } from 'react-bootstrap';
import ScrollProgressBar from '../Components/ScrollProgressBar';
import '../styles/navbar.css'

export default function NavbarComponent() {
    return (
        <div>
            <Navbar className="navbar" id="top-navbar" sticky="top" expand="xl">
                <Navbar.Brand id="navbar-brand">Vivek Kaushik</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="basic-navbar-nav" id="collapse-navbar">
                    <Nav className="nav navbar-nav navbar-right" id="nav">
                        <Nav.Link id="navlink" active="true" href="/">Home</Nav.Link>
                        <Nav.Link id="navlink" href="/about">About</Nav.Link>
                        <Nav.Link id="navlink" href="/blog">Blog</Nav.Link>
                        <Nav.Link id="navlink" href="/projects">Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            <ScrollProgressBar />
            </Navbar>
        </div>
    )
}
