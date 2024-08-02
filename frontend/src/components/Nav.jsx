import React from 'react'
import { Link } from 'react-router-dom'
import useUserContext from '../UserContext';


const Nav = () => {
    const { loggedIn, logout } = useUserContext();
    console.log(loggedIn);

    const showLoggedin = () => {
        if (loggedIn) {
            return (
                <div>
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" onClick={logout}>
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            );
        } else {
            return (

                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/Home">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/Signup">
                            Signup
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/Login">
                            Login
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/ProductListing">
                            Tool listing
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            data-mdb-dropdown-init=""
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            aria-expanded="false"
                        >
                            Dropdown
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <a className="dropdown-item" href="#">
                                    Action
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Another action
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Something else here
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            );
        }
    };
    return (<nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div className="container-fluid">
            <button
                data-mdb-collapse-init=""
                className="navbar-toggler"
                type="button"
                data-mdb-target="#navbarCenteredExample"
                aria-controls="navbarCenteredExample"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <i className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarCenteredExample">
                {showLoggedin()}
            </div>
        </div>
    </nav>

    )
}

export default Nav