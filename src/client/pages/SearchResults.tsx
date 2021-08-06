import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const SearchResults: React.FC = () => {
const { text, searchBy }: {text: string, searchBy: string} = useParams()

const [ recipes, setRecipes ] = useState([])

useEffect(() => {
    (async () => {
        if(searchBy === "user"){
            let res = await fetch(`/api/recipe/search-user/${text}`)
            let recipes = await res.json()
            setRecipes(recipes)
        } else if (searchBy === "ingredient"){
            let res = await fetch(`/api/recipe/search-ingname/${text}`)
            let recipes = await res.json()
            setRecipes(recipes)
        } else {
            let res = await fetch(`/api/recipe/${text}`)
            let recipes = await res.json()
            setRecipes(recipes)
        }

    })
    
})

return (
    <>
    <h1>Searching by {searchBy} for "{text}"</h1>
    </>
)
}

export default SearchResults