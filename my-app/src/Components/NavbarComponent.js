import { Navbar,Nav } from 'react-bootstrap';
import ScrollProgressBar from '../Components/ScrollProgressBar';
import '../styles/navbar.css'

export default function NavbarComponent() {
    return (
        <div>
            <Navbar className="navbar" id="top-navbar" sticky="top" expand="xl">
                <Navbar.Brand id="navbar-brand">Vivek Kaushik</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav id="mr-auto" className="justify-content-end">
                        <Nav.Link id="home" exact="true" href="/">Home</Nav.Link>
                        <Nav.Link id="about" exact="true" href="/about">About</Nav.Link>
                        <Nav.Link id="blog" exact="true" href="/blog">Blog</Nav.Link>
                        <Nav.Link id="projects" exact="true" href="/projects">Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            <ScrollProgressBar />
            </Navbar>
        </div>
    )
}
