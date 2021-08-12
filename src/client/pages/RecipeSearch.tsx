import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

const RecipeSearch: React.FC<SearchProps> = (props) =>
{
    document.documentElement.style.setProperty("--main-color", "#ffffff");
    document.documentElement.style.setProperty("--second-color", "#ffffff");
    document.documentElement.style.setProperty("--navtext-color", "#ffffff");
    document.documentElement.style.setProperty("--navtextsec-color", "#31cc7f");

    const [recipes, setRecipes] = useState([]);

    useEffect(() =>
    {
        fetch('http://localhost:3000/api/recipes')
            .then(res => res.json())
            .then(recipes => setRecipes(recipes))
    }, []);

    return (
        <>
            <div id="recipes" className="results bgColor"></div>

            <div className="container results mb-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <div id="sectionTitle" className="col secTitle text-center">
                            <h1>Recipes</h1>
                            <h6>The best recipes for you, submitted by people just like you!</h6>
                        </div>
                    </div>

                    {/* component start */}
                    {recipes.map(recipe => (
                        <div className="col-4 mb-3" id="recipeCard" key={recipe.id}>
                            <div className="recipeCardWrap zoom">
                                <div className="recipeCardImgWrap">
                                    <img src={recipe.imagelink} className="recipeCardImg" alt={recipe.imagelink} />
                                </div>
                                <div className="card-body mb-1">
                                    <h3>{recipe.title}</h3>

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

                                    <p className="card-text truncate" id="recipeDescription">{recipe.description}</p>
                                    <Link to={`recipes/${recipe.id}`} className='button'>Full Recipe</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* component end */}

                </div>
            </div>
        </>
    )
};

interface SearchProps { }

export default RecipeSearch