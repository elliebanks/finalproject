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
                                <p>
                                    We are a group of 5 web-developers who wanted to create a community for our love of good FOOD.
                                    Don't you hate the days when you are searching through your pantry and just don't know what to make?
                                    So do we! <span className="from">from.</span><span className="skratch">skratch</span> is here to help you make those decisions, while making it as easy as possible in the process.
                                </p>
                            </div>
                        </section>
                        <section>
                            <h3>
                                Do you have any questions or comments? Let us know!
                            </h3>
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