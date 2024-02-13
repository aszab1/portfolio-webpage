import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Footer(){
  return (
    <footer  className='footer'>
      <div className='footer-div'>
      <p className='footer-p'>&copy; 2024 Adrienn Szabo</p>
      <FontAwesomeIcon icon={faLinkedinIn} className='fa-2xl' onClick={() => window.open('https://www.linkedin.com/in/adriennsz/')}/>
      <FontAwesomeIcon icon={faGithub} className='fa-2xl' onClick={() => window.open('https://github.com/aszab1')}/>
      </div>
    </footer>
  )
}