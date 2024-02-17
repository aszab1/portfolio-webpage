import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'


export default function NavBar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [scrollToProjects, setScrollToProjects] = useState(false)

  useEffect(() => {
    if (location.pathname === '/' && scrollToProjects) {
      const section = document.getElementById('projects')
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
        setScrollToProjects(false)
      }
    }
  }, [location, scrollToProjects])

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  const handleProjectClick = () => {
    if (location.pathname !== '/') {
      setScrollToProjects(true)
      navigate('/')
    } else {
      scrollToSection('projects')
    }
  }
  const scrollToSection = (sectionId) => {
    if (sectionId === 'projects') {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      scrollToTop()
    }
  }

  return (
    <>
      <Navbar className='navbar' fixed='top' expand='lg'>
        <Container fluid style={{ paddingLeft: 0 }}>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/' onClick={scrollToTop}>ADRIENN SZABO</Nav.Link>
          </Nav>
          <Nav className='nav-links'>
            <Nav.Link onClick={handleProjectClick}>Projects</Nav.Link>
            <Nav.Link as={Link} to='/about' onClick={scrollToTop}>About</Nav.Link>
            <Nav.Link as={Link} to='/contact' onClick={scrollToTop}>Contact</Nav.Link>
          </Nav>

        </Container>
      </Navbar>
    </>

  )
}