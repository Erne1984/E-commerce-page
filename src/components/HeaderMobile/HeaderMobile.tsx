import './HeaderMobile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function HeaderMobile() {

    return (
        <nav className='menu-mobile'>
            <div className='logo-box-mobile'>
                <FontAwesomeIcon icon={faBars} />
                <h1 className="logo-mobile">SNEAKERS</h1>
            </div>

            <div className='cart-box-mobile'>
                <FontAwesomeIcon className='cart' icon={faCartShopping} />
                <img src='./image-avatar.png' className='avatar'></img>
            </div>
        </nav>
    )
}