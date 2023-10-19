import {FooterStyle} from './styles'
import {Link} from '../../atoms/Link/Link'
import {Link as LinkIcon} from 'react-router-dom'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import {title} from '../../../theme'
import  './css.css'
export const Footer = () => {
  return (
    <FooterStyle>
    <div className="waves">
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
    </div>
    <ul className="social-icon">
      <li className="social-icon__item"><LinkIcon className="social-icon__link" to="#">
          <FaFacebook/>
        </LinkIcon></li>
      <li className="social-icon__item"><LinkIcon className="social-icon__link" to="#">
      <FaTwitter/>

        </LinkIcon></li>
      <li className="social-icon__item"><LinkIcon className="social-icon__link" to="#">
      <FaLinkedin/>

        </LinkIcon></li>
      <li className="social-icon__item"><LinkIcon className="social-icon__link" to="#">
      <FaInstagram/>
        </LinkIcon></li>
    </ul>
    <ul className="menu">
      <li className="menu__item"><Link description={'Home'} color='white' link="/"/></li>
      <li className="menu__item"><Link description={'Services'} color='white' link="/services"/></li>
      <li className="menu__item"><Link description={'About'} color='white' link="/"/></li>

    </ul>
    <p>&copy;2023 {title}</p>

    </FooterStyle>
  )
}
