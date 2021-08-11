import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useEffect } from 'react';

const RecipeSearch = () =>
{
    document.documentElement.style.setProperty("--main-color", "#31cc7f");
    document.documentElement.style.setProperty("--second-color", "#196640");
    document.documentElement.style.setProperty("--navtext-color", "#000000");
    document.documentElement.style.setProperty("--navtextsec-color", "#ffffff");

    const [recipes, setRecipes] = useState([]);   

    useEffect(() =>
    {
        fetch('http://localhost:3000/api/recipes')
            .then(res => res.json())
            .then(recipes => setRecipes(recipes))
    }, []);    

    return (

        <>
            <div id="recipes" className="bgColor"></div>

            <div className="container mb-5">
                <div className="row no-gutters-man">
                    <div className="container">
                        <div id="sectionTitle" className="col secTitle text-center">
                            <h1>Recipes</h1>
                            <h6>The best recipes for you, submitted by people just like you!</h6>
                        </div>
                    </div>

                    {/* component start */}

                    <div className="container m-5">
                        <div className="row">
                            {recipes.map(recipe => (
                                <div className="col-4 mb-3" id="recipeCard" key={recipe.id}>
                                    <div className="recipeCardWrap">
                                        <div className="recipeCardImgWrap">
                                            <img src={recipe.imagelink} className="recipeCardImg" alt={recipe.imagelink} />
                                        </div>
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
                                </div>
                            ))};
                        </div>
                    </div>

                    {/* component end */}

                </div>
            </div>

            {/* <div className="container mb-5" id="recipeCardContainer">
                <div className="row d-flex justify-content-center">

                    
                </div>
            </div> */}

        </>






    )
}

export default RecipeSearch;



