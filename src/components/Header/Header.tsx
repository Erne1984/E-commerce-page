import './Header.css';
import DropdownCart from '../DropdownCart/DropdownCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Header({ }) {
    const [dropdown, setDropdown] = useState(false)

    function handleDropdown(){
        if(!dropdown){
            setDropdown(true)
        }else{
            setDropdown(false)
        }
    }


    return (
        <>
            <nav className='nav-header'>
                <div className='left-column'>
                    <h1 className="logo">SNEAKERS</h1>

                    <ul className='list-itens'>
                        <li><span>Collections</span></li>
                        <li><span>Men</span></li>
                        <li><span>Woman</span></li>
                        <li><span>About</span></li>
                        <li><span>Contact</span></li>
                    </ul>
                </div>

                <div className='right-column'>

                    <div className='dropdown-menu-box'>
                        <FontAwesomeIcon className='cart' icon={faCartShopping} onClick={handleDropdown} />

                        <DropdownCart dropdownState={dropdown}/>
                    </div>

                    <img src='./image-avatar.png' className='avatar'></img>

                </div>

            </nav>
        </>
    )
}