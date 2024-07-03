import './Details.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function Details() {
    return (
        <>
            <section className='container-descri'>

                <h3 className='subtitle'>SNEAKER COMPANY</h3>

                <h1 className='product-name-title'>Fall Limited Edition Sneakers</h1>

                <p className='product-descri'>These low-profile sneakers are your perfect casual wear companion.
                    Featuring a durable rubber outer sole,
                    they'll withstand everything the weather can offer
                </p>

                <div className='price-box'>
                    <div className='current-price-box'>
                        <p>$125.00</p>
                        <span className='previous-value'>$250.00</span>
                    </div>
                    <span className='discount'>50%</span>
                </div>

                <div className='add-to-cart-box'>
                    <div className='plus-minus-box'>
                        <FontAwesomeIcon className='icons' icon={faMinus} />
                        <span>0</span>

                        <FontAwesomeIcon className='icons' icon={faPlus} />
                    </div>
                    <button>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <p>Add to the cart</p>
                    </button>
                </div>

            </section>
        </>
    )
}