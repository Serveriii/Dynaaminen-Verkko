import React, {useEffect, useState} from 'react'
import uuid from 'react-uuid'

import img from '../images/vegetables.jpg'

export default function RecipeHandler(props) {
    const [ingArray, setingArray] = useState([])
    const [amArray, setamArray] = useState([])
    const [mealName, setmealName] = useState("")
    const [image, setImage] = useState("")
    const [video, setVideo] = useState("")
    const [instructions, setInstructions] = useState("")
    const [loading, setLoading] = useState(false)
    const [videoVisible, setVideoVisible] = useState(false)



    useEffect(() => {

    let array1 = []
    let array2 = []
        
    setLoading(true);
    for (const [key, value] of Object.entries(props.meals)) {
        if (key.includes("strIngredient") && value !== null && value !== "") {  
            array1.push(value)
            setingArray(array1)
        }
        if (key.includes("strMeasure") && value !== null && value !== "" && value !== " ") {
            array2.push(value)
            setamArray(array2)
        }
        if (key === "strInstructions") {
            setInstructions(value)
        }
        if (key === "strMeal") {
            setmealName(value)
        }
        if (key === "strMealThumb") {
            setImage(value)
        }
        if (key === "strYoutube") {
            setVideo(value)
            setVideoVisible(true)
        }
        setLoading(false)
}
}, [props])

    if (loading === true) {
        <p>Loading...</p>
    } else {
    return (
    <div>
        <h3>{mealName}</h3> 
        <div className='recipe-container'>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td className='ingredient-container'>
                                    {ingArray.map(item =><p key={uuid()}>{item}</p>)}
                                </td>
                                <td className='amount-container'>
                                    {amArray.map(item =><p key={uuid()}>{item}</p>)}
                                </td>
                            </tr>

                        </tbody>

                    </table>
                    
                </div>
                <div className='instructions-container'>
                    <p>{instructions}</p>
                    <a href={video}><button className='btn btn-secondary' style={{display : videoVisible ? "block" : "none"}}>Tutorial video(Youtube)</button></a>   
                </div>
                <img src={image} onError = {()=>setImage(img)}/>
        </div>
    </div>
    )
    }
}
