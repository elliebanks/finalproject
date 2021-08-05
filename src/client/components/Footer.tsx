import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // import fa-icons

let Footer = () =>
{
    return (
        <>
            <footer>
                <div className="row">
                    <div className="container d-flex justify-content-center">
                        <div className="footCall">
                            <h1>You're Still Here!</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum molestie lorem id tincidunt. Aliquam ut tristique purus.</p>
                            <Link to="/submit">
                                Submit your Recipe!
                            </Link>
                        </div>
                        <div className="footImg">
                            <img src="/images/footCall.png" alt="image" />
                        </div>
                    </div>
                </div>
                <div className="row bg-info">
                    <div className="container bg-success">
                        <div className="row">
                            <div className="col">
                                <div className="logo">
                                    <Link to="/">
                                        from.<span className="logo">skratch</span>
                                    </Link>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum molestie lorem id tincidunt. Aliquam ut tristique purus.</p>
                                    <FontAwesomeIcon icon={['fab', 'html5']} />
                                    <FontAwesomeIcon icon={['fab', 'react']} />
                                    <FontAwesomeIcon icon={['fab', 'css3-alt']} />
                                    <FontAwesomeIcon icon={['fab', 'js-square']} />
                                    <FontAwesomeIcon icon={['fab', 'node-js']} />
                                    <FontAwesomeIcon icon={['fab', 'font-awesome-flag']} />
                                </div>
                            </div>
                            <div className="col">
                                <h3>Follow Us!</h3>
                                <FontAwesomeIcon icon={['fab', 'facebook']} />
                                <FontAwesomeIcon icon={['fab', 'twitter']} />
                                <FontAwesomeIcon icon={['fab', 'youtube']} />
                                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                            </div>
                            <div className="col">
                                <h3>Sitemap</h3>
                                <ul>
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
                            </div>
                            <div className="container text-center">
                                copyright info
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;