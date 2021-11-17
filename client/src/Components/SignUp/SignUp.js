import React, { useState } from "react"
import { Redirect, Link } from 'react-router-dom';
import "./SignUp.css"

function Signup({ setCurrentUser }){  
    const [passwordShown, setPasswordShown] = useState(false)
    const [confPasswordShown, setConfPasswordShown] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
  
    function handleSubmitSignUp(e){
      e.preventDefault()
      console.log("Creating account...");
      fetch("/signup", {
        method: "POST",
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({ username, password, password_confirmation: passwordConfirmation})
      })
      .then(res => {
        if (res.ok) {
            res.json().then(user => {
            setCurrentUser(user)
            
        })
        } else {
            res.json().then(errors => {
            console.error(errors)
        })
        }
    })
}
  
    function togglePasswordVisiblity(){
      setPasswordShown(passwordShown ? false : true);
    };
  
    function toggleConfPasswordVisiblity(){
      setConfPasswordShown(confPasswordShown ? false : true);
    };
  
    return(
      <div>
            <form id="signUpForm" onSubmit={handleSubmitSignUp}>
              <h1 id="createAccount">Create An Account!</h1>
              <input
                className="username"
                placeholder="Username"
                name="username"
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
              />
              <input
                className="password"
                placeholder="Password"
                name="password"
                type={passwordShown ? "text" : "password"}
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
              <i onClick={togglePasswordVisiblity}>view</i>
              <input
                className="passwordConfirmation"
                placeholder="Password Confirmation"
                name="passwordConfirmation"
                type={confPasswordShown ? "text" : "password"}
                value={passwordConfirmation}
                onChange={e => setPasswordConfirmation(e.target.value)}
                required
              />
              <i onClick={toggleConfPasswordVisiblity}>view</i>
              <div className="auth__form-container_fields-content_button">
                <button id="signUpButton" type="submit">Sign Up</button>
                <hr />
                <p id="alreadyMember">Already a Sabrosa member?</p>
                <Link to="/signin"><em> Sign In </em></Link>
              </div>
            </form>
            <div className="auth__form-container_fields-account">
              {/* <p>Already have an account?</p>
              <Link to="/signin"><em> Sign In </em></Link> */}
            </div>
      </div>
    );
  }
  
  export default Signup;