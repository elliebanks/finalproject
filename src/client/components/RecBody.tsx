import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RecBody: React.FC<RecipeProps> = (props) =>
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

    return (

        <>
            {rec.map((r) => (
                <>
                    <div id="sectionTitle" className="secHeadTitle">
                        <h1>{r.title}</h1>
                        <h6>Static tagline with <span className="from">from.</span><span className="skratch">skratch</span> logo included.</h6>
                    </div>
                    <div className="secContent">
                        <h3>
                            <FontAwesomeIcon icon="pencil-alt" /> Description:
                        </h3>
                        <p>
                            {r.description}
                        </p>
                        <h3>
                            <FontAwesomeIcon icon="stopwatch" />CookTime</h3>
                        <p>
                            {r.cooktime}
                        </p>
                        <h3>
                            <FontAwesomeIcon icon="users" /> Servings:
                        </h3>
                        <p>
                            {r.servings}
                        </p>
                        <h3>
                            <FontAwesomeIcon icon="clipboard-list" /> Directions:
                        </h3>
                        <p>
                            {r.directions}
                        </p>
                        <h3>
                            <FontAwesomeIcon icon="balance-scale" />  Ingredients:
                        </h3>

                    </div>
                </>
            ))}
        </>

    )
}

interface RecipeProps { }

export default RecBody;



