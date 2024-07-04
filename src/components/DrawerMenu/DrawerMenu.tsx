import './DrawerMenu.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

interface DrawerMenuProps {
    DrawerMenuState: Boolean;
    closeDrawer: () => void;
}

export default function DrawerMenu(props: DrawerMenuProps): JSX.Element {

    return (
        <div className={`drawer-menu ${props.DrawerMenuState ? "active" : "none"}`}>

            <FontAwesomeIcon
                icon={faX}
                className="drawer-menu-close-icon"
                onClick={props.closeDrawer}
            />

            <ul className='menu'>
                <li>Collections</li>
                <li>Men</li>
                <li>Woman</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}