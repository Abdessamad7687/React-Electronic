import React from 'react'

const NavItem = ({text}) => {
    return (
        <li>
            <a href='#' className="nav-link px-2 text-info active">
                {text}
            </a>
        </li>
    )
}

export default NavItem