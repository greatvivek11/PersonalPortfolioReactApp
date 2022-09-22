import '../styles/navbar.css';
import {useState,useEffect} from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

export default function NavbarComponent() {
    const [hide, setHide] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                setHide(true);
            } else { // if scroll up show the navbar
                setHide(false);
            }

            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };
    useEffect(() => {
        if (typeof window !== 'undefined') {
          window.addEventListener('scroll', controlNavbar);

          // cleanup function
          return () => {
            window.removeEventListener('scroll', controlNavbar);
          };
        }
      }, [lastScrollY]);
    const location = useLocation();
    return (
        <div>
            <Navbar id="navbar" hidden={hide} fixed="top" expand="md" style={{backgroundColor:"#ffe6e9"}}>
                <Navbar.Brand id="navbar-brand"><a href="/">Vivek Kaushik</a></Navbar.Brand>
                <Navbar.Toggle id="toggle" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav activeKey={location.pathname} className="mr-auto" id="nav">
                        <NavLink id="about" activeStyle={{transform: "scale(1.15)",  color: "gold",  backgroundColor: "rgb(185, 87, 223)",  borderRadius: "20pt", textDecoration:"underline"}} exact={true} to="/about">About</NavLink>
                        <NavLink id="blog" activeStyle={{transform: "scale(1.15)",  color: "gold",  backgroundColor: "rgb(185, 87, 223)",  borderRadius: "20pt", textDecoration:"underline"}} exact={true} to="/blog">Blogs</NavLink>
                        <NavLink id="projects" activeStyle={{transform: "scale(1.15)",  color: "gold",  backgroundColor: "rgb(185, 87, 223)",  borderRadius: "20pt", textDecoration:"underline"}} exact={true} to="/projects">Projects</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}