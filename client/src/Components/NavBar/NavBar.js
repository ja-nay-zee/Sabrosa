import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

function NavBar(){

    return(
        <nav>
            <h1 id="CompanyName">SABROSA</h1>
            {/* <NavLink className="homeNav" to="/homepage">Home</NavLink>
            <NavLink className="publishARecipeNav" to="/publisharecipe">Publish a Recipe</NavLink>
            <NavLink className="yourCookbookNav" to="/yourcookbook">Your Cookbook</NavLink>
            <NavLink className="ourStorysNav" to="/ourstory">Our Story</NavLink>
            <NavLink className="signOutNav" to="/signOut">Sign Out</NavLink> */}
            
            <ul className="nav-links">
                <Link id="link1"to="/">
                    <li>Home</li>
                </Link>

                <Link id="link2" to="/publisharecipe">
                    <li>Publish a Recipe</li>
                </Link>

                <Link id="link3" to="/yourcookbook">
                    <li>Your Cookbook</li>
                </Link>

                <Link id="link4" to="/ourstory">
                    <li>Our Story</li>
                </Link>

                <Link id="link5" to="/signout">
                    <li>Sign Out</li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar;