// CSS 
import './NavBar.css'
// Utility
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function NavBar () {

    return (
        <Navbar collapseOnSelect className='nav' expand="lg" bg="dark" variant="dark">
            <Container className='navBar'>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Container className='navbar_container'>
                    <Nav className='navMenu'>  
                        <Nav.Link className='navItem' as={Link}to="#myProjects">My Projects</Nav.Link>
                        <Nav.Link className='navItem' as={Link}to="#contactMe">Contact Me</Nav.Link>
                    </Nav>
                </Container>
                </Navbar.Collapse>
            <Navbar.Brand as='h1' className='brand ml-auto'>
                MC.
            </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavBar