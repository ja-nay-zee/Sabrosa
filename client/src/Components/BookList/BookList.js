import React from "react";
import BookCard from "../BookCard/BookCard.js";

function BookList({ cbrecipes, onDeleteRecipe, setToggleEdit }){

    return(
        <ul className="booklistcards">
            {cbrecipes.map((cbrecipe) => {
            return <BookCard key={cbrecipe.id} cbrecipe={cbrecipe} onDeleteRecipe={onDeleteRecipe} setToggleEdit={setToggleEdit}/>;
             })}
        </ul>
    );
}

export default BookList;

