import React from 'react'
import '../scss/contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faTwitter, faInstagram, } from '@fortawesome/free-brands-svg-icons';

// import { useState } from 'react';

const Contact = () =>
{
    document.documentElement.style.setProperty("--main-color", "#ffffff");
    document.documentElement.style.setProperty("--second-color", "#ffffff");
    document.documentElement.style.setProperty("--navtext-color", "#ffffff");
    document.documentElement.style.setProperty("--navtextsec-color", "#31cc7f");

    return (
        <>
            <div id="backDiv" className="bgColor"></div>

            <div className="container mb-5">
                <div className="row">
                    <div className="col-8 leftColumn">
                        <section>
                            <div id="sectionTitle" className="secHeadTitle">
                                <h1>Contact Us</h1>
                                <h6>Contact <span className="from">from.</span><span className="skratch">skratch</span> and the development team.</h6>
                            </div>
                            <div className="secContent mb-5">
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
                            <div className="secContent">
                                <h3>
                                    Submit Your Comments:
                                </h3>
                            </div>

                            {/* user contact submission form */}
                            <form id="recipeSubForm" className="contact form" action="formsubmissions.html" method="GET">
                                <div className="group">
                                    <div className="addon">
                                        <FontAwesomeIcon icon="user" />
                                    </div>
                                    <input className="control" type="text" placeholder="First Name" />
                                </div>

                                <div className="group">
                                    <div className="addon">
                                        <FontAwesomeIcon icon="user" />
                                    </div>
                                    <input className="control" type="text" placeholder="Last Name" />
                                </div>

                                <div className="group">
                                    <div className="addon">
                                        <FontAwesomeIcon icon="at" />
                                    </div>
                                    <input className="control" type="email" placeholder="Email Address" />
                                </div>

                                <div className="group">
                                    <div className="addon">
                                        <FontAwesomeIcon icon="phone" />
                                    </div>
                                    <input className="control" type="tel" id="phone" placeholder="Phone Number" />
                                </div>

                                <div className="group">
                                    <div className="addon">
                                        <FontAwesomeIcon icon="building" />
                                    </div>
                                    <input className="control" type="text" placeholder="Company Name" />
                                </div>

                                <div className="group">
                                    <div className="addon">
                                        <FontAwesomeIcon icon="signature" />
                                    </div>
                                    <input className="control" type="text" placeholder="Message Subject" />
                                </div>

                                <div className="group">
                                    <div className="addon">
                                        <FontAwesomeIcon icon="clipboard-list" />
                                    </div>
                                    <textarea
                                        className="text"
                                        placeholder="Message Subject"
                                        name="Directions"
                                    />
                                </div>
                            </form>
                        </section>
                    </div>
                    <div className="col-4">
                        <div className="secConHead mb-4">
                            <img className="aboutHeadImg" src="/images/donene.jpg" alt="image" />
                        </div>

                        <div className="secContent">
                            <div className="contact con">
                                <h3>Contact Information</h3>
                                <p id="secContentText">Please fill out the form and the <span className="from">from.</span><span className="skratch">skratch</span> team will get back to you.</p>
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
                                <h3>Follow Our Social Media</h3>
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