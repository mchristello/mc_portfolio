// CSS 
import './NavBar.css'
// Utility
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function NavBar () {

    return (
        <Navbar collapseOnSelect className='nav' expand="lg" bg="dark" variant="dark">
            <Navbar.Brand as={Link}to='/' className='brand ml-auto'>
                MC.
            </Navbar.Brand>
            <Container className='navBar'>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Container className='navbar_container'>
                    <Nav>
                        <Nav.Link as={Link}to='/'>Top</Nav.Link>
                        <Nav.Link as={Link}to="#myProjects">Projects</Nav.Link>
                        <Nav.Link as={Link}to="#contactMe">Contact Me</Nav.Link>
                    </Nav>
                </Container>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar