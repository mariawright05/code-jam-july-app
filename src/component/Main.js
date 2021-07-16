import React from 'react';
import Cards from './Cards';
import ResipeDetails from "./ResipeDetails";
import From from "./From";
import cookingGif from "../images/cooking-at-home.gif";

function Main({resipes, onCardClick, selectedCard, onCardDelete, onCardAdd}) {
    const [isFromOpen, setIsFromOpen] = React.useState(false);
    function handleFromOpen() {
        setIsFromOpen(true);
        onCardClick(null);
    }
    function handleFromClose() {
        setIsFromOpen(false);
    }

    return(
        <section className="recipeSection">
            <aside className="recipeList">
                <button className="button" onClick={handleFromOpen}>Add Recipe</button>
                <ul className="recipeList__wrapper">
                    {
                        resipes.map((card, index) =>(
                            <Cards key={index}
                                   selectedCard={JSON.stringify(selectedCard) === JSON.stringify(card)}
                                   data={card}
                                   onCardClick={onCardClick}
                                   onCardDelete={onCardDelete}
                                   onFormClose={handleFromClose}/>
                        ))
                    }
                </ul>
            </aside>
            <article className="recipe">
                {
                    (selectedCard !== null) && <ResipeDetails selectedCard={selectedCard} />
                }

                {
                    isFromOpen && <From onCardAdd={onCardAdd} onFormClose={handleFromClose}/>
                }

                {
                    (selectedCard === null) && !isFromOpen && <img src={cookingGif} className='cookingGif'/>
                }
            </article>
        </section>
    )
}

export default Main;