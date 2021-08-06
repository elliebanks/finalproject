import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const SearchResults: React.FC = () => {
const { text, searchBy }: {text: string, searchBy: string} = useParams()

const [ recipes, setRecipes ] = useState([])

useEffect(() => {
    (async () => {
        console.log(searchBy, text)
//         if(searchBy == "user"){
//             let res = await fetch(`/api/recipes/search-user/${text}`)
//             let recipes = await res.json()
//             setRecipes(recipes)
//         } else if (searchBy == "ingredient"){
//         console.log(typeof searchBy, searchBy)
//             // let res = await fetch(`/api/recipes/search-ingname/${text}`)
//             // let recipes = await res.json()
//             // setRecipes(recipes)
//         } else {
//             let res = await fetch(`/api/recipes/${text}`)
//             let recipes = await res.json()
//             setRecipes(recipes)
//         }
// console.log(recipes)
    })
    
})

return (
    <>
    <h1>Searching by {searchBy} for "{text}"</h1>
    </>
)
}

export default SearchResults