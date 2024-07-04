import './DropdownCart.css'

interface DropdownCartProps {
    dropdownState: Boolean;
}

export default function DropdownCart(props: DropdownCartProps): JSX.Element {

    return (
        <div className={`dropdown-menu ${props.dropdownState ? "active" : "none"}`}>

            <h4>Cart</h4>

            <ul className='list-of-itens-cart'>

            </ul>

            <button className='btn-checkout'>Checkout</button>
        </div>
    )
}