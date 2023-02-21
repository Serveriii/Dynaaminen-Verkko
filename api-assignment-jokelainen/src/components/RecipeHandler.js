import React, {useEffect, useState} from 'react'



export default function RecipeHandler(props) {
    const [ingArray, setingArray] = useState([])
    const [amArray, setamArray] = useState([])

    let ingredientsArray = []
    let amountArray = []

    useEffect(() => {
    for (const [key, value] of Object.entries(props.meals)) {
        if (key.includes("strIngredient") && value !== null && value !== "") {    
         ingredientsArray.push(value)
         setingArray(ingredientsArray)
        }
        if (key.includes("strMeasure") && value !== null && value !== "") {
          amountArray.push(value)
          setamArray(amountArray)
        }
    }
}, [])
    return (
        <div>
            <p>{props.meals.strMeal}</p>
            <p>{amArray.map(
                (am, index) => <p key={index}>{am} {ingArray[index]}</p>
            )}</p>
        </div>
    )
}
