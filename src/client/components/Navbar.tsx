import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

let Navbar = () =>
{
    return (
        <>
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


        </>

    )
}

export default Navbar;