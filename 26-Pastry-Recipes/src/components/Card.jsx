import React from 'react'
import CardFront from './CardFront';
import CardBack from './CardBack';


const Card = ({ recipe }) => {
    return (
        <div className="card">
            <div className="flip-card-inner">
                <CardFront img={recipe.img} newRecipe={recipe.nuevo} noSugar={recipe.sinAzucar} />
                <CardBack title={recipe.nombre} score={recipe.puntuacion} difficulty={recipe.dificultad} time={recipe.tiempo} />
            </div>
        </div>
    );
}

export default Card;