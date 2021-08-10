import React from 'react'
import '../scss/contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faTwitter, faInstagram, } from '@fortawesome/free-brands-svg-icons';

// import { useState } from 'react';

const Contact = () =>
{
    return (
        <>
<<<<<<< HEAD
            <div id="backDiv" className="bgColor"></div>

            <div className="container">
                <div className="row">
                    {/* Left-Column */}
                    <div className="col-8 leftColumn">
                        <section>
                            <div id="sectionTitle" className="secHeadTitle">
                                <h1>Contact Us</h1>
                                <h6>Contact <span className="from">from.</span><span className="skratch">skratch</span> and the development team.</h6>
                            </div>
                            <div className="secContent">
                                <h3>
                                    Hi! We are the <span className="from">from.</span><span className="skratch">skratch</span> Team
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus, elit in pulvinar semper, leo leo malesuada neque, eu vehicula odio diam euismod sapien. Donec gravida bibendum turpis, ac tempus risus luctus ut. Suspendisse laoreet at enim at malesuada. Fusce ante est, luctus a libero sed, finibus dignissim enim. Morbi interdum quam ac neque tempor, sed vestibulum lorem lobortis.
                                </p>
                                <p>
                                    Nulla fringilla aliquet felis quis ullamcorper. Donec suscipit tellus et bibendum pharetra. <span className="from">from.</span><span className="skratch">skratch</span> Pellentesque euismod nibh non lorem faucibus, tincidunt facilisis velit venenatis. Nulla lorem justo, aliquam quis eleifend et, dapibus eget leo. Pellentesque rhoncus aliquam nulla nec elementum. Nunc at metus in purus mattis consequat porttitor eu purus.
                                </p>

                            </div>
                        </section>
                    </div>

                    {/* Right-Column */}
                    <div className="col-4 rightColumn">
                        <div className="secConHead">
                            <img className="aboutHeadImg" src="/images/donene.jpg" alt="image" />
                        </div>
                    </div>

                </div>
            </div>
=======
>>>>>>> e0b7c6dcbbc1eb7e6a50671b2a193747ac4927d8

            <div className="container mt-5 d-flex justify-content-center">
                <br />
                <h3>Have any questions or comments? Let us know!</h3>
            </div>

            {/* from skratch 'contact info section' */}
            <div id="contact-container">
                <div className="contact-info">
                    <h4>Contact Information</h4>
                    <p className="sub-title">Please fill out the form and the from.Skratch team will get back to you.</p>
                    <div className="icon-text">
                        <FontAwesomeIcon className="fa" icon={faPhoneAlt} />
                        <span>205-987-2321</span>
                    </div>
                    <div className="icon-text">
                        <FontAwesomeIcon className="fa" icon={faEnvelope} />
                        <span>contact@fromskratch.com</span>
                    </div>
                    <div className="icon-text">
                        <FontAwesomeIcon className="fa" icon={faMapMarkerAlt} />
                        <span>1234 Vulcan Rd Birmingham, AL 35205</span>
                    </div>
                    <div className="social-media">
                        <a href="#" className="icon-circle">
                            <i><FontAwesomeIcon className="fa" icon={faFacebookSquare} /></i>
                        </a>
                        <a href="#" className="icon-circle">
                            <i><FontAwesomeIcon className="fa" icon={faInstagram} /></i>
                        </a>
                        <a href="#" className="icon-circle">
                            <i><FontAwesomeIcon className="fa" icon={faTwitter} /></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* user contact submission form */}
            <form>
                <div className="col">
                    <div className="form-group">
                        
                        <input type="text" placeholder="First Name" className="" />
                    </div>

                    <div className="form-group">
                        
                        <input type="text" placeholder="Last Name" className="" />
                    </div>
                </div>
                <div className="col">
                    <div className="form-group">
                        
                        <input type="email" placeholder="Email Address" className="" />
                    </div>
                    <div className="form-group">
                        
                        <input type="tel" id="phone" placeholder="Phone Number" className="" />
                    </div>
                </div>

                <div className="col">
                    <div className="form-group">
                        
                        <input type="text" placeholder="Message Subject" className="" />
                    </div>

                    <div className="form-group">
                        
                        <input type="text" placeholder="Company Name" className="" />
                    </div>
                </div>
                <div className="col">
                    <div className="form-group">
                        
                        <textarea placeholder="Message">
                            
                        </textarea>
                    </div>
                </div>
                <div className="col">
                    <div className="form-group">
                        <button type="submit" className="btn btn-dark btn-square hover-effect">Send Message</button>
                    </div>
                </div>
            </form>

        </>

    )

}

export default Contact;