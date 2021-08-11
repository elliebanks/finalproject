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
            <div id="backDiv" className="bgColor"></div>

            <div className="container">
                <div className="row">
                    <div className="col-8 leftColumn">
                        <section>
                            <div id="sectionTitle" className="secHeadTitle">
                                <h1>Contact Us</h1>
                                <h6>Contact <span className="from">from.</span><span className="skratch">skratch</span> and the development team.</h6>
                            </div>
                            <div className="secContent">
                                <h3>
                                    Get in touch with the <span className="from">from.</span><span className="skratch">skratch</span> team!!
                                </h3>
                                <p id="secContentText">
                                    Questions, suggestions, feedback? We are ready to help. Please fill out the form below and a team member will follow up with you shortly.
                                    You may also refer to our contact information if you need further assistance!
                                     <span className="from ml-2">from.</span><span className="skratch mr-1">skratch</span> is here for you!
                                </p>
                            </div>
                        </section>
                        <section>

                            {/* user contact submission form */}
                            <form id="userContactForm">
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

                                        <textarea id="messageBox" placeholder="Message">

                                        </textarea>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-dark btn-square hover-effect">Submit Form</button>
                                    </div>
                                </div>
                            </form>
                        </section>
                    </div>
                    <div className="col-4">
                        <div className="secConHead">
                            <img className="aboutHeadImg" src="/images/donene.jpg" alt="image" />
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
                    </div>
                </div>
            </div>





        </>

    )

}

export default Contact;