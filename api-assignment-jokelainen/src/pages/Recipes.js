import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import RecipeHandler from '../components/RecipeHandler';
import RandomRecipe from '../components/RandomRecipe';


export default function Recipes() {
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")
  const [alert , setAlert] = useState("")
  

  const handleSearch = (e) => {
    setSearch(e.target.value)
    const URL = "https://themealdb.com/api/json/v1/1/search.php?s=" + search
    axios.get(URL)
    .then(response => {
      const results = response.data.meals
      if (results === null) {
        setSearchResults([])
        setAlert("No results found")
      } else {
      setSearchResults(results)
      setAlert("")
      }
      console.log(results);
     }) .catch(error => {
        alert("No results found")
     })
  }

    return (
      <div>
      <h1>Recipe of the day</h1>
      <p>Search for a recipe:</p>
      <input type="text" value={search} onChange={handleSearch} />
      <p>{alert}</p>
      <RandomRecipe   />
      {searchResults.map((meals) => <RecipeHandler meals={meals} />)}
      
      </div>
    )
  }
