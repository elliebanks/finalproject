import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useEffect } from 'react';

const RecipeSearch = () => {


    // const element = <FontAwesomeIcon icon={faUtensils} />

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/recipes')
            .then(res => res.json())
            .then(recipes => setRecipes(recipes))
    }, []);

    return (
        <>
            <div>
                <h2>Recipes</h2>
            </div>
            {/* First row of cards */}
            <div className="container mb-5">
                <div className="row d-flex justify-content-center">
                    {recipes.map(recipe => (
                        <div key={recipe.id} className="card w-25 m-5" id="recipeCard">
                            <img src="https://diestelturkey.com/wp-content/uploads/2019/04/DFR-Italian-Hot-Turkey-Sausage-Link-lifestyle-600x600.jpg" className="card-img-top" alt={recipe.title} />
                            <div className="card-body mb-1">
                                <h4>{recipe.title}</h4>

                                    <div className="" id="servingDetails">
                                        <span className="d-flex inline">
                                            <FontAwesomeIcon className="m-1" icon={faUtensils} />
                                                <p className="servingSize"> Serving Size:  {recipe.servings}   </p> </span>
                                    </div>
                                    <div className="" id="cookingTimeDetails">
                                        <span className="d-flex inline">
                                            <FontAwesomeIcon className="m-1" icon={faStopwatch} />
                                            <p> Cooking Time:  {recipe.cooktime}</p>
                                        </span>
                                    </div>

                                <p className="card-text d-flex justify-content-center" id="recipeDescription">{recipe.description}</p>
                                <button>Link Placeholder</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>

            
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
            <br />*/

    )
}

export default RecipeSearch;
