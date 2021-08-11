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
            .then(rec => setRecipe(rec.recipe))
    }, []);


    console.log(rec);

    return (

        <>
            {rec.map((r, index) => (
                <div className="secConHead">
                    {/* inset imagelink component here */}
                    <img className="aboutHeadImg" src={r.imagelink} alt={r.imagelink} />
                </div>
            ))}
        </>

    )
}

interface RecipeProps {  }

export default RecImage;



