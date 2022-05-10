import { Link } from "react-router-dom"
// import { useState } from "react"

const Nav = () => {
    // const [showLinks, setShowLinks] = useState(false)

    return (
        <div>
            <div>
            <Link to=""></Link>
            <Link to="/Books">Books</Link>
            </div>
            <div>
                <Link to="/cart">Cart</Link>
                <Link to="/myaccount">My Account</Link>
            </div>
        </div>
    )

}

export default Nav 