import React from 'react'
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';
import { BsStar } from 'react-icons/bs';
import { BsHeartFill } from 'react-icons/bs';
import { BsHeartHalf } from 'react-icons/bs';
import { BsHeart } from 'react-icons/bs';


const ICONS = {
    star: [<BsStarFill />, <BsStarHalf />, <BsStar />],
    heart: [<BsHeartFill />, <BsHeartHalf />, <BsHeart />]
}

const renderIcons = (icon, number) => {
    let icons
    const totalIcons = 5

    const isOdd = number % 2;
    const fullIcons = (number - isOdd) / 2
    const fullIconsArr = [...new Array(fullIcons)].map(() => ICONS[icon][0])
    const halfIcons = isOdd ? ICONS[icon][1] : null;
    const emptyIconsArr = [...new Array(totalIcons - fullIcons - isOdd)].map(() => ICONS[icon][2])
    icons = [...fullIconsArr, halfIcons, ...emptyIconsArr]

    return icons
}

const Score = ({ number, icon }) => {
    return (
        <div className="score">
            {renderIcons(icon, number)}
        </div>
    );
}

export default Score;
