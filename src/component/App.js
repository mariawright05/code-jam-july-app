import '../App.css';
import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


function App() {
    let data = [{"name":"Apple juice","url":"https://www.tablespoon.com/recipes/homemade-apple-juice/bcf44468-1eed-479a-88d6-2bd4c3cfacd3","image":"https://images.unsplash.com/photo-1599683305314-8b6bf891e058?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80","ingredientsList":["Apples","Cinnamon (optional)","Sugar (optional)"],"instructionsList":["Start by washing and then coring the apple to remove seeds. Cut the apples into slices. There is no need to peel the apples.","Add the apples to the pot and add enough water to just cover them. Too much water and you’ll have pretty diluted juice. This juice may come out a bit strong, but it’s a lot easier to dilute the juice with extra water rather than trying to make the flavor stronger.","Slowly boil the apples for about 20-25 minutes or until the apples are quite soft. Place a coffee filter or piece of cheesecloth in your fine mesh strainer and place over a bowl.","Slowly ladle the hot juice/apple mixture into a fine mesh strainer and gently mash the apples. The juice will be filtered through the bottom into your bowl while the apple mush will be left behind. Place the mush in a separate bowl for later. Repeat this process until all of your juice is in the bowl.","Taste the juice after it’s cooled for a bit. You can add additional sugar or cinnamon depending on your preferences. Again, if the flavor is too strong, you can add water a little bit at a time to weaken the flavor.","The apple mush you collected can easily be turned into applesauce by pureeing and adding a smidgen of sugar and cinnamon to taste.","Keep in mind your homemade apple juice doesn’t have any preservatives so be sure to keep it refrigerated and to use it within a week!"]}];


    const [cards, setCards] = React.useState([]);
    const [selectedCard, setSelectedCard] = React.useState(null);

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function handleCardDelete(card) {
        const UpdatedData = cards.filter(function(item) {
            return JSON.stringify(item) !== JSON.stringify(card);
        });
        sessionStorage.setItem('resipe', JSON.stringify(UpdatedData));
        setCards(UpdatedData);
    }

    function handleCardAdd(newCard) {
        const updateData = [newCard, ...cards];
        sessionStorage.setItem('resipe', JSON.stringify(updateData));
        setCards(updateData);
    }


    React.useEffect(()=>{
        const storedData = sessionStorage.getItem('resipe');
        if (!storedData){
            sessionStorage.setItem('resipe', JSON.stringify(data));
            setCards(data);
        }else {
            setCards(JSON.parse(storedData));
        }
    },[]);

    return (
        <div className="App" className="app">
            <Header />
            <Main resipes={cards} onCardClick={handleCardClick} onCardAdd={handleCardAdd} onCardDelete={handleCardDelete} selectedCard={selectedCard}/>
            <Footer/>
        </div>
    );
}

export default App;
