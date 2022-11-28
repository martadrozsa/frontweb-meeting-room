import React from "react"
import './styles.css'
import 'bootstrap/js/src/collapse.js'
import {Link, NavLink} from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
            <div className="container-fluid">
                <Link to="/" className="nav-logo-text">
                    <h4>Room Scheduling</h4>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#room-scheduling-navbar"
                    aria-controls="room-scheduling-navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="room-scheduling-navbar">
                    <ul className="navbar-nav offset-md-2 main-menu">
                        <li>
                            <NavLink to="/" activeClassName="active" exact>
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/rooms" activeClassName="active">
                                SALAS
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="" activeClassName="inactive">
                                ADMIN
                            </NavLink>
                        </li>
                        {/*<li className="nav-link-salas">*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
