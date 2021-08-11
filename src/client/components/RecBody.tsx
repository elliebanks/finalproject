import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

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


    console.log(rec);

    return (

        <>
            {rec.map((r, index) => (
                <>
                    <div id="sectionTitle" className="secHeadTitle">
                        <h1>{r.title}</h1>
                        <h6>Static tagline with <span className="from">from.</span><span className="skratch">skratch</span> logo included.</h6>
                    </div>
                    <div className="secContent">
                        <h4>
                            Description:
                        </h4>
                        <p>
                            {r.description}
                        </p>
                        <p>
                            CookTime: {r.cooktime}
                        </p>
                        <p>
                            CookTime: {r.servings}
                        </p>
                        <h4>
                            Directions:
                        </h4>
                        <p>
                            {r.directions}
                        </p>
                        Insert Ingredients List Here
                    </div>
                </>
            ))}
        </>

    )
}

interface RecipeProps { }

export default RecBody;



