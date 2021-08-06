import React from 'react'
import '../scss/contact.scss';
// import { useState } from 'react';

const Contact = () => {
    return (
        <>
            <div className="container mt-5 d-flex justify-content-center">
                <br />
                <h3>Have any questions or comments? Let us know!</h3>
            </div>

            {/* from skratch 'contact info section' */}
            <div id="contact-container">
                <div className="contact-info">
                </div>
                <form >
                    <h4>Contact Information</h4>
                    <p>OUR "CONTACT INFORMATION" WILL GO HERE</p>

                </form>
            </div>

            {/* user contact submission form */}
            <div className="container d-flex justify-content-center" id="contactUsForm">
                <form action="">
                    <div className="row">
                        <div className="form-group">
                            {/* <label>First Name  </label> */}
                            <input type="text" placeholder="First Name" className="mr-3" />
                        </div>
                        <div className="form-group">
                            {/* <label>Last Name  </label> */}
                            <input type="text" placeholder="Last Name" className="mr-5" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            {/* <label>Email Address </label> */}
                            <input type="email" placeholder="Email Address" className="mr-5" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            {/* <label>Phone Number  </label> */}
                            <input type="tel" placeholder="Phone Number" className="mr-5" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            {/* <label>Message Title  </label> */}
                            <input type="text" placeholder="Message Subject" className="mr-5" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            {/* <label>Message  </label> */}
                            <textarea className=""
                                placeholder="Write your message here...">
                            </textarea>
                        </div>
                    </div>

                    <div className="row">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>

    )

}

export default Contact;