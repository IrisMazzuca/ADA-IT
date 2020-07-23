import React from 'react';


const CardFront = ({ img, newRecipe, noSugar }) => {
    return (

        <div style={{ backgroundImage: `url(${img})` }} className="cardFront">
            {newRecipe && <span className="tag new-recipe">Nuevo</span>}
            {noSugar && <span className="tag no-sugar">Sin azúcar</span>}
        </div>

    );
}

export default CardFront;