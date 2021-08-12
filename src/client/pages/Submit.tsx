import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../scss/submit.scss";

const SubmitForm: React.FC = (props) =>
{
    document.documentElement.style.setProperty("--main-color", "#ffffff");
    document.documentElement.style.setProperty("--second-color", "#ffffff");
    document.documentElement.style.setProperty("--navtext-color", "#ffffff");
    document.documentElement.style.setProperty("--navtextsec-color", "#31cc7f");
    
    const [title, setTitle] = useState("");
    const [username, setUsername] = useState("");
    const [cookTime, setCookTime] = useState("");
    const [timeUnits, setTimeUnits] = useState("minutes");
    const [servings, setServings] = useState("");
    const [description, setDescription] = useState("");
    const [imagelink, setImageLink] = useState("");
    const [directions, setDirections] = useState("");
    const [ingredientsName, setIngredientsName] = useState("");
    const [ingredientsAmount, setIngredientsAmount] = useState("");
    const [ingredients, setIngredients] = useState([]);

    let history = useHistory();

    const handleAddIngredient = (e) =>
    {
        e.preventDefault();
        let newIngredient = { ingredientsName, ingredientsAmount };
        setIngredients([...ingredients, newIngredient]);
    };

    const handleClear = () => {
      
        setUsername('')
        setTitle('')
        setCookTime('')
        setTimeUnits('minutes')
        setServings('')
        setDescription('')
        setImageLink('')
        setDirections('')
        setIngredients([])
        setIngredientsName('')
        setIngredientsAmount('')
    }
    const handleSubmit = () =>
    {
        let recipe = {
            username: username,
            title: title,
            cooktime: `${cookTime} ${timeUnits}`,
            directions: directions,
            servings: servings,
            description: description,
            imagelink: imagelink,
            ingredients: ingredients
            // name: ingredientsName,
            // amount: ingredientsAmount
        };

        const reqOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(recipe),
        };

        fetch("/api/recipes", reqOptions).then((response) => response.json());
        history.push("/recipes");
    };


    const showIngredients = () =>
    {
        ingredients.map((ing) =>
        {
            return (
                <div>
                    <h6>{ing.ingredientsName}</h6>
                    <h6>{ing.ingredientsAmount}</h6>
                </div>
            );
        });
    };

    // Set up a button that says add ingredient which will add in another set of ingredient name and amount

    return (
        <>
            <div id="backDiv" className="bgColor"></div>

            <div className="container">
                <div className="row">
                    <div className="col-8 leftColumn">
                        <section className="mb-5">
                            <div id="sectionTitle" className="secHeadTitle">
                                <h1>Submit Your Recipes</h1>
                                <h6>
                                    Submit your recipes to the <span className="from">from.</span>
                                    <span className="skratch">skratch</span> database.
                                </h6>
                            </div>
                            <div className="secContent">
                                <h3>Share your recipes with the world!</h3>
                                <p>
                                    At From.Skratch we like to say sharing is caring. From.Skratch
                                    was created for food lovers like you and we want your
                                    contribution! Join the community and send us your culinary
                                    masterpieces so that everyone can see what you've got cooking.
                                    Simply fill out the form below and submit.
                                    <span className="from ml-2">from.</span>
                                    <span className="skratch mr-1">skratch</span> makes it easy as
                                    pie!
                                    <em> Bon appétit!</em>
                                </p>
                            </div>
                        </section>

                        <section>
                            <div className="secContent">
                                <h3>
                                    Submit Your Recipe:
                                </h3>
                            </div>
                            <form id="recipeSubForm" className="contact form" action="formsubmissions.html" method="GET">
                                <div className="group">
                                    <div className="addon">
                                        <FontAwesomeIcon icon="user" />
                                    </div>
                                    <input className="control" value={username} placeholder="Your name | ex: Jane Doe" type="text" name="Username" onChange={e => setUsername(e.target.value)} />
                                </div>

                                <div className="group">
                                    <div className="addon">
                                        <FontAwesomeIcon icon="signature" />
                                    </div>
                                    <input className="control" value={title} placeholder="Recipe Title | ex: Pasta Carbonara" type="text" name="Title" onChange={e => setTitle(e.target.value)} />
                                </div>

                                <div className="group">
                                    <div className="addon">
                                        <FontAwesomeIcon icon="stopwatch" />
                                    </div>
                                    <input className="control2" value={cookTime} placeholder="Cook Time | ex: 20" type="text" name="Cook Time" onChange={e => setCookTime(e.target.value)} />

                                    <select className="drop" name="Units of time" onChange={e => setTimeUnits(e.target.value)}>
                                        <option value="minutes">minutes</option>
                                        <option value="hours">hours</option>
                                    </select>
                                </div>

                                <div className="group">
                                    <div className="addon">
                                        <FontAwesomeIcon icon="users" />
                                    </div>
                                    <input className="control2" value={servings} placeholder="Servings | ex: 6" type="text" name="Servings" onChange={e => setServings(e.target.value)} />
                                </div>

                                <div className="group">
                                    <div className="addon">
                                        <FontAwesomeIcon icon="pencil-alt" />
                                    </div>
                                    <textarea className="text" value={description} placeholder="Enter Description | ex. below&#10;Pasta carbonara is one of those simple dinners we should all know how to make. It’s the perfect go-to for a busy weeknight, and it’s also a dish fit for the weekend or even to serve to guests." name="Descriptions" onChange={e => setDescription(e.target.value)} />
                                </div>

                                <div className="group">
                                    <div className="addon">
                                        <FontAwesomeIcon icon="carrot" />
                                    </div>
                                    <input
                                        className="control3"
                                        value={ingredientsName}
                                        placeholder="Ingredient Name | ex: Garlic"
                                        type="text"
                                        name="Ingredients Name"
                                        onChange={(e) => setIngredientsName(e.target.value)}
                                    />
                                </div>

                                <div className="group">
                                    <div className="addon">
                                        <FontAwesomeIcon icon="balance-scale" />
                                    </div>
                                    <input
                                        className="control3"
                                        value={ingredientsAmount}
                                        type="text"
                                        placeholder="Amount | ex: 4 cloves"
                                        name="Ingredients Amount"
                                        onChange={(e) => setIngredientsAmount(e.target.value)}
                                    />

                                    <button
                                        className="button"
                                        id="addIng"
                                        onClick={handleAddIngredient}
                                    >
                                        Add Ingredient
                                    </button>
                                </div>

                                <div className="group">
                                    <ul className="ingredients">
                                        {ingredients.map((ing) =>
                                        {
                                            return (
                                                <>
                                                    <li>{ing.ingredientsName} | {ing.ingredientsAmount}</li>
                                                </>
                                            );
                                        })}
                                    </ul>
                                </div>

                                <div className="group">
                                    <div className="addon">
                                        <FontAwesomeIcon icon="clipboard-list" />
                                    </div>
                                    <textarea
                                        value={directions}
                                        className="text"
                                        placeholder="Enter Directions | ex: below&#10;1. Add bacon and 1/2 cup of the water to a large non-stick skillet and bring to a simmer over medium-high heat.&#10;2. Allow to simmer until water evaporates about 6 - 7 minutes, then reduce heat to medium-low and continue to cook until bacon is brown and crisp, about 6 - 8 minutes longer."
                                        name="Directions"
                                        onChange={(e) => setDirections(e.target.value)}
                                    />
                                </div>

                                <div className="group">
                                    <div className="addon">
                                        <FontAwesomeIcon icon="camera-retro" />
                                    </div>
                                    <input
                                        className="control"
                                        value={imagelink}
                                        placeholder="Image Link | ex: http://www.example.com/example_image.jpg"
                                        name="ImageLink"
                                        onChange={(e) => setImageLink(e.target.value)}
                                    />
                                </div>

                                <div className="group">
                                    <button
                                        className="button clear m-0"
                                        id="formSubmitBtn"
                                        type="button"
                                    onClick={() => handleClear()}
                                    >
                                        Clear Form
                                    </button>
                                    <button
                                        className="button"
                                        id="formSubmitBtn"
                                        type="submit"
                                        onClick={() => handleSubmit()}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </section>                        
                    </div>

                    <div className="col-4 rightColumn">
                        <div className="secConHead">
                            <img
                                className="aboutHeadImg"
                                src="/images/foodimage.png"
                                alt="image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubmitForm;