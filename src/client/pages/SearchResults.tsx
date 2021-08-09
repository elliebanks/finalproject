import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faStopwatch } from '@fortawesome/free-solid-svg-icons';

const SearchResults: React.FC = () => {
const { text, searchBy }: {text: string, searchBy: string} = useParams()

const [ recipes, setRecipes ] = useState([])

useEffect(() => {
  console.log("useeffect ")
        // console.log(searchBy, text)
        // if(searchBy == "user"){
        //     fetch(`/api/recipes/search-user/${text}`)
        //     .then(res => res.json())
        //     .then(recipes => console.log(recipes))
        // } else if (searchBy == "ingredient"){
        
        fetch(`/api/recipes/search-ing/${text}`)
        .then(res => console.log(res))
        // .then(recipes => console.log(recipes))
    
   

    
}, [])

return (
    <>
    <h1>Searching by {searchBy} for "{text}"</h1>

    {recipes.map(recipe => (
                        <div className="col-4 bg-info" id="recipeCard" key={recipe.id}>
                            <div className="recipeCardWrap">
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
    
    </>
)
}

export default SearchResults