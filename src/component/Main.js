import React from 'react';
import Cards from './Cards';

function Main({resipes, onCardClick, selectedCard, onCardDelete, onCardAdd}) {
    function handleCardDelete() {
        onCardAdd();
    }
    return(
        <main className="main">
            <h3>main goes here</h3>
            <span onClick={handleCardDelete}>+</span>
            <ul>
                {
                    resipes.map((card, index) =>(
                        <Cards key={index} data={card} onCardClick={onCardClick} onCardDelete={onCardDelete} />
                    ))
                }
            </ul>
            {selectedCard && <div>{selectedCard.name}</div>}
        </main>
    )
}

export default Main;