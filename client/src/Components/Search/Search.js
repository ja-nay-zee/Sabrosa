import React from "react";
import "./Search.css";

function Search({ searchTerm, onSearchChange }){
    return(
        <div className="searchbar">
            <label htmlFor="search">Search Recipes:</label>
            <input
                type="text"
                id="search"
                placeholder="Type a recipe name to search..."
                value={searchTerm}
                // onChange={(e) => console.log("Searching for...")}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    );
}

export default Search;