import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'


export default function NavBar() {
  return (
    <>
    <Navbar className='navbar' data-bs-theme='transparent'>
            <div className="logo">
            </div>
            <Container fluid style={{ paddingLeft: 0 }}>
              <Nav className="me-auto">
                <Nav.Link as={Link} to='/'>ADRIENN SZABO</Nav.Link>
                <Nav.Link as={Link} to='/'>Projects</Nav.Link>
                <Nav.Link as={Link} to='/about'>About</Nav.Link>
                <Nav.Link as={Link} to='/'>Contact</Nav.Link>
                </Nav>
                  
                </Container>
              </Navbar>
    </>

  )
}