import '../App.css';
import React from 'react';
import Header from "./Header";
import Main from "./Main";


function App() {
    let data = [
        {
            name: 'Apple juice',
            link: 'https://source.unsplash.com/random',
            image: 'https://source.unsplash.com/random',
            ingredients: 'A to Z',
            instructions: 'A to Z',
        },
        {
            name: 'Mango juice',
            link: 'https://source.unsplash.com/random',
            image: 'https://source.unsplash.com/random',
            ingredients: 'A to Z',
            instructions: 'A to Z',
        },
    ];

    const more = {
        name: 'Lime juice',
        link: 'https://source.unsplash.com/random',
        image: 'https://source.unsplash.com/random',
        ingredients: 'A to Z',
        instructions: 'A to Z',
    };

    const [cards, setCards] = React.useState([]);
    const [selectedCard, setSelectedCard] = React.useState([]);

    function handleCardClick(card) {
        setSelectedCard(card);
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

    function handleCardDelete(card) {
        const UpdatedData = cards.filter(function(item) {
            return JSON.stringify(item) !== JSON.stringify(card);
        });
        sessionStorage.setItem('resipe', JSON.stringify(UpdatedData));
        setCards(UpdatedData);
    }

    function handleCardAdd() {
        const updateData = [more, ...cards];
        sessionStorage.setItem('resipe', JSON.stringify(updateData));
        setCards(updateData);
    }

    return (
        <div className="App">
            <Header />
            <Main resipes={cards} onCardClick={handleCardClick} onCardAdd={handleCardAdd} onCardDelete={handleCardDelete} selectedCard={selectedCard}/>
        </div>
    );
}

export default App;
