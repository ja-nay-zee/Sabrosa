import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

function NavBar({ currentUser, setCurrentUser }){

    function handleSignOut() {
        fetch("/signout", {
        method: "DELETE",
        credentials: 'include'
        })
        .then(resp => {
            if(resp.ok){
                setCurrentUser(null)
            }
        })
    };


    return(
        <nav>
            <h1 id="CompanyName">SABROSA</h1>            
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

                <button onClick={handleSignOut}>Sign Out</button>

                {/* <Link id="link5" to="/signout">
                    <li>Sign Out</li>
                </Link> */}
            </ul>
        </nav>
    )
}

export default NavBar;