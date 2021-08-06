import React from "react";
import "../scss/home.scss";
import { useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faStopwatch } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

    return (
        <>
            {/* CAROUSEL HEADER LANDINGPAGE */}
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
                                    <a href="#" className="btn btn-dark btn-square hover-effect">Share a Recipe! </a>
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


            {/* SEARCH BAR SECTION */}
            <section className="row d-flex justify-content-center" id="searchBarContainer">
                <div className="">
                    <img className="" style={{ width: '100%', opacity: '50%' }} src="./images/food2.jpg" />
                </div>
                <form className="fieldset">
                    <legend>SEARCHBAR PLACEHOLDER WILL GO OVER TOP OF IMAGE</legend>
                </form>
            </section>


        
        </>
    );
};

export default Home;