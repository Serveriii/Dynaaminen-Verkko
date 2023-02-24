import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import CocktailHandler from '../components/CocktailHandler';


export default function Drinks() {
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")
  const [alert , setAlert] = useState("")
  
  // This function is used to search for a cocktail, get API data and send it to the handler as props
  function handleSearch () {
    const URL = "https://thecocktaildb.com/api/json/v1/1/search.php?s=" + search
    axios.get(URL)
    .then(response => {
      const results = response.data.drinks
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
      <h1>Search for a cocktail:</h1>
      <input type="text" value={search} onChange={(e => setSearch(e.target.value))} />
      <button onClick={handleSearch} className="btn btn-primary">Search</button>
      <p>{alert}</p>
      {/* Objects from the search results are mapped to the handler which then parses the info */}
      {searchResults.map((drinks) => <CocktailHandler drinks={drinks}/>)} 
      </div>
    )
  }
