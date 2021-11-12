import React, { useState } from "react";

function Ingredients({ recipeData }){
    const [addIngredient, setAddIngredient] = useState([{ingredient_name: "", recipe_id: recipeData.id}])


    function handleAddIngredient(e, index){
        const { name, value } = e.target;
        const step = [...addIngredient];
        step[index][name] = value;
        setAddIngredient(step);
    }
    
    console.log(addIngredient);


    function handleAddIngredientButton(){
        setAddIngredient([...addIngredient, { ingredient_name: "", recipe_id: recipeData === null ? null : recipeData.id}])
    }

    function handleCancelIngredientButton(index){
        const list = [...addIngredient];
        list.splice(index, 1);
        setAddIngredient(list);
    }

    function handleSubmitSteps(e){
        e.preventDefault();
        fetch("/ingredients", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addIngredient)
        })
            // .then(r => r.json())
            // .then(stepsdata => setRecipeData(stepsdata))
    }
        console.log(addIngredient);


    return(
        <div>
            <form onSubmit={handleSubmitSteps}>
             {addIngredient.map((item,i) => {
                return(
                    <div key={i} id="addingIngredientform">
                        <input 
                            type="text" 
                            name="ingredient_name" 
                            placeholder="Ingredient Name" 
                            value={item.addIngredient} 
                            onChange={e => handleAddIngredient(e, i)}
                        />
                        {addIngredient.length -1 === i && <input 
                            id="addIngredientButton"
                            type="button" 
                            value="+"
                            onClick={handleAddIngredientButton}
                        />}
                        {addIngredient.length !== 1 && <input 
                            id="cancelStepButton"
                            type="button" 
                            value="Cancel"
                            onClick={handleCancelIngredientButton}
                        />} 
                     </div>  
                )} )}
                    <button type="submit">Submit Ingredients</button>
                </form>
            </div>
    )
}


export default Ingredients;