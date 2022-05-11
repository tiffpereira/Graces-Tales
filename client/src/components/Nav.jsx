import { Link } from "react-router-dom"
import "../styles/Nav.css"
// import { useState } from "react"

const Nav = () => {
    // const [showLinks, setShowLinks] = useState(false)

    return (
        <nav>
            <div>
            <Link to=""></Link>
            <Link className="rightside"to="/Books">Books</Link>
            </div>
            <div>
                <Link className="rightside" to="/cart">Cart</Link>
                <Link className="rightside" to="/myaccount">My Account</Link>
            </div>
        </nav>
    )

}

export default Nav 