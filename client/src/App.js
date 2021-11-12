import React, { useEffect, useState} from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import UnauthenticatedApp from "./UnauthenticatedApp.js";
import AuthenticatedApp from "./AuthenticatedApp.js"
import NavBar from "./Components/NavBar/NavBar.js";
import Publish from "./Components/PublishARecipe/PublishRecipe.js";
import Home from "./Components/Home/Home.js"
import Cookbook from "./Components/YourCookbook/YourCookbook.js";
import OurStory from "./Components/OurStory/OurStory.js";
import SignOut from "./Components/SignOut/SignOut.js";
import SignIn from "./Components/SignIn/SignIn.js"

function App() {
  const [user, setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    fetch('/me', {
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          res.json().then((user) => {
            setCurrentUser(user)
            setAuthChecked(true)
          })
        } else {
          setAuthChecked(true)
        }
      })
  },[])

  if(!authChecked) { return <div></div>}
  // useEffect(() => {
  //   fetch("/me").then((response) => {
  //     if (response.ok) {
  //       response.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  // if (user) {
  //   return <h2>Welcome, {user.username}!</h2>;
  // } else {
  //   return <SignIn onSignIn={setUser} />;
  // }

  return(
      <Router>
      {currentUser ? (
              [
                // <SeachUser />,
                <AuthenticatedApp
                  setCurrentUser={setCurrentUser}
                  currentUser={currentUser}
                />
              ]
            ) : (
              [
                <UnauthenticatedApp
                  setCurrentUser={setCurrentUser}
                />
                
              ]
            )
          }
        </Router>
    // <Router>
    //   <div className="App">
    //     <NavBar />
    //     <Switch>
    //       <Route path="/" exact component={Home}/>
    //       <Route path="/publisharecipe" component={Publish}/>
    //       <Route path="/yourcookbook" component={Cookbook}/>
    //       <Route path="/ourstory" component={OurStory}/>
    //       <Route path="/signout" component={SignOut}/>
    //     </Switch>
    //   </div>
    // </Router>
  );
}
  
  // WORKS!

  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  // return (
  //   <div className="App">
  //     <h1>Page Count: {count}</h1>
  //   </div>
  // );


export default App;
