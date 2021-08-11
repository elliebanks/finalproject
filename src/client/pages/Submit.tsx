import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import "../scss/submit.scss";

const SubmitForm: React.FC = (props) => {
    const [title, setTitle] = useState('')
    const [username, setUsername] = useState('')
    const [cookTime, setCookTime] = useState('')
    const [timeUnits, setTimeUnits] = useState(null)
    const [servings, setServings] = useState('')
    const [description, setDescription] = useState('')
    const [imagelink, setImageLink] = useState('')
    const [directions, setDirections] = useState('')
    const [ingredientsName, setIngredientsName] = useState('');
    const [ingredientsAmount, setIngredientsAmount] = useState('');
    const [ingredients, setIngredients] = useState([])

    let history = useHistory()

    const handleAddIngredient = (e) => {
        e.preventDefault()
        let newIngredient = { ingredientsName, ingredientsAmount }
        setIngredients([...ingredients, newIngredient])
    }

    const handleSubmit = () => {
        let recipe = {
            title: title,
            username: username,
            cookTime: `${cookTime} ${timeUnits}`,
            servings: servings,
            description: description,
            imagelink: imagelink
        }

        const reqOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(recipe)
        }

        fetch('/api/recipes', reqOptions)
            .then(response => response.json())
        history.push("/")
    }

    const showIngredients = () => {
        ingredients.map(ing => {
            return (
                <div>
                    <h6>{ing.ingredientName}</h6>
                    <h6>{ing.ingredientAmount}</h6>
                </div>
            )
        })
    }

    // Set up a button that says add ingredient which will add in another set of ingredient name and amount

    return (
        <>
            <div id="backDiv" className="bgColor"></div>

            <div className="container">
                <div className="row">
                    <div className="col-8 leftColumn">
                        <section>
                            <div id="sectionTitle" className="secHeadTitle">
                                <h1>Submit Your Recipes</h1>
                                <h6>Submit your recipes to the <span className="from">from.</span><span className="skratch">skratch</span> database.</h6>
                            </div>
                            <div className="secContent">
                                <h3>
                                    Share your recipes with the world!
                                </h3>
                                <p>At From.Skratch we like to say sharing is caring. From.Skratch was created for food lovers like you and we want your contribution!  Join the community and send us your culinary masterpieces
                                    so that everyone can see what you've got cooking. Simply fill out the form below and submit.
                                    <span className="from ml-2">from.</span><span className="skratch mr-1">skratch</span> makes it easy as pie!
                                    <em> Bon appétit!</em></p>
                            </div>
                        </section>

                        <div className="container">
                            <form id="recipeSubForm" action="formsubmissions.html" method="GET">

                                <div className="col">
                                    <div className="form-group">

                                        <label>
                                            Name
                                            <input className="" value={username} placeholder="Jane Doe" type="text" name="Username" onChange={e => setUsername(e.target.value)} />
                                        </label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label>
                                            Recipe Title
                                            <input className="w-75" value={title} placeholder="Pasta Carbonara" type="text" name="Title" onChange={e => setTitle(e.target.value)} />
                                        </label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label>
                                            Cook Time
                                            <input value={cookTime} placeholder="20" type="text" name="Cook Time" onChange={e => setCookTime(e.target.value)} />
                                        </label>
                                        <select name="Units of time" onChange={e => setTimeUnits(e.target.value)}>
                                            <option value="minutes">minutes</option>
                                            <option value="hours">hours</option>
                                        </select>

                                        <label>
                                            Serving Size
                                            <input value={servings} placeholder="6" type="text" name="Servings" onChange={e => setServings(e.target.value)} />
                                        </label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label>
                                            Description
                                            <textarea value={description} placeholder="Pasta carbonara is one of those simple dinners we should all know how to make. It’s the perfect go-to for a busy weeknight, and it’s also a dish fit for the weekend or even to serve to guests." name="Descriptions" onChange={e => setDescription(e.target.value)} />
                                        </label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        {showIngredients()}
                                        <label>
                                            Ingredient Name
                                            <input value={ingredientsName} placeholder="Garlic" type="text" name="Ingredients Name" onChange={e => setIngredientsName(e.target.value)} />
                                        </label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group d-flex align-items-center">
                                        <label>
                                            Ingredient Amount
                                            <input value={ingredientsAmount} type="text" placeholder="4 cloves" name="Ingredients Amount" onChange={e => setIngredientsAmount(e.target.value)} />
                                        </label>
                                        <button className="btn btn-dark mt-4" id="addIng" onClick={handleAddIngredient}>Add ingredient</button>
                                    </div>
                                </div>
                                <div className="col">

                                    <div className="form-group" >
                                        <label>
                                            Directions
                                            <textarea value={directions} className="text-muted" placeholder="1. Add bacon and 1/2 cup of the water to a large non-stick skillet and bring to a simmer over medium-high heat.       2. Allow to simmer until water evaporates about 6 - 7 minutes, then reduce heat to medium-low and continue to cook until bacon is brown and crisp, about 6 - 8 minutes longer." name="Directions" onChange={e => setDirections(e.target.value)} />
                                        </label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label>
                                            Imagelink
                                            <input value={imagelink} placeholder="ex." name="ImageLink" onChange={e => setImageLink(e.target.value)} />
                                        </label>
                                    </div>
                                </div>
                                <div className="col">
                                <button className="btn btn-dark btn-square" id="formSubmitBtn" type="submit" onClick={() => handleSubmit()}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>



                    <div className="col-4 rightColumn">
                        <div className="secConHead">
                            <img className="aboutHeadImg" src="/images/foodimage.png" alt="image" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SubmitForm;