import React, { useState } from "react";
import "./BookCard.css"

function BookCard({ cbrecipe, onDeleteRecipe, setToggleEdit }){
    const { id, name, dish_description, image_url, ingredients, steps } = cbrecipe;
    const [editedRecipe, setEditedRecipe] = useState({name: name, image_url: image_url, dish_description: dish_description, step_instruction: steps, ingredient_name:ingredients});
    const [editButton, setEditButton] = useState(false);

    function DeleteClick(){
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
      alert("Your recipe was updated!")
    }

    function handleEdit(e){
      const key = e.target.name
      setEditedRecipe({...editedRecipe, [key]: e.target.value})
  }

  function handleEditForm(){
    setEditButton(editButton => !editButton)
  }

     const displayIngredients = ingredients.map(ingredientarray => <li>{ingredientarray.ingredient_name}</li>)

    const displaySteps = steps.map(step => <li>{step.step_instruction}</li>)

    return(
      <div id="recipeCardContainer">
        <div className="recipeCardDetails">
          <h1 className="recipe-name">Name: {name}</h1>
          <img id="recipeImgs" src={image_url} />
          <div className="cardDetails">
            <h3>Ingredients:</h3>
              <ul> {displayIngredients}</ul>
            <h3>Steps:</h3>
              <ol>{displaySteps}</ol>          
          <p>Description: {dish_description}</p>
        <button id="deleteButton" onClick={DeleteClick}> Delete </button>
        <button id="editButton" onClick={handleEditForm}> Edit Button </button>
        </div>
        {editButton === false ? null : <form id="updateform" onSubmit={handleEditedRecipeForm}>
          <h2> Edit This Recipe: {editedRecipe.name}</h2>
          <input
           className="editNameBox"
           type="text"
           name="name"
           placeholder="Edit Recipe Name"
           value={editedRecipe.name}
           onChange={handleEdit}
          />
          <input
           className="editImageBox"
           type="text"
           name="image_url"
           placeholder="Edit Image URL"
           value={editedRecipe.image_url}
           onChange={handleEdit}
          />
          <textarea
           className="editDescriptionBox"
           type="text"
           name="dish_description"
           placeholder="Edit Dish Description"
           value={editedRecipe.dish_description}
           onChange={handleEdit}
          />
        <button id="editDreamButton" type="submit">Update Recipe</button>
        <button id="cancelButton" type="button" onClick={() => setEditButton(false)}>Cancel</button>
        </form>
}
       </div>
       </div>

    )
}

export default BookCard;

