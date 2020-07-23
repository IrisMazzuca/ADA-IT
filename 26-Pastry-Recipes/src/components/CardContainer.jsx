import React from 'react'
import Card from './Card'

const CardContainer = ({ recipes }) => {
    return (
        < div className="cardContainer" >
            {recipes.map(recipe => {
                return <Card key={recipe.id} recipe={recipe} />
            })}
        </div >
    );
}

export default CardContainer;