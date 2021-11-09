import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import NavBar from "./Components/NavBar/NavBar.js";
import Publish from "./Components/PublishARecipe/PublishRecipe.js";
import Home from "./Components/Home/Home.js"
import Cookbook from "./Components/YourCookbook/YourCookbook.js";
import OurStory from "./Components/OurStory/OurStory.js";
import SignOut from "./Components/SignOut/SignOut.js";

function App() {

  return(
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/publisharecipe" component={Publish}/>
          <Route path="/yourcookbook" component={Cookbook}/>
          <Route path="/ourstory" component={OurStory}/>
          <Route path="/signout" component={SignOut}/>
        </Switch>
      </div>
    </Router>
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
