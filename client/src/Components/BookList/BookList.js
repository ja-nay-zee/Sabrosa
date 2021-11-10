import React from "react";
import BookCard from "../BookCard/BookCard.js";

function BookList({ cbrecipes, onDeleteRecipe, setToggleEdit }){
// THIS WILL TAKE IN THE YOURCOOKBOOK PROP AND THEN SEND IT TO THE BOOKCARD
// THEN YOU WILL MAP IT

    return(
        <ul className="booklistcards">
            {cbrecipes.map((cbrecipe) => {
            return <BookCard key={cbrecipe.id} cbrecipe={cbrecipe} onDeleteRecipe={onDeleteRecipe} setToggleEdit={setToggleEdit}/>;
             })}
        </ul>
    );
}

export default BookList;

{/* <div>
<h1>BOOKLIST AYE</h1>
<BookCard />
</div> */}