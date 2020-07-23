import React from 'react'
import Score from "./Score";
import { GiSandsOfTime } from 'react-icons/gi';



const CardBack = ({ title, score, difficulty, time }) => {
    return (

        <div className="cardBack">
            <h1 className="cardTitle">{title}</h1>
            <p>Puntuación: <Score number={score} icon={'heart'} /></p>
            <p>Dificultad: <Score number={difficulty} icon={'star'} /></p>
            <p>Tiempo: {time} <GiSandsOfTime /> </p>
        </div>

    );
}

export default CardBack;