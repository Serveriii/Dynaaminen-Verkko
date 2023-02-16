import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

import img from './vegetables.jpg'
import Videobutton from './Videobutton';



const URL = "https://themealdb.com/api/json/v1/1/search.php?s="
const URL2 = "https://themealdb.com/api/json/v1/1/random.php"
function App() {
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")
  const [name , setName] = useState("")
  const [ingredients, setIngredients] = useState([])
  const [instructions, setInstructions] = useState("")
  const [image, setImage] = useState("Image not found")
  const [amounts, setAmounts] = useState([])
  const [video, setVideo] = useState("")
  
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
    <div style={{margin: 30}} className="app-container">
      <h1>Recipe of the day</h1>
      {/* <input type="text" value={search} onChange={e => setSearch(e.target.value) } /> */}
      <button onClick={getRecipe}>Click here for recipe!</button>
      <h3>{name}</h3>
      <div className='recipe-container'>
        <div className='ingredient-container'>
        {
          ingredients.map(item => <p className='ingredient'>{item}</p> )
        }
        </div>
        <div className='amount-container'>
        {
          amounts.map(item => <p className='amount'>{item}</p> )
        }
        </div>
        <img src={image} onError = {() => setImage(img)} />
        <button className='button'><a href={video}>Tutorial video(Youtube)</a></button>
      </div>
      <p className='instruction'>{instructions}</p>
    </div>
  );
  }
}

export default App;
