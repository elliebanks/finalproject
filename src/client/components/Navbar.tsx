import React from 'react';
import { Link } from "react-router-dom";
<<<<<<< HEAD
import styled from "styled-components";
=======
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // import fa-icons
>>>>>>> navbar

let Navbar = () =>
{
    return (
        <>
<<<<<<< HEAD
            <div className="container">
                <nav className="navbar navbar-light bg-dark">
                    <div className="container-fluid">
                        <div className="logo">
                            <Link to='/'>
                                from.<span className="skratch">skratch</span>
                            </Link>
                        </div>
                        <nav>
                            <ul className="log-user">
                                <i className="fas fa-user-plus"></i>
                                <i className="fas fa-sign-in-alt"></i>
                            </ul>
                            <ul id="nav" className="nav">
                                <li><a className="nav-link" href="">Home</a></li>
                                <li><a className="nav-link" href="">Recipes</a></li>
                                <li><a className="nav-link" href="">Submit</a></li>
                                <li><a className="nav-link" href="">About</a></li>
                                <li><a className="nav-link" href="">Contact</a></li>
                            </ul>
                        </nav>
                        {/*<div className="logo">
                            <LogoLink to='/'>
                                from.<span className="skratch">skratch</span>
                            </LogoLink>
                        </div>
                         <div className="logo">
                            <Link to="/">
                                <span className="from">from.</span><span className="skratch">skratch</span>
                            </Link>
                        </div> */}
                    </div>
                </nav>
            </div>


=======
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
>>>>>>> navbar
        </>

    )
}

export default Navbar;