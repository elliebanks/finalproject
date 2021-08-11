import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import '../scss/searchresults.scss';


const SearchResults: React.FC = () => {
    const { text, searchBy }: { text: string, searchBy: string } = useParams()

    const [recipes, setRecipes] = useState([]);

    document.documentElement.style.setProperty("--main-color", "#31cc7f");
    document.documentElement.style.setProperty("--second-color", "#196640");
    document.documentElement.style.setProperty("--navtext-color", "#000000");
    document.documentElement.style.setProperty("--navtextsec-color", "#ffffff");

    useEffect(() => {
        if (searchBy == "user") {
            fetch(`/api/recipes/search-user/${text}`)
                .then(res => res.json())
                .then(recipes => setRecipes(recipes))
        } else if (searchBy == "ingredient") {

            fetch(`/api/recipes/search-ing/${text}`)
                .then(res => res.json())
                .then(recipes => setRecipes(recipes))
        } else if (searchBy == "title") {
            console.log('Hey');

            fetch(`/api/recipes/search-recipetitle/${text}`)
                .then(res => res.json())
                .then(recipes => setRecipes(recipes))
        }
    }, [])

    return (
        <>
           <div className="container" id="searchByHeader"> <h1>Searching by {searchBy} for "{text}"</h1></div>

            {recipes.map(recipe => (
                <div className="container" id="recipeSearchResultsContainer">
                    <div className="col-4 bg-info" id="recipeBody" key={recipe.id}>
                        <div className="recipeWrap">
                            <img src={recipe.imagelink} className="recipeCardImg" alt="{recipe.imagelink}" />
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
                                <button className="btn btn-dark btn-square">Full Recipe</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))};

        </>
    )
}

export default SearchResults;
