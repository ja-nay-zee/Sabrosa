import React, { useState } from "react";
import "../PublishARecipe/PublishRecipe.css";
import YourCookbook from "../YourCookbook/YourCookbook.js"

function Publish({ onAddRecipe }){
    const [name, setName] = useState("");
    const [dish_description, setDishDescription] = useState("");
    const [image_url, setImageURL] = useState("");
    const [step_instruction, setStepInstruction] = useState([{step_instruction: ""}])

    
    function handlePublishRecipe(e){
        e.preventDefault();
        fetch("/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                dish_description: dish_description,
                image_url: image_url
            })
        })
            .then(r => r.json());
    }


    function handleAddStep(e, index){
        const { name, value } = e.target;
        const step = [...step_instruction];
        step[index][name] = value;
        setStepInstruction(step);
    }

    function handleAddStepButton(){
        setStepInstruction([...step_instruction, { step_instruction: ""}])
    }

    function handleCancelStepButton(index){
        const list = [...step_instruction];
        list.splice(index, 1);
        setStepInstruction(list);
    }


    return(
        <div className="formPublishRecipe">
            <h2>Yum! Fill out the form below to Publish a recipe into your cookbook!</h2>
            <form onSubmit={handlePublishRecipe}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Name of Recipe" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type="text" 
                    name="dish_description" 
                    placeholder="Description of Dish" 
                    value={dish_description} 
                    onChange={(e) => setDishDescription(e.target.value)}
                />
                <input 
                    type="text" 
                    name="image_url" 
                    placeholder="Image URL" 
                    value={image_url} 
                    onChange={(e) => setImageURL(e.target.value)}
                />
            {step_instruction.map((item,i) => {
                return(
                    <div key={i} id="addingstepform">
                        <input 
                            type="text" 
                            name="step_instruction" 
                            placeholder="Step Instruction" 
                            value={item.step_instruction} 
                            onChange={e => handleAddStep(e, i)}
                        />
                        {step_instruction.length -1 === i && <input 
                            id="addStepButton"
                            type="button" 
                            value="+"
                            onClick={handleAddStepButton}
                        />}
                        {step_instruction.length !== 1 && <input 
                            id="cancelStepButton"
                            type="button" 
                            value="Cancel"
                            onClick={handleCancelStepButton}
                        />}

                    </div>    
                )
            })}
                {/* <input 
                    type="text" 
                    name="step_instruction" 
                    placeholder="Step Instruction" 
                    value={step_instruction.step_instruction} 
                    onChange={handleAddStep}
                />
                <input 
                    id="addButton"
                    type="button" 
                    name="Add" 
                    placeholder="Add" 
                    // value={image_url} 
                    // onChange={(e) => setImageURL(e.target.value)}
                /> */}
                <button type="submit" onClick={() => alert("Yum! Your recipe was added to Your Cookbook!")}>Submit New Recipe</button>
            </form>
        </div>
    )
}

export default Publish;

