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
        if (key.includes("strMeasure") && value !== null && value !== " ") {
          amountArray.push(value)
          setamArray(amountArray)
        }
    }
}, [])
    return (
        <div>
            <div className='recipe-container'>
            <div className='name-container'></div>
            <h3>{props.meals.strMeal}</h3>
            <div>
                <table>
                    <td className='ingredient-container'>
                        {ingArray.map(item => <tr className='ingredient'>{item}</tr> )}
                    </td>
                    <td className='amount-container'>
                        {amArray.map(item => <tr className='amount'>{item}</tr> )}
                    </td>
                </table>
            </div>
            <div className='instructions-container'>
                <p>{props.meals.strInstructions}</p>
                </div>
            </div>
        </div>
    )
}
