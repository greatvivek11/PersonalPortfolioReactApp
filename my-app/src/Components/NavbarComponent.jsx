import { Nav, Navbar } from 'react-bootstrap';
import '../styles/navbar.css';
import ScrollProgressBar from './ScrollProgressBar';

export default function NavbarComponent() {
    return (
        <div>
            <Navbar id="navbar" sticky="top" expand="xl lg">
                <Navbar.Brand id="navbar-brand" ><a href="/">Vivek Kaushik</a></Navbar.Brand>
                <Navbar.Toggle id="toggle" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" id="nav">
                        <Nav.Link id="about" exact="true" href="/about">About</Nav.Link>
                        <Nav.Link id="blog" exact="true" href="/blog">Blogs</Nav.Link>
                        <Nav.Link id="projects" exact="true" href="/projects">Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <ScrollProgressBar />
            </Navbar>
        </div>
    );
}