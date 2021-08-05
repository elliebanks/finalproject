import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useEffect } from 'react';

const RecipeSearch = () => {

    const element = <FontAwesomeIcon icon={faUtensils} />

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/recipes')
            .then(res => res.json())
            .then(recipes => setRecipes(recipes))
    }, []);

    return (

        <>
            <div>
                <h2 className="d-flex justify-content-center">Recipes</h2>
            </div>
            {/* First row of cards */}
            <div className="container mb-5" id="recipeCardContainer">
                <div className="row d-flex justify-content-center">

                    {recipes.map(recipe => (
                        <div className="col-sm-4 card w-25 m-5" id="recipeCard" key={recipe.id}>
                            <img src="https://diestelturkey.com/wp-content/uploads/2019/04/DFR-Italian-Hot-Turkey-Sausage-Link-lifestyle-600x600.jpg" className="card-img-top" alt="{recipe.title}" />
                            <div className="card-body mb-1">
                                <h4>{recipe.title}</h4>

                                <div className="" id="servingDetails">
                                    <span className="d-flex inline">
                                        <FontAwesomeIcon className="m-1" icon={faUtensils} />
                                        <p className="servingSize"> Serving Size:  {recipe.servings}  </p> </span>
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






    )
}

export default RecipeSearch;



