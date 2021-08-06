import React from 'react';

let About = () =>
{
    return (
        <>
            {/* <div>
                <p className="display-5 ">About Us</p>
            </div> */}
            {/* <div className="container mb-3">
                <img src="/images/about2.jpg" className="img-fluid" alt="from-skratch-logo" id="aboutPageLogo" />
            </div> */}

            <div id="backDiv" className="bgColor"></div>

            <div className="container">
                <div className="row">
                    {/* Left-Column */}
                    <div className="col-8 leftColumn">
                        <section>
                            <div id="sectionTitle" className="secTitle">
                                <h1>About Us</h1>
                                <h6>About from.skratch and the development team.</h6>
                            </div>
                            <div className="secContent">
                                <h3>
                                    Hi! We are the "from.Skratch" Team
                                </h3>
                                <p>
                                    We are a group of 5 web-developers who wanted to create a community for our love of good FOOD.
                                    Don't you hate the days when you are searching through your pantry and just don't know what to make?
                                    So do we! From.Skratch is here to help you make those decisions, while making it as easy as possible in the process.
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
                            <img className="aboutHeadImg" src="/images/aboutHead.jpg" alt="image" />
                        </div>
                    </div>

                </div>
            </div>

            <div className="container aboutTeam">
                <div className="row">
                    <div id="sectionTitle" className="col secTitle">
                        <h1>About Us</h1>
                        <h6>About from.skratch and the development team.</h6>
                    </div>
                    <div className="card-columns">
                        <div className="card">
                            <img className="card-img-top" src=".../100px160/" alt="Card image cap" />
                            <div className="card-body">
                                <h3 className="card-title">Briana</h3>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>

                        <div className="card">
                            <img className="card-img-top" src=".../100px160/" alt="Card image cap" />
                            <div className="card-body">
                                <h3 className="card-title">Moshe</h3>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>

                        <div className="card">
                            <img className="card-img-top" src=".../100px160/" alt="Card image cap" />
                            <div className="card-body">
                                <h3 className="card-title">Justin</h3>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>

                        <div className="card">
                            <img className="card-img-top" src="/images/ellie.png" alt="Card image cap" />
                            <div className="card-body">
                                <h3 className="card-title">Ellie</h3>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>

                        <div className="card">
                            <img className="card-img-top" src="/images/marques.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h3 className="card-title">Marques</h3>
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