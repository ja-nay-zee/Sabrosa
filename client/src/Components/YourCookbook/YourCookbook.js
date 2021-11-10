import React, { useEffect, useState } from "react";
import "./YourCookbook.css"
import BookList from "../BookList/BookList.js";
import Search from "../Search/Search";

function Cookbook(){
const [cbrecipes, setCbRecipes] = useState([])
const [searchTerm, setSearchTerm] = useState("")
const [toggleEdit, setToggleEdit] = useState(true)

useEffect(() => {
    fetch("/recipes")
    .then(r => r.json())
    .then((recipesArray) => {
        setCbRecipes(recipesArray);
    })
}, [toggleEdit]);

const displayRecipes = cbrecipes.filter(recipe => {
    return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
})

function handleDeleteRecipe(id){
    const updatedRecipesArray = cbrecipes.filter((recipe) => recipe.id !== id);
    setCbRecipes(updatedRecipesArray);
}

// function handleAddRecipe(newRecipe){
//     const updatedRecipesArray = [...cbrecipes, newRecipe];
//     setCbRecipes(updatedRecipesArray);
// }


console.log(cbrecipes);
    return(
        <div>
            <h1 id="title">Welcome To Your Cookbook!</h1> 
            <Search searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
            <BookList cbrecipes={displayRecipes} onDeleteRecipe={handleDeleteRecipe} setToggleEdit={setToggleEdit}/>
        </div>
    )
}

export default Cookbook;

// REMOVE FORM 