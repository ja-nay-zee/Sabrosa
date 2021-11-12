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
        <h2>Sabrosa</h2>
            <form onSubmit={handleSubmitSignUp}>
              <input
                placeholder="Username"
                name="username"
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
              />
              <input
                placeholder="Password"
                name="password"
                type={passwordShown ? "text" : "password"}
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
              <i onClick={togglePasswordVisiblity}>view</i>
              <input
                placeholder="Password Confirmation"
                name="passwordConfirmation"
                type={confPasswordShown ? "text" : "password"}
                value={passwordConfirmation}
                onChange={e => setPasswordConfirmation(e.target.value)}
                required
              />
              <i onClick={toggleConfPasswordVisiblity}>view</i>
              <div className="auth__form-container_fields-content_button">
                <button type="submit">Sign Up</button>
              </div>
            </form>
            <div className="auth__form-container_fields-account">
              <p>Already have an account?</p>
              <Link to="/signin"><em> Sign In </em></Link>
            </div>
      </div>
    );
  }
  
  export default Signup;