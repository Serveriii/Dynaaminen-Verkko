import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Recipes() {

    const URL = "https://www.themealdb.com/api/json/v1/1/random.php"
    

    useEffect(() => {
      axios.get(URL)
      .then(res => {
        setData(res.data);
        setName(res.data.meals[0].strMeal);
      })
      .catch(err => {
        console.log(err);
      });
  },[]);

  return (
    <p>{name}</p>
    )
}
