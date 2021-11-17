import React, {useState} from "react";

function Steps({ recipeData }){
    const [steps, setSteps] = useState([{step_instruction: "", recipe_id: recipeData.id}])
    const [stepsData, setStepsData] = useState("")

    function handleSteps(e, index){
        const { name, value } = e.target;
        const step = [...steps];
        step[index][name] = value;
        setSteps(step);
    }

    console.log(Steps);


    function handleStepsButton(){
        setSteps([...steps, { step_instruction: "", recipe_id: recipeData === null ? null : recipeData.id}])
    }

    function handleCancelStepButton(index){
        const list = [...steps];
        list.splice(index, 1);
        setSteps(list);
    }

    function handleSubmitSteps(e){
        e.preventDefault();
        // console.log(Steps);
        fetch("/steps", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(steps)
        })
            .then(r => r.json())
            .then(stepsDataArray => setStepsData(stepsDataArray))
            console.log(stepsData)
    }

    function handleSubmitSteps(e){
        e.preventDefault();
        // console.log(Steps);
        fetch(`/recipes/${recipeData.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({steps_attributes: steps})
        })
        .then(resp => resp.json())
        .then(console.log)
    }
// console.log(stepsData)

    return(
        <div>
            <form onSubmit={handleSubmitSteps}>
             {steps.map((item,i) => {
                return(
                    <div key={i} id="addingstepform">
                        <input 
                            type="text" 
                            name="step_instruction" 
                            placeholder="Step Instruction" 
                            value={item.steps} 
                            onChange={e => handleSteps(e, i)}
                        />
                        {Steps.length -1 === i && <input 
                            id="StepsButton"
                            type="button" 
                            value="+"
                            onClick={handleStepsButton}
                        />}
                        {Steps.length !== 1 && <input 
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