import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // import fa-icons

let Navbar = () =>
{
    return (
        <>
            {/* Start Header */}
            <header>
                {/* Wrapper Start */}
                <div className="container">
                    {/* FullNav-Wrapper Start */}
                    <nav>
                        {/* Logo */}
                        <div className="logo">
                            <Link to="/">
                                from.<span className="logo">skratch</span>
                            </Link>
                        </div>
                        
                        {/* Nav Menu */}
                        <ul id="nav" className="nav">
                            <li>
                                <Link to="/" >
                                    <FontAwesomeIcon icon="home" />
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/recipes">
                                    <FontAwesomeIcon icon="utensils" />
                                    Recipes
                                </Link>
                            </li>
                            <li>
                                <Link to="/submit">
                                    <FontAwesomeIcon icon="file-alt" />
                                    Submit
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" >
                                    <FontAwesomeIcon icon="question-circle" />
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                    <FontAwesomeIcon icon="address-book" />
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            {/* End Header */}
        </>

    )
}

export default Navbar;