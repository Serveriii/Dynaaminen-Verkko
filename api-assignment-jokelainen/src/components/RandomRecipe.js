import React, { useState, useEffect } from 'react'
import axios from 'axios'

import img from '../vegetables.jpg'

const URL2 = "https://themealdb.com/api/json/v1/1/random.php"

export default function RandomRecipe() {
    const [name , setName] = useState("")
    const [ingredients, setIngredients] = useState([])
    const [instructions, setInstructions] = useState("")
    const [image, setImage] = useState("")
    const [amounts, setAmounts] = useState([])
    const [video, setVideo] = useState("")
    const [loading, setLoading] = useState(false)
    const [videoVisible, setVideoVisible] = useState(false)

    let ingredientsArray = []
    let amountArray = []

  function getRecipe() {
    setLoading(true);
    axios.get(URL2)
    .then(res => {
      const recipe = res.data.meals[0]
      setName(recipe.strMeal)
      setImage(recipe.strMealThumb)
      setVideo(recipe.strYoutube)
      setVideoVisible(true)
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
  }
    
    if (loading === true) {
        return (
          <p>Loading....</p>
        )
      } else {
    return (
        <div className="random-container">
          <button onClick={getRecipe} className="btn btn-primary">Click here for random recipe!</button>
          
          <h3>{name}</h3>
          <img src={image} onError = {() => setImage(img)} />
          <button className='btn btn-secondary' style={{display : videoVisible ? "block" : "none"}}><a href={video}>Tutorial video(Youtube)</a></button>
          <div className='recipe-container'>
          <table>
                    <td className='ingredient-container'>
                        {ingredients.map(item => <tr className='ingredient'>{item}</tr> )}
                    </td>
                    <td className='amount-container'>
                        {amounts.map(item => <tr className='amount'>{item}</tr> )}
                    </td>
                </table>
            
            
          </div>
          <p className='instruction'>{instructions}</p>
        </div>
      );
  }
}