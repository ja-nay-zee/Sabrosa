import React, { useState } from "react";
import "../PublishARecipe/PublishRecipe.css";
import YourCookbook from "../YourCookbook/YourCookbook.js"

function Publish({ onAddRecipe }){
    const [name, setName] = useState("");
    const [dish_description, setDishDescription] = useState("");
    const [image_url, setImageURL] = useState("");

    // console.log({ name, description, image }); WORKS!
    
    function handlePublishRecipe(e){
        e.preventDefault();
        //make the POST
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
            .then(r => r.json())
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
                    name="description" 
                    placeholder="Description of Dish" 
                    value={dish_description} 
                    onChange={(e) => setDishDescription(e.target.value)}
                />
                <input 
                    type="text" 
                    name="image" 
                    placeholder="Image URL" 
                    value={image_url} 
                    onChange={(e) => setImageURL(e.target.value)}
                />
                <button type="submit" onClick={() => alert("Yum! Your recipe was added to Your Cookbook!")}>Submit New Recipe</button>
            </form>
        </div>
    )
}

export default Publish;

{/* <div class="h_container">
<i id="heart" class="far fa-heart"></i>
</div> */}
