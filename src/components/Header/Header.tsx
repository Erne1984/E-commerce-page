import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function Header({ }) {
    return (
        <>
            <nav className='nav-header'>
                <div className='left-column'>
                    <h1 className="logo">SNEAKERS</h1>

                    <ul className='list-itens'>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Woman</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className='right-column'>

                    <FontAwesomeIcon className='cart' icon={faCartShopping} />

                    <img src='./image-avatar.png' className='avatar'></img>

                </div>

            </nav>
        </>
    )
}