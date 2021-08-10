import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faStopwatch } from '@fortawesome/free-solid-svg-icons';


const SearchResults: React.FC = () =>
{
    const { text, searchBy }: { text: string, searchBy: string } = useParams()

    const [recipes, setRecipes] = useState([])

    useEffect(() =>
    {




        if (searchBy == "user")
        {
            fetch(`/api/recipes/search-user/${text}`)
                .then(res => res.json())
                .then(recipes => setRecipes(recipes))
        } else if (searchBy == "ingredient")
        {

            fetch(`/api/recipes/search-ing/${text}`)
                .then(res => res.json())
                .then(recipes => setRecipes(recipes))
        } else if (searchBy == "title")
        {
            console.log('Hey');

            fetch(`/api/recipes/search-recipetitle/${text}`)
                .then(res => res.json())
                .then(recipes => setRecipes(recipes))
        }
    }, [])

    return (
        <>
            <div id="backDiv" className="bgColor"></div>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <section>
                            <div id="sectionTitle" className="secHeadTitle">
                                <h1>Submit Your Recipes</h1>
                                <h6>Submit your recipes to the <span className="from">from.</span><span className="skratch">skratch</span> database.</h6>
                            </div>
                            <div className="secContent">
                                <h1>Searching by {searchBy} for "{text}"</h1>
                                <div className="container mb-5">
                                    <div className="row">
                                        {recipes.map(recipe => (
                                            <div className="col-4 bg-info" key={recipe.id}>
                                                <div className="recipeWrap">
                                                    <img src={`${recipe.imagelink}`} className="card-img-top" alt="{recipe.title}" />
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

                            </div>
                        </section>
                    </div>

                </div>
            </div>

        </>
    )
}

export default SearchResults