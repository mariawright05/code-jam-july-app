import React from 'react';

function Cards({data, onCardClick, onCardDelete}) {
    const {name} = data;
    function handleCardClick(){
        onCardClick(data)
    }
    function handleCardDelete(){
        onCardDelete(data)
    }
    return(
        <li >
            <span onClick={handleCardClick}> ==== {name} ==== </span>
            <span onClick={handleCardDelete}>X</span>
        </li>
    )
}

export default Cards;