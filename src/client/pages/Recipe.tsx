import React from 'react';
import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useEffect } from 'react';
import recipes from '../../server/db/recipes';
import { isConstructorDeclaration } from 'typescript';
import RecImage from '../components/RecImage';
import RecBody from '../components/RecBody';

const SingleRecipe: React.FC<RecipeProps> = (props) =>
{
    const { id } = useParams<{ id: string }>();

    const [rec, setRecipe] = useState<{name: string, amount: string}[]>([]);
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
                        This is where the ing map should below
                        
                    </div>
                    <div className="col-4 rightColumn">
                        <RecImage />
                    </div>
                    {rec.map((r, index) => {
                        return (
                            <>
                                <h2>{r.name}</h2>
                                <h2>{r.amount}</h2>
                            </>
                        )
                    })}                    
                </div>
            </div>
        </>
    )
}

interface RecipeProps { 
    // name: string;
    // amount: string;
 }

export default SingleRecipe;



