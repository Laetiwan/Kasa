//import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../styles/Header.css'
 
function Header() {
    return (
        <div className='header'>     
            <img src={logo} alt='logo-Kasa' className='header__logo' />     
            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>A propos</li>
                </ul>
            </nav>   
        </div>
        
    )
}

export default Header