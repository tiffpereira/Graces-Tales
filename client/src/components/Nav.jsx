import { Link } from "react-router-dom"
import "../styles/Nav.css"
import logo from '../assets/logo.png'
// import { useState } from "react"

const Nav = () => {
    // const [showLinks, setShowLinks] = useState(false)

    return (
        <div>
        <nav>
            <header>
                <Link to='/'>
                    <img src= {logo} alt="logo"/>
                </Link>
            </header>
            <div>
            <Link to=""></Link>
            <Link className="nav-rightside"to="/Books">Books</Link>
            </div>
            <div>
                <Link className="nav-rightside" to="/myaccount">My Account</Link>
                <Link className="nav-rightside" to="/cart">Cart</Link>
            </div>
        </nav>
        </div>
    )

}

export default Nav 