import React, { useEffect, useState } from "react";
import "./YourCookbook.css"
import BookList from "../BookList/BookList.js";

function Cookbook(){
// USE FETCH TO GET ALL THE RECIPES THEN USE THE USESTATE TO SEND TO BOOKLIST
// const [cbrecipes, setCbRecipes] = useState([])

useEffect(() => {
    fetch("/recipes")
    .then(r => r.json())
    .then((console.log))
}, []);

    return(
        <div>
            <h1 id="title">Welcome To Your Cookbook!</h1> 
            <BookList />
        </div>
    )
}

export default Cookbook;