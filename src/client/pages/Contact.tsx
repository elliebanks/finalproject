import React from 'react'
import '../scss/contact.scss';
// import { useState } from 'react';

const Contact = () =>
{
    return (
        <>
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