import React from 'react';

function Cards({data, onCardClick, onCardDelete, onFormClose, selectedCard}) {
    const {name, image} = data;
    const selectedItem = selectedCard ? 'recipeCard_active' : '';
    function handleCardClick(e){
        onCardClick(data);
        onFormClose();
    }
    function handleCardDelete(){
        onCardDelete(data);
        onCardClick(null);
    }
    return(
        <li className={`recipeCard__item ` +  selectedItem }>
            <div className="recipeCard" onClick={handleCardClick}>
                <div className="recipeCard__image_box">
                    <img className="recipeCard__image" src={image} alt=""/>
                </div>
                <div className="recipeCard__text-wrapper">
                    <p className="recipeCard__title">{name}</p>
                    <p className="recipeCard__read-more">Full Recipe</p>
                </div>
            </div>

            <button className="recipeCard__delete" onClick={handleCardDelete}></button>
        </li>
    )
}

export default Cards;