import React from 'react';
import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useEffect } from 'react';
import recipes from '../../server/db/recipes';
import { isConstructorDeclaration } from 'typescript';
import RecImage from './RecImage';
import RecBody from './RecBody';

const SingleRecipe: React.FC<RecipeProps> = (props) =>
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
            <div id="backDiv" className="bgColor"></div>

            <div className="container">
                <div className="row">
                    <div className="col-8 leftColumn">
                        <RecBody />
                    </div>
                    <div className="col-4 rightColumn">
                        <RecImage />
                    </div>

                </div>
            </div>
        </>
    )
}

interface RecipeProps { }

export default SingleRecipe;



