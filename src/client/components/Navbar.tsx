import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // import fa-icons
import { useLocation } from 'react-router-dom';

let Navbar = () =>
{
    // Assign location variable
    const location = useLocation();

    // destruct pathname from location
    const { pathname } = location;

    // JS split method to get the name of the path in the array.
    const splitLocation = pathname.split('/');

    console.log(splitLocation);

    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <nav>
                            {/* Logo */}
                            <div className="logo">
                                <Link to="/">
                                    from.<span className="logo">skratch</span>
                                </Link>
                            </div>

                            {/* Nav Menu */}
                            <ul id="nav" className="nav">
                                <li className={splitLocation[1] === "" ? "home active" : ""}>
                                    <NavLink activeClassName="home active" exact to="/" >
                                        <FontAwesomeIcon icon="home" />
                                        Home
                                    </NavLink>
                                </li>
                                <li className={splitLocation[1] === "recipes" ? "recipes active" : ""}>
                                    <NavLink activeClassName="recipes active" to="/recipes">
                                        <FontAwesomeIcon icon="utensils" />
                                        Recipes
                                    </NavLink>
                                </li>
                                <li className={splitLocation[1] === "submit" ? "submit active" : ""}>
                                    <NavLink activeClassName="submit active" to="/submit">
                                        <FontAwesomeIcon icon="file-alt" />
                                        Submit
                                    </NavLink>
                                </li>
                                <li className={splitLocation[1] === "about" ? "about active" : ""}>
                                    <NavLink activeClassName="about active" to="/about" >
                                        <FontAwesomeIcon icon="question-circle" />
                                        About
                                    </NavLink>
                                </li>
                                <li className={splitLocation[1] === "contact" ? "contact active" : ""}>
                                    <NavLink activeClassName="contact active" to="/contact">
                                        <FontAwesomeIcon icon="address-book" />
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>

    )
}

export default Navbar;