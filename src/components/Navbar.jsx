import React from 'react'
import NavItem from './NavItem'


const Navbar = () => {
    return (
        <header className="p-3 text text my-5">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 gap-5">
                        {/* <li>
                            <a href='#' className="nav-link px-2 text-info active">
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="bi bi-plus-circle-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                    </svg>
                                </span>
                            </a>
                        </li> */}
                        <NavItem text="Add Product" />
                        <NavItem text="Table" />
                        <NavItem text="Cards" />
                        
                    </ul>
                    <div className="col-md-3">
                        <select className="form-control changeLang">
                            <option value="en">English</option>
                            <option value="fr">French</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Navbar