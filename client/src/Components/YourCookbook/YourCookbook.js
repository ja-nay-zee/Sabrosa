import React, { useEffect, useState } from "react";
import "./YourCookbook.css"
import BookList from "../BookList/BookList.js";
import Search from "../Search/Search";

function Cookbook(){
const [cbrecipes, setCbRecipes] = useState([])
const [searchTerm, setSearchTerm] = useState("panini")

useEffect(() => {
    fetch("/recipes")
    .then(r => r.json())
    .then((recipesArray) => {
        setCbRecipes(recipesArray);
    })
}, []);

const displayRecipes = cbrecipes.filter(recipe => {
    return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
})


// function handleAddRecipe(newRecipe){
//     const updatedRecipesArray = [...cbrecipes, newRecipe];
//     setCbRecipes(updatedRecipesArray);
// }


console.log(cbrecipes);
    return(
        <div>
            <h1 id="title">Welcome To Your Cookbook!</h1> 
            <Search searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
            <BookList cbrecipes={displayRecipes} />
        </div>
    )
}

export default Cookbook;

// REMOVE FORM 