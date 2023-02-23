import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import RecipeHandler from '../components/RecipeHandler';


export default function Recipes() {
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")
  const [alert , setAlert] = useState("")
  

  function handleSearch () {
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
     })
  }

    return (
      <div>
      <h1>Search for a recipe:</h1>
      <input type="text" value={search} onChange={(e => setSearch(e.target.value))} />
      <button onClick={handleSearch} className="btn btn-primary">Search</button>
      <p>{alert}</p>
      {searchResults.map((meals) => <RecipeHandler meals={meals} />)} 
      </div>
    )
  }
