import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import "../scss/home.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



const Home = () =>
{
    const [text, setText] = useState('');
    const [searchBy, setSearchBy] = useState('');

    document.documentElement.style.setProperty("--main-color", "#31cc7f");
    document.documentElement.style.setProperty("--second-color", "#196640");
    document.documentElement.style.setProperty("--navtext-color", "#000000");
    document.documentElement.style.setProperty("--navtextsec-color", "#ffffff");
    


    return (
        <>
            {/* <div id="backDiv" className="bgColor"></div> */}
            <div className="container mb-5">

                <div id="carouselControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="jumboText">
                                <h1>Let's Start Cooking With Popular Recipes</h1>
                                <p>
                                    Want to learn how to cook but you don't know where to start? No need to worry again!
                                </p>
                                <Link to="/recipes">
                                    Get Started
                                </Link>
                            </div>
                            <img src="./images/jumbotron.png" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item item">
                            <img src="./images/food3.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item item">
                            <img src="./images/foodimage.png" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>

            </div>

            {/* MAIN HOME SECTION */}
            <section>

                <div className="container mt-5 mb-5 conHome">
                    <div className="row">
                        <div className="col-4">
                            <div className="thumbnail">
                                <img className="w-100" src="./images/wok.png" alt="food cooking in pan" />
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="about-inner inner">
                                <h1 className="section-title diplay-1 mt-4" id="homeHeadline">Share the memories and love by sharing your own recipe today!!</h1>
                                <p className="section-subtitle pt-2" id="homeSubtitle"><b>Simple ingredients. Simple steps. Delicious results. </b>
                                    <br />
                                    From.Skratch is here to help you become the next world-class chef! Need some direction in the kitchen?
                                    Want to share those delicious recipes you've been experimenting?
                                    Is it lunch time yet? <em>Bon appétit!</em></p>
                                <Link to="/recipes">
                                    Share A Recipe
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className="container mb-5 mt-5">
                    <div className="row">
                        <div className="col-12">
                            <img src="./images/hombreak.png" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mt-5 mb-5">
                    <div className="row">
                        <div className="col-12 homeSearch">
                            <div className="searchBg">
                                <img src="./images/header2.jpg" />
                            </div>
                            <div className="searchBar">
                                <h1>
                                    Search Popular Recipes
                                </h1>
                                <div className="addon">
                                    <FontAwesomeIcon icon="search" />
                                </div>
                                <input className="control" type="text" placeholder=" Find the perfect recipe..." id="homeSearchBar" onChange={e => setText(e.target.value)} />

                                <div className="searchByContainer">
                                    <select className="drop" onChange={e => setSearchBy(e.target.value)}>
                                    <option value="" disabled selected hidden>Search By:</option>
                                        <option value="select"></option>
                                        <option value="title">title</option>
                                        <option value="ingredient">ingredient</option>
                                        <option value="user">user</option>
                                    </select>


                                    <button type="button" className="btn " id="submitButton">
                                        <Link to={`/results/${searchBy}/${text}`}>
                                            Search
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    );
};

export default Home;