import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar.js";
import Publish from "./Components/PublishARecipe/PublishRecipe.js";
import Home from "./Components/Home/Home.js"
import Cookbook from "./Components/YourCookbook/YourCookbook.js";
import OurStory from "./Components/OurStory/OurStory.js";
import SignOut from "./Components/SignOut/SignOut.js";


function AuthenticatedApp({ currentUser, setCurrentUser }){
    return(
     <Router>
      <div className="App">
         <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
         <Switch>
           <Route path="/" exact component={Home}/>
           <Route path="/publisharecipe" component={Publish}/>
           <Route path="/yourcookbook" component={Cookbook}/>
           <Route path="/ourstory" component={OurStory}/>
           <Route path="/signout" component={SignOut}/>
         </Switch>
       </div>
     </Router>

    )
}

export default AuthenticatedApp;