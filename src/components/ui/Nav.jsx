import React from 'react'
import './Nav.css'

const Nav = ({ checkLog }) => {
return (
        <nav>
            <p>logo</p>
            <p>Welcome to your dashboard</p>
            <button onClick={checkLog}>Logout</button>
        </nav>

)
}

export default Nav