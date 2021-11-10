import React, { useState } from "react";
import "./BookCard.css"

function BookCard({ cbrecipe, onDeleteRecipe, setToggleEdit }){
    // console.log(cbrecipe); WORKS
    const { id, name, dish_description, image_url } = cbrecipe;
    const [editedRecipe, setEditedRecipe] = useState({name: name, image_url: image_url, dish_description: dish_description});
    const [editButton, setEditButton] = useState(false);

    function DeleteClick(){
        // console.log(id); WORKS
        fetch(`/recipes/${id}`, {
          method: "DELETE",
        });
        onDeleteRecipe(id);
    }

    function handleEditedRecipeForm(e){
      e.preventDefault();
      fetch(`/recipes/${id}`,{
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedRecipe)
      })
      console.log({ editedRecipe })
      setToggleEdit(toggleEdit => !toggleEdit)
    }

    function handleEdit(e){
      const key = e.target.name
      setEditedRecipe({...editedRecipe, [key]: e.target.value})
  }

  function handleEditForm(){
    setEditButton(editButton => !editButton)
  }

    return(
        <li className="card">
          <p>Name: {name}</p>
          {/* <p>Ingredients: {date}</p> */}
          <p>Description: {dish_description}</p>
          {/* <p>Steps: {steps}</p> */}
          <img id ="dreamImgs" src={image_url} />
        <button id="deleteButton" onClick={DeleteClick}> Delete </button>
        <button id="editButton" onClick={handleEditForm}> Edit Button </button>
        {editButton === false ? null : <form id="updateform" onSubmit={handleEditedRecipeForm}>
          <h2> Edit This Recipe</h2>
          <input
           type="text"
           name="name"
           placeholder="Edit Recipe Name"
           value={editedRecipe.name}
           onChange={handleEdit}
          />
          <input
           type="text"
           name="image_url"
           placeholder="Edit Image URL"
           value={editedRecipe.image_url}
           onChange={handleEdit}
          />
          <input
           type="text"
           name="dish_description"
           placeholder="Edit Dish Description"
           value={editedRecipe.dish_description}
           onChange={handleEdit}
          />
        <button id="editDreamButton" type="submit">Update Recipe</button>
        </form>
}
       </li>

    )
}

export default BookCard;

