import React from 'react'

const NavItem = ({text}) => {
    return (
        <li className="nav-link px-2 text-info active">
            {text}
        </li>
    )
}

export default NavItem