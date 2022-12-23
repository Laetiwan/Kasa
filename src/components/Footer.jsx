import logo from '../assets/logo.png'
import '../styles/Footer.css'
 
function Footer() {
    return (
        <div className='footer'>     
            <img src={logo} alt='logo-Kasa' className='footer__logo' />     
            <div className='footer__text'>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
        
    )
}

export default Footer