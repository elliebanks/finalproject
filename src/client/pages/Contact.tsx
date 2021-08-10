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