import './Header.css'

export default function Header({ }) {
    return (
        <>
            <nav>
                <div className='right-column'>
                    <span className="logo">SNEAKERS</span>

                    <div>
                        <ul>
                            <li>Collections</li>
                            <li>Men</li>
                            <li>Woman</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>

            </nav>
        </>
    )
}