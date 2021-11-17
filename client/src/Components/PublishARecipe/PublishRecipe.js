import React, { useState } from "react";
import "../PublishARecipe/PublishRecipe.css";
import YourCookbook from "../YourCookbook/YourCookbook.js"
import Steps from "../Steps/Steps";
import Ingredients from "../Ingredients/Ingredients";

function Publish({ onAddRecipe }){
    const [createRecipe, setCreateRecipe] = useState({name: "", dish_description: "", image_url: "", user_id: 1})
    const [toggleIngredient, setToggleIngredient] = useState(false);
    const [toggleStep, setToggleStep] = useState(false);
    const[recipeForm, setRecipeForm] = useState(false);
    const [recipeData, setRecipeData] = useState(null);


    function handlePublishRecipe(e){
        e.preventDefault();
        fetch("/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(createRecipe)
        })
            .then(r => r.json())
            .then(recipedata => setRecipeData(recipedata))
            setRecipeForm(true)
            setToggleStep(true)
            setToggleIngredient(true)
    }


    function handleRecipeSubmit(){
        console.log(createRecipe);
    }

    function handleRecipeChange(e){
        const key = e.target.name
        setCreateRecipe({...createRecipe, [key]: e.target.value})
    }


    return(
        <div id="background">
        <div className="formWithStepsAndIngredients">
           {recipeData === undefined || recipeData === null ? null : <div>
                <h3>Name of Recipe: {recipeData.name}</h3>
                <h3>Description: {recipeData.dish_description}</h3>
                <img id="imgWithStepsAndIngredients" src={recipeData.image_url} />
            </div>}
       {recipeForm === true ? null : 
        <div className="formPublishRecipe">
            <h2>Yum! Fill out the form below to publish a recipe into your cookbook!</h2>
            <form onSubmit={handlePublishRecipe}>
                <input 
                    className="recipeNameBox"
                    type="text" 
                    name="name" 
                    placeholder="Name of Recipe" 
                    value={createRecipe.name} 
                    onChange={handleRecipeChange}
                />
                <textarea 
                    className="descriptionBox"
                    type="text" 
                    name="dish_description" 
                    placeholder="Description of Dish" 
                    value={createRecipe.dish_description} 
                    onChange={handleRecipeChange}
                />
                <input 
                    className="imageBox"
                    type="text" 
                    name="image_url" 
                    placeholder="Image URL" 
                    value={createRecipe.image_url} 
                    onChange={handleRecipeChange}
                />
                <button id="nextButton" type="submit" onClick={handlePublishRecipe}>Next</button>
            </form>
            </div> }
            {recipeData === null ? null : <Steps recipeData={recipeData} />}
            {recipeData === null ? null : <Ingredients recipeData={recipeData}/>}
            </div>  
                   </div> 
    )}

export default Publish;

