import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import '../scss/form'

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
      let newIngredient = {ingredientsName, ingredientsAmount}
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
    ingredients.map(ing => {return(
        <div>
        <h6>{ing.ingredientName}</h6>
        <h6>{ing.ingredientAmount}</h6>
        </div>
    )})
  }

     // Set up a button that says add ingredient which will add in another set of ingredient name and amount

    return (
        <>
            <form className="form-card" action="formsubmissions.html" method="GET">
                <div>
                    <label>
                        Title
                        <input value={title} placeholder="ex. Mom's Chicken Fingers" type="text" name="Title" onChange={e => setTitle(e.target.value)} />
                    </label>
                </div>

                <div>
                    <label>
                        Username
                        <input value={username} placeholder="ex. Daffy Duck" type="text" name="Username" onChange={e => setUsername(e.target.value)} />
                    </label>
                </div>

                <div>
                    <label>
                        Cook Time
                        <input value={cookTime} placeholder="ex. 23 minutes" type="text" name="Cook Time" onChange={e => setCookTime(e.target.value)} />
                    </label>
                    <select name="Units of time" onChange={e => setTimeUnits(e.target.value)}>
                        <option value="minutes">minutes</option>
                        <option value="hours">hours</option>
                    </select>
                </div>

                <div>
                    <label>
                        Servings
                        <input value={servings} placeholder="ex. Will feed 8 people" type="text" name="Servings" onChange={e => setTitle(e.target.value)} />
                    </label>
                </div>

                <div>
                    <label>
                        Description
                        <input value={description} placeholder="ex. Mouth watering chicken with cheese stuffed inside" type="text" name="Descriptions" onChange={e => setDescription(e.target.value)}/>
                    </label>
                </div>

                <div>
               {showIngredients()}
                    <label>
                        Ingredient Name
                        <input value={ingredientsName} placeholder="ex. eggs, bacon, flour, braed" type="text" name="Ingredients Name" onChange={e => setIngredientsName(e.target.value)}/>
                    </label>
                </div>

                <div>
                    <label>
                        Ingredient Amount
                        <input value={ingredientsAmount} type="text" name="Ingredients Amount" onChange={e => setIngredientsAmount(e.target.value)}/>
                    </label>
                </div>
                <div> <button className="btn btn-primary rounded" onClick={handleAddIngredient}>Add ingredient</button></div>
                <div>
                    <label>
                        Directions
                        <input value={directions} placeholder="ex. Step 1: add water to the pot, Step 2: boil the water" name="Directions" onChange={e => setTitle(e.target.value)}/>
                    </label>
                </div>

                <div>
                    <label>
                        Imagelink
                    <input value={title} placeholder="ex." name="ImageLink" onChange={e => setImageLink(e.target.value)}/>
                    </label>
                </div>
                <button type="reset">Reset</button>
                <button type="submit" onClick={() => handleSubmit()}>Submit</button>
            </form>
        </>
    )
}

export default SubmitForm