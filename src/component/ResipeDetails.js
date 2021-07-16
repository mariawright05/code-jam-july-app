import React from 'react';

function ResipeDetails({selectedCard}) {
    return(
        <>
            <h1 className="recipe__title">{selectedCard.name}</h1>
            <p className="recipe__source">Source:</p>
            <a className="recipe__url" target="_blank"
               href={selectedCard.url}>{selectedCard.url}</a>
            <div className="recipe__image_box">
                <img className="recipe__image" src={selectedCard.image} alt={selectedCard.name}/>
            </div>
            <h2 className="recipe__subtitle">Ingredients</h2>
            <div className="recipe__body">
                <ul>
                    {selectedCard.ingredientsList.map((item,index)=>(<li key={index}><p className="recipe__ingredients">{item}</p></li>))}
                </ul>
            </div>
            <h2 className="recipe__subtitle">Instructions</h2>
            <div className="recipe__body">
                <ol>
                    {selectedCard.instructionsList.map((item,index)=>(<li key={index}><p className="recipe__instruction">{item}</p></li>))}
                </ol>
            </div>
        </>
    )
}

export default ResipeDetails;