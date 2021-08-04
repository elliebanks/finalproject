import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faStopwatch } from '@fortawesome/free-solid-svg-icons';

const RecipeSearch = () => {
    const element = <FontAwesomeIcon icon={faUtensils} />
    return (
        <>
            <div>
                <h2>Recipes</h2>
            </div>
            {/* First row of cards */}
            <div className="container mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="card w-25 m-5" id="recipeCard">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body mb-3">
                            <h4>Recipe Tile</h4>
                            {/* <div className="">
                                <span className="d-flex inline" id="servingCookingDetails">
                                    <FontAwesomeIcon icon={faUtensils} />
                                    <p>   Serving Size   </p>
                                    <FontAwesomeIcon icon={faStopwatch} />
                                    <p>   Cooking Time</p></span>
                            </div> */}
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card w-25 m-5" id=" recipeCard">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4>Recipe Title</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
            <br />

            {/* Second row of cards */}
            {/* <div className="container mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="card w-25 m-5" id="recipeCard">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4>Recipe Tile</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card w-25 m-5" id=" recipeCard">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4>Recipe Title</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
            <br />

            {/* Third row of cards */}
            {/* <div className="container mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="card w-25 m-5" id="recipeCard">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4>Recipe Tile</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card w-25 m-5" id=" recipeCard">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4>Recipe Title</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div> */} */
        </>
    )
}

export default RecipeSearch;
