import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";


let Home = () => {
    const [text, setText] = useState('')
    const [searchBy, setSearchBy] = useState('')
    return (
        <>
test
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

                        <input className="" type="text" placeholder="Find the perfect recipe..." id="homeSearchBar" onChange={e => setText(e.target.value)}/>
                        {/* <div className="col" id="submitRecipe"> */}

                        <label htmlFor="select">Search by:</label>
                        <select onChange={e => setSearchBy(e.target.value)}>
                            <option value="recipe">recipe</option>
                            <option value="ingredient">ingredient</option>
                            <option value="user">user</option>
                        </select>

                        <button type="button" id="submitButton">
                        <Link to={`/results/${searchBy}/${text}`}>
                            Search
                        </Link>
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

                <div className="col-md-4 mt-4">
                    <div className="card" style={{backgroundColor: "#0091ea", width: "18rem"}}>(Recipe Title)
                        <img src="..." className="card-img-top" alt="...">

                        </img>
                        <div className="card-body">
                            <p className="card-text">(Example Text)</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mt-4">
                    <div className="card" style={{backgroundColor: "#0091ea", width: "18rem"}}>(Recipe Title)
                        <img src="..." className="card-img-top" alt="...">
                            
                        </img>
                        <div className="card-body">
                            <p className="card-text">(Example Text)</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mt-4">
                    <div className="card" style={{backgroundColor: "#0091ea", width: "18rem"}}>(Recipe Title)
                        <img src="..." className="card-img-top" alt="...">
                            
                        </img>
                        <div className="card-body">
                            <p className="card-text">(Example Text)</p>
                        </div>
                    </div>


                </div>
                <div className="col-md-12 mt-4">
                    
                </div>
                <div className="col-md-3 mt-4">
                    
                </div>
                <div className="col-md-3 mt-4">
                    
                </div>
                <div className="col-md-3 mt-4">
                    
                </div>
                <div className="col-md-12 mt-4">
                    
                </div>
            </div>
        </>
    );
};

export default Home;