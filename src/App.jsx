import './App.css'
import NavBar from './components/Nav'
import Home from './components/Home'
import { Outlet, useLocation, useNavigation } from 'react-router-dom'
import Projects from './components/Projects'

function App() {
  const location = useLocation()

  return (
    <>
      <div>
        <NavBar />
        <main>
          {location.pathname === '/' && <Home />}
          <Projects />

          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
