import React from "react";
import "./Search.css";

function Search({ searchTerm, onSearchChange }){
    return(
        <div className="searchbar">
            <label htmlFor="search">Search Recipes:</label>
            <input
                className="searchBox"
                type="text"
                placeholder="Type a recipe name to search..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    );
}

export default Search;