import React from 'react'
import NavItem from './NavItem'
import Languages from "./Languages"
// import Form from "./Form"

import { Link } from "react-router-dom"


const Navbar = () => {
    return (

        <header className="p-3 text text my-5">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 gap-5">
                        <Link to="/Form" >
                            <NavItem text="Add Product" />
                        </Link>

                        <Link to="/Table" >
                            <NavItem text="Table" />
                        </Link>
                        
                        <NavItem text="Cards" />

                    </ul>
                    <Languages />
                </div>
            </div>
        </header>

    )
}

export default Navbar