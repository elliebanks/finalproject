import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // import fa-icons

let Footer = () =>
{
    return (
        <>
            <footer>
                <div className="row-fluid">
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
                <div className="row-fluid footBg pt-2">
                    <div className="container">
                        <div className="row">
                            <div className="col mt-2">
                                <div className="footLogo">
                                    <Link to="/">
                                        from.<span className="footLogo">skratch</span>
                                    </Link>
                                    <p>This web application was built with <FontAwesomeIcon icon="heart" /> and <FontAwesomeIcon icon="coffee" /> by TeamTwo, Inc. in greatest city, Birmingham, AL!</p>
                                    <FontAwesomeIcon icon={['fab', 'html5']} />
                                    <FontAwesomeIcon icon={['fab', 'css3-alt']} />
                                    <FontAwesomeIcon icon={['fab', 'js-square']} />
                                    <FontAwesomeIcon icon={['fab', 'node-js']} />
                                    <FontAwesomeIcon icon={['fab', 'react']} />
                                    <FontAwesomeIcon icon={['fab', 'font-awesome-flag']} />
                                    <FontAwesomeIcon icon={['fab', 'slack']} />
                                    <FontAwesomeIcon icon={['fab', 'git']} />
                                </div>
                            </div>
                            <div className="col footSocial mt-2">
                                <h3>Follow Us!</h3>
                                <Link className="iconFace" to={{ pathname: "https://facebook.com" }} target="_blank">
                                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                                </Link>
                                <Link className="iconTwit" to={{ pathname: "https://twitter.com" }} target="_blank">
                                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                                </Link>
                                <Link className="iconTube" to={{ pathname: "https://youtube.com" }} target="_blank">
                                    <FontAwesomeIcon icon={['fab', 'youtube']} />
                                </Link>
                                <Link className="iconLink" to={{ pathname: "https://linkedin.com" }} target="_blank">
                                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                                </Link>
                                <Link className="iconGit" to={{ pathname: "https://github.com" }} target="_blank">
                                    <FontAwesomeIcon icon={['fab', 'github-alt']} />
                                </Link>
                                <Link className="iconDisc" to={{ pathname: "https://discord.com" }} target="_blank">
                                    <FontAwesomeIcon icon={['fab', 'discord']} />
                                </Link>

                            </div>
                            <div className="col mt-2">
                                <h3>Sitemap</h3>
                                <ul className="sitemap">
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
                            <div className="container footEnd text-center">
                                <p>© 2021 TeamTwo, Inc. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;