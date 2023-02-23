import React, {useState, useEffect} from 'react'
import uuid from 'react-uuid'

import img from '../images/cocktail.jpg'

export default function CocktailHandler(props) {
    const [ingArray, setingArray] = useState([])
    const [amArray, setamArray] = useState([])
    const [drinkName, setdrinkName] = useState("")
    const [image, setImage] = useState("")
    const [video, setVideo] = useState("")
    const [instructions, setInstructions] = useState("")
    const [loading, setLoading] = useState(false)
    const [videoVisible, setVideoVisible] = useState(false)



    useEffect(() => {

    let array1 = []
    let array2 = []
        
    setLoading(true);
    for (const [key, value] of Object.entries(props.drinks)) {
        if (key.includes("strIngredient") && value !== null && value !== "") {  
            array1.push(value)
            setingArray(array1)
        }
        if (key.includes("strMeasure") && value !== null && value !== " ") {
            array2.push(value)
            setamArray(array2)
        }
        if (key === "strInstructions") {
            setInstructions(value)
        }
        if (key === "strDrink") {
            setdrinkName(value)
        }
        if (key === "strDrinkThumb") {
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
        <h3>{drinkName}</h3> 
        <div className='recipe-container'>
                <div>
                    <table>
                        <td className='ingredient-container'>
                            {ingArray.map(item =><tr key={uuid()}>{item}</tr>)}
                        </td>
                        <td className='amount-container'>
                            {amArray.map(item =><tr key={uuid()}>{item}</tr>)}
                        </td>
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
