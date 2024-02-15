import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'


export default function NavBar() {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      <Navbar className='navbar' fixed='top' expand='lg'>
        <Container fluid style={{ paddingLeft: 0 }}>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/' onClick={scrollToTop}>ADRIENN SZABO</Nav.Link>
          </Nav>
          <Nav className='nav-links'>
            <Nav.Link as={Link} to='/' onClick={scrollToTop}>Projects</Nav.Link>
            <Nav.Link as={Link} to='/about' onClick={scrollToTop}>About</Nav.Link>
            <Nav.Link as={Link} to='/contact' onClick={scrollToTop}>Contact</Nav.Link>
          </Nav>

        </Container>
      </Navbar>
    </>

  )
}