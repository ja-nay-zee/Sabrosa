import React, { useState } from "react";
import "../PublishARecipe/PublishRecipe.css";
import YourCookbook from "../YourCookbook/YourCookbook.js"
import Steps from "../Steps/Steps";

function Publish({ onAddRecipe }){
    const [createRecipe, setCreateRecipe] = useState({name: "", dish_description: "", image_url: "", user_id: 1})
    // const [addStep, setAddStep] = useState([{step_instruction: "", recipe_id: 1}])
    const [toggleIngredient, setToggleIngredient] = useState(false);
    const [toggleStep, setToggleStep] = useState(false);
    const[recipeForm, setRecipeForm] = useState(false);
    const [recipeData, setRecipeData] = useState(null);
    // const [addStep, setAddStep] = useState([{step_instruction: "", recipe_id: recipeData === null ? null : recipeData.id}])
    // const [addStep, setAddStep] = useState([{step_instruction: "", recipe_id: null}])


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
    }


    // function handleAddStep(e, index){
    //     const { name, value } = e.target;
    //     const step = [...addStep];
    //     step[index][name] = value;
    //     setAddStep(step);
    // }
    // console.log(addStep)


    // function handleAddStepButton(){
    //     setAddStep([...addStep, { step_instruction: "", recipe_id: recipeData === null ? null : recipeData.id}])
    // }

    // function handleCancelStepButton(index){
    //     const list = [...addStep];
    //     list.splice(index, 1);
    //     setAddStep(list);
    // }

    function handleRecipeSubmit(){
        console.log(createRecipe);
    }

    function handleRecipeChange(e){
        const key = e.target.name
        setCreateRecipe({...createRecipe, [key]: e.target.value})
    }

    // function handleSubmitSteps(e){
    //     e.preventDefault();
    //     console.log(addStep);
    // }


    return(
        <div>             
           {recipeData === undefined || recipeData === null ? null : <div>
                <h3>Name of Recipe: {recipeData.name}</h3>
                <h3>Description: {recipeData.dish_description}</h3>
                <img src={recipeData.image_url} />
            </div>}
       {recipeForm === true ? null : 
        <div className="formPublishRecipe">
            <h2>Yum! Fill out the form below to Publish a recipe into your cookbook!</h2>
            <form onSubmit={handlePublishRecipe}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Name of Recipe" 
                    value={createRecipe.name} 
                    onChange={handleRecipeChange}
                />
                <input 
                    type="text" 
                    name="dish_description" 
                    placeholder="Description of Dish" 
                    value={createRecipe.dish_description} 
                    onChange={handleRecipeChange}
                />
                <input 
                    type="text" 
                    name="image_url" 
                    placeholder="Image URL" 
                    value={createRecipe.image_url} 
                    onChange={handleRecipeChange}
                />
                <button type="submit" onClick={handlePublishRecipe}>Next</button>
            </form>
            </div> }
            {recipeData === null ? null : <Steps recipeData={recipeData} />}
            </div>          
    )}

export default Publish;

