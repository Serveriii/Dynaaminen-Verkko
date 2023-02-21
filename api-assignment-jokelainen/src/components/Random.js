import React, { useState } from 'react'
import axios from 'axios'


const URL2 = "https://themealdb.com/api/json/v1/1/random.php"

let ingredientsArray = []
let amountArray = []

export default function Random() {
    const [loading, setLoading] = useState(false)
    const [name , setName] = useState("")
    const [ingredients, setIngredients] = useState([])
    const [instructions, setInstructions] = useState("")
    const [image, setImage] = useState("Image not found")
    const [amounts, setAmounts] = useState([])
    const [video, setVideo] = useState("")


    setLoading(true);
    axios.get(URL2)
    .then(res => {
      const recipe = res.data.meals[0]
      setName(recipe.strMeal)
      setImage(recipe.strMealThumb)
      setVideo(recipe.strYoutube)
      for (const [key, value] of Object.entries(recipe)) {
        if (key.includes("strIngredient") && value !== null && value !== "") {    
         ingredientsArray.push(value)
        }
        if (key.includes("strMeasure") && value !== null && value !== "") {
          amountArray.push(value)
        }
        setIngredients(ingredientsArray)
        setAmounts(amountArray)
        setInstructions(recipe.strInstructions)
      }
      setLoading(false)
    })

    return (
        <button onClick={Random}>Random</button>
    )
}