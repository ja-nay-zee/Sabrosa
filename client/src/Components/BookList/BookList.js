import React from "react";
import BookCard from "../BookCard/BookCard.js";

function BookList(){
// THIS WILL TAKE IN THE YOURCOOKBOOK PROP AND THEN SEND IT TO THE BOOKCARD
// THEN YOU WILL MAP IT

    return(
        <div>
            <h1>BOOKLIST AYE</h1>
            <BookCard />
        </div>
        // <ul className="booklistcards"></ul>
    )
}



export default BookList;