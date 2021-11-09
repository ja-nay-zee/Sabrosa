import React from "react";
import "./BookCard.css"

function BookCard({ cbrecipe }){
    // console.log(cbrecipe); WORKS
    const { name, dish_description, image_url } = cbrecipe;

    function DeleteClick(){
        console.log("Woohoo! You clicked the delete button");
    }

    function EditClick(){
        console.log("Yay! You clicked the edit button");
    }
    return(
        <div>
        <li className="card">
          <p>Name: {name}</p>
          {/* <p>Ingredients: {date}</p> */}
          <p>Description: {dish_description}</p>
          {/* <p>Steps: {steps}</p> */}
          <img id ="dreamImgs" src={image_url} />
        </li>
        <button id="deleteButton" onClick={DeleteClick}> Delete </button>
        <button id="editDreamButton" onClick={EditClick}> Edit Recipe </button>
      </div>
    )
}

export default BookCard;

{/* <div>
<h2>BOOKCARD WOOHOO</h2>
</div> */}
