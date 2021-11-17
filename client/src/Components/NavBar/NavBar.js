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

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    return(
        // ORIGINAL
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
</ul>
</nav> 

        // <div id="mySidenav">
        //     <h1 id="CompanyName">SABROSA</h1>  
        //     <a href="javascript:void(0)" className="closebtn" onclick={closeNav}>&times;</a>
        //     <a className="nav-links">
        //         <Link to="/">
        //             <li>Home</li>
        //         </Link>

        //         <Link to="/publisharecipe">
        //             <li>Publish a Recipe</li>
        //         </Link>

        //         <Link to="/yourcookbook">
        //             <li>Your Cookbook</li>
        //         </Link>

        //         <Link to="/ourstory">
        //             <li>Our Story</li>
        //         </Link>

        //         <button onClick={handleSignOut}>Sign Out</button>
        //     </a>
        //     <span onclick={openNav}>open</span>
        // </div>
    )
}

export default NavBar;

{/* <nav>
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
</ul>
</nav> */}
