import React from 'react';

const About = () =>
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
                                <h1>About Us</h1>
                                <h6>About <span className="from">from.</span><span className="skratch">skratch</span> and the development team.</h6>
                            </div>
                            <div className="secContent">
                                <h3>
                                    Hi! We are the <span className="from">from.</span><span className="skratch">skratch</span> Team
                                </h3>
                                <p>
                                    We are a group of 5 web-developers who wanted to create a community for our love of good FOOD.
                                    Don't you hate the days when you are searching through your pantry and just don't know what to make?
                                    So do we! <span className="from">from.</span><span className="skratch">skratch</span> is here to help you make those decisions, while making it as easy as possible in the process.
                                </p>
                                <p>
                                    Whether you've got some ingredients you aren't sure what to do with or maybe you are a beginner looking for some tasty new recipe ideas...From.Skratch has your back!
                                    Pop those random ingredients in our search bar, and explore your options.
                                </p>
                                <p>
                                    Have you been making recipes that you love and want to share them with the world? Head to our recipe form and let us know what you've got.
                                    We've got hundreds of original recipes. Check out our recipes page if you just want to see what your friends are cooking!
                                    We are a community of food lovers, passionate about connecting with the foodie in you. Come on and stay a while!
                                </p>
                            </div>
                        </section>
                    </div>

                    {/* Right-Column */}
                    <div className="col-4 rightColumn">
                        <div className="secConHead">
                            <img className="aboutHeadImg" src="/images/baking.gif" alt="image" />
                        </div>
                    </div>

                </div>
            </div>

            <div className="container aboutTeam">
                <div className="row">
                    <div id="sectionTitle" className="col secTitle">
                        <h1>About Our Team</h1>
                        <h6>About <span className="from">from.</span><span className="skratch">skratch</span> and the development team.</h6>
                    </div>
                    <div className="card-columns">
                        <div className="card">
                            <div className="card-container" style={{ backgroundImage: `url("http://localhost:3000/images/aboutHead.jpg")` }}>
                                <img className="card-img" src="/images/briana.jpg" alt="Briana Jenkins" />
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">Jenkins, Briana</h3>
                                <h6>Full-Stack Development</h6>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-container" style={{ backgroundImage: `url("http://localhost:3000/images/aboutHead.jpg")` }}>
                                <img className="card-img" src="/images/ellie.png" alt="Ellie Banks" />
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">Banks, Ellie</h3>
                                <h6>Full-Stack Development</h6>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-container" style={{ backgroundImage: `url("http://localhost:3000/images/aboutHead.jpg")` }}>
                                <img className="card-img" src="/images/moshe.jpg" alt="Moshe Rube" />
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">Rube, Moshe</h3>
                                <h6>Full-Stack Development</h6>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-container" style={{ backgroundImage: `url("http://localhost:3000/images/aboutHead.jpg")` }}>
                                <img className="card-img" src="/images/justin.jpg" alt="Justin Rush" />
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">Rush, Justin</h3>
                                <h6>Full-Stack Development</h6>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-container" style={{ backgroundImage: `url("http://localhost:3000/images/aboutHead.jpg")` }}>
                                <img className="card-img" src="/images/marques.jpg" alt="Marques Bradley" />
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">Bradley, Marques</h3>
                                <h6>Full-Stack Development</h6>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}

export default About;