import React, {useEffect, useState} from 'react'



export default function RecipeSearch(props, index) {
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
            <p>{amArray}</p>
            <p>{ingArray.strIngredient}</p>
        </div>
    )
}
