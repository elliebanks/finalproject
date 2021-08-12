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
import RecIng from '../components/RecIng';

const SingleRecipe: React.FC<RecipeProps> = (props) =>
{

    document.documentElement.style.setProperty("--main-color", "#ffffff");
    document.documentElement.style.setProperty("--second-color", "#ffffff");
    document.documentElement.style.setProperty("--navtext-color", "#ffffff");
    document.documentElement.style.setProperty("--navtextsec-color", "#31cc7f");

    return (

        <>
            <div id="backDiv" className="bgColor"></div>

            <div className="container mb-5">
                <div className="row">
                    <div className="col-8 leftColumn recipe">
                        <section>
                            <RecBody />

                            <ul className="ingList">
                                <RecIng />
                            </ul>
                        </section>
                    </div>
                    <div className="col-4 rightColumn">
                        <RecImage />
                    </div>
                </div>
            </div>
        </>
    )
}

interface RecipeProps
{
    // name: string;
    // amount: string;
}

export default SingleRecipe;



