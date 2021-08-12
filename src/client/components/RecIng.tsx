import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RecIng: React.FC<RecIngProps> = (props) =>
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

    return (

        <>
            {rec.map((r, index) =>
            {
                return (
                    <>
                        <li key={index}><FontAwesomeIcon icon="check-circle" /> {r.amount} {r.name}</li>
                    </>
                )
            })}
        </>

    )
}

interface RecIngProps { }

export default RecIng;



