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
    const [images, setImages] = useState('')

    let history = useHistory()

  

    const handleSubmit = () => {
        let recipe = {
            title: title,
            username: username,
            cookTime: `${cookTime} ${timeUnits}`,
            servings: servings,
            description: description,
            images: images
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

    return (
        <>
            <form className="form-card" action="formsubmissions.html" method="GET">
                <div>
                    <label>
                        Title
                        <input type="text" name="Title" onChange={e => setTitle(e.target.value)} />
                    </label>
                </div>

                <div>
                    <label>
                        Username
                        <input type="text" name="Username" onChange={e => setUsername(e.target.value)} />
                    </label>
                </div>

                <div>
                    <label>
                        Cook Time
                        <input type="text" name="Cook Time" onChange={e => setCookTime(e.target.value)} />
                    </label>
                    <select name="Units of time" onChange={e => setTimeUnits(e.target.value)}>
                        <option value="minutes">minutes</option>
                        <option value="hours">hours</option>
                    </select>
                </div>

                <div>
                    <label>
                        Servings
                        <input type="text" name="Servings" />
                    </label>
                </div>

                <div>
                    <label>
                        Description
                        <input type="text" name="Descriptions" />
                    </label>
                </div>

                <div>
                    <label>
                        Ingredient Name
                        <input type="text" name="Ingredients Name" />
                    </label>
                </div>

                <div>
                    <label>
                        Directions
                        <input name="Directions" />
                    </label>
                </div>

                <div>
                    <label>
                        Images
                    <input name="Images" />
                    </label>
                </div>
                <button type="reset">Reset</button>
                <button type="submit" onClick={() => handleSubmit()}>Submit</button>
            </form>
        </>
    )
}

export default SubmitForm