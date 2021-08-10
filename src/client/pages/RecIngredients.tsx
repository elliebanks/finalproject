import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const RecImage: React.FC<RecipeProps> = (props) =>
{
    const { id } = useParams<{ id: string }>();

    const [rec, setRecipe] = useState([{}]);
    // const [user, setUser] = useState([] as any[]);

    useEffect(() =>
    {
        fetch(`http://localhost:3000/api/recipes/${id}`)
            .then(res => res.json())
            .then(rec => setRecipe(rec.ingredients))
    }, []);


    console.log(rec);

    return (

        <>
            
        </>

    )
}

interface RecipeProps {  }

export default RecImage;



