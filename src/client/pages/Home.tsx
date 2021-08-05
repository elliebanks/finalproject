import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";


let Home = () => {
    return (
        <>

            <div className="container">
                <div>
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="./images/food1.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="./images/food2.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="./images/food3.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="./images/foodimage.png" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <h1 className="w-50 display-4">Let's Start Cooking your favorite recipes from.skratch!</h1>
                        <h4 className="w-50 display-6">Hungry? Need some direction in the kitchen? Want to share with us? Let's go!</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button className="m-3">Submit a Recipe</button>

                        <FontAwesomeIcon icon={faSearch} />

                        <input className="" type="text" placeholder="Find the perfect recipe..." id="homeSearchBar" />
                        {/* <div className="col" id="submitRecipe"> */}
                        <button type="button" id="submitButton">
                            Search
                        </button>
                        {/* <div> */}

                    </div>
                </div>
            </div>
            <div className="mt-5 container-fluid w-100 d-flex justify-content-center" id="searchBarContainer">
                <div className="row">


                </div>
            </div>

            <div className="col-md-6 mt-4" id="submitRecipe">


            </div>



            <div id="newRecipes" className="row mt-4">

                <div className="col-md-3 mt-4"></div>
                <div className="col-md-3 mt-4"></div>
                <div className="col-md-3 mt-4"></div>
                <div className="col-md-12 mt-4"></div>
                <div className="col-md-3 mt-4"></div>
                <div className="col-md-3 mt-4"></div>
                <div className="col-md-3 mt-4"></div>
                <div className="col-md-12 mt-4"></div>
            </div>
        </>
    );
};

export default Home;