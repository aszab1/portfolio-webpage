import './App.css'
import NavBar from './components/Nav'
import Home from './components/Home'
import { Outlet, useLocation, useNavigation } from 'react-router-dom'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  const location = useLocation()

  return (
    <>
      <div>
        <NavBar />
        <main>
          {location.pathname === '/' && <Home />}
          {location.pathname === '/' && <Projects />}
          <Outlet />
        <Footer />
        </main>
      </div>
    </>
  )
}

export default App
