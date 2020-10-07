import React from 'react'

export const RecipeTabloid = ({label,ingredients,image,url}) => {
    return (
        
            <div className='recipe_tabloid'>
            <a href={url}><h2>{label}</h2></a>
            <ul>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <a href={url}><img src={image} alt="Sorry"/></a>
        </div>
        
    )
}

