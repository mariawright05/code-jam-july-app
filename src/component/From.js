import React from 'react';
import Input from "./Input";
import Textarea from "./Textarea";

function From({onCardAdd, onFormClose}) {

    const [name, setName] = React.useState('');
    const [url, setUrl] = React.useState('');
    const [image, setImage] = React.useState('');
    const [ingredients, setIngredients] = React.useState('');
    const [instructions, setInstructions] = React.useState('');
    function handleSubmit(e) {
        e.preventDefault();
        const ingredientsList = ingredients.split("\n");
        const instructionsList = instructions.split("\n");
        console.log({name,url,image,ingredientsList,instructionsList});
        onFormClose();
        onCardAdd({name,url,image,ingredientsList,instructionsList});
    }
    function handleNameChange(e) {
        setName(e.target.value)
    }
    function handleUrlChange(e) {
        setUrl(e.target.value)
    }
    function handleImageChange(e) {
        setImage(e.target.value)
    }
    function handleIngredientsChange(e) {
        let value = e.target.value;
        value = value.replace(/[\r\n]+/g,"\n");
        setIngredients(value);
    }
    function handleInstructionsChange(e) {
        let value = e.target.value;
        value = value.replace(/[\r\n]+/g,"\n");
        setInstructions(value)
    }

    return(
        <>
            <form action="#" name="addRecipe" onSubmit={handleSubmit}>
                <Input type="text" name="name" placeholder="Recipe Name" id="input-name" minLength="2" maxLength="40" onChange={handleNameChange}/>
                <Input type="url" name="url" placeholder="Recipe URL" id="input-url" minLength="2" onChange={handleUrlChange}/>
                <Input type="url" name="image" placeholder="Image URL" id="input-image-url" minLength="2" onChange={handleImageChange}/>
                <Textarea label="Ingredients" name="ingredients" placeholder="List all ingredients" id="input-ingredients" minLength="2"onChange={handleIngredientsChange}/>
                <Textarea label="Instructions" name="ingredients" placeholder="List all instructions" id="input-ingredients" minLength="2" onChange={handleInstructionsChange}/>

                <button className="button button_role_submit" type="submit">Add </button>
                <button className="button button_role_cancel" onClick={onFormClose}>Cancel</button>
            </form>
        </>
    )
}

export default From;