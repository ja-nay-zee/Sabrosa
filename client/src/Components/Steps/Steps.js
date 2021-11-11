import React, {useState} from "react";

function Steps({ recipeData }){
    const [addStep, setAddStep] = useState([{step_instruction: "", recipe_id: recipeData.id}])


    function handleAddStep(e, index){
        const { name, value } = e.target;
        const step = [...addStep];
        step[index][name] = value;
        setAddStep(step);
    }
    console.log(addStep)


    function handleAddStepButton(){
        setAddStep([...addStep, { step_instruction: "", recipe_id: recipeData === null ? null : recipeData.id}])
    }

    function handleCancelStepButton(index){
        const list = [...addStep];
        list.splice(index, 1);
        setAddStep(list);
    }

    function handleSubmitSteps(e){
        e.preventDefault();
        fetch("/steps", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addStep)
        })
            // .then(r => r.json())
            // .then(stepsdata => setRecipeData(stepsdata))
    }
        console.log(addStep);


    return(
        <div>
            <form onSubmit={handleSubmitSteps}>
             {addStep.map((item,i) => {
                return(
                    <div key={i} id="addingstepform">
                        <input 
                            type="text" 
                            name="step_instruction" 
                            placeholder="Step Instruction" 
                            value={item.addStep} 
                            onChange={e => handleAddStep(e, i)}
                        />
                        {addStep.length -1 === i && <input 
                            id="addStepButton"
                            type="button" 
                            value="+"
                            onClick={handleAddStepButton}
                        />}
                        {addStep.length !== 1 && <input 
                            id="cancelStepButton"
                            type="button" 
                            value="Cancel"
                            onClick={handleCancelStepButton}
                        />} 
                     </div>  
                )} )}
                    <button type="submit">Submit Steps</button>
                </form>
            </div>
    )

}

export default Steps;