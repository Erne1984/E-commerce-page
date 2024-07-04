import './HeaderMobile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import DrawerMenu from '../DrawerMenu/DrawerMenu';
import { useState } from 'react';

export default function HeaderMobile() {
    const [drawerMenu, setDrawerMenu] = useState(false)

    const toggleDrawer = () => {
        setDrawerMenu(!drawerMenu);
    };

    return (
        <>
            <DrawerMenu DrawerMenuState={drawerMenu} closeDrawer={toggleDrawer} />
            <nav className='menu-mobile'>
                <div className='logo-box-mobile'>
                    <FontAwesomeIcon className='icon-burguer' icon={faBars} onClick={toggleDrawer}/>
                    <h1 className="logo-mobile">SNEAKERS</h1>
                </div>

                <div className='cart-box-mobile'>
                    <FontAwesomeIcon className='cart' icon={faCartShopping} />
                    <img src='./image-avatar.png' className='avatar'></img>
                </div>
            </nav>
        </>
    )
}