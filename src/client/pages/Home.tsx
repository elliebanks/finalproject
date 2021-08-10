import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import "../scss/home.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



const Home = () => {
    const [text, setText] = useState('')
    const [searchBy, setSearchBy] = useState('')
    return (
        <>

            <div className="container">
                <div>
                    <div id="carouselControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="./images/food1.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item item">
                                <img src="./images/food2.jpg" className="d-block w-100" alt="..." />
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
            </div>

            {/* MAIN HOME SECTION */}
            <section className="pt-2" id="homeTileSection">
                <div className="container">
                    <div className="row row--35 align-items-center">
                        <div className="col-lg-5">
                            <div className="about-inner inner">
                                <h1 className="section-title diplay-1">Let's Start Cooking your favorite recipes from.Skratch!</h1>
                                <div className="section-tile-border mt-3"></div>
                                <p className="section-subtitle text-muted pt-2"><b>Simple ingredients. Simple steps. Delicious results. </b>
                                    <br />
                                    From.Skratch is here to help you become the next world-class chef! Need some direction in the kitchen?
                                    Want to share those delicious recipes you've been experimenting?
                                    <br />Is it lunch time yet? <em>Bon appétit!</em></p>
                                <p className="mt-20">
                                    <a href="/recipes" id="shareRecipeBtn" className="btn btn-dark btn-square hover-effect">Share a Recipe! </a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5 ml-5">
                            <div className="thumbnail">
                                <img className="w-100" src="./images/wok.png" alt="food cooking in pan" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="searchBarContainer">
           
                <i className="" id="searchIcon"><FontAwesomeIcon icon={faSearch} /> </i>
                <input className="input-field" type="text" placeholder=" Find the perfect recipe..." id="homeSearchBar" onChange={e => setText(e.target.value)} />
       
                <div className="searchByContainer">
                    <label htmlFor="select">Search by:</label>
                    <select onChange={e => setSearchBy(e.target.value)}>
                        <option value="select"></option>
                        <option value="title">title</option>
                        <option value="ingredient">ingredient</option>
                        <option value="user">user</option>
                    </select>


                    <button type="button" className="btn btn-dark btn-square hover-effect text-muted" id="submitButton">
                        <Link to={`/results/${searchBy}/${text}`}>
                            Search
                        </Link>
                    </button>
                </div>
            </div>



            {/* SEARCH BAR SECTION */}
            <section className="row d-flex justify-content-center" id="bottomImage">
                <div className="">
                    <img className="" style={{ width: '1110px',  opacity: '50%' }} src="./images/food2.jpg" />


                </div>
            </section>



        </>
    );
};

export default Home;