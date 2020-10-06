import React from 'react'

export const RecipeTabloid = ({label,ingredients,image}) => {
    return (
        <div className='recipe_tabloid'>
            <h2>{label}</h2>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
                <img src={image} alt="Sorry"/>
        </div>
    )
}

