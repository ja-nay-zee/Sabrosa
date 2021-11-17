import React, {useState} from "react";
import { Redirect, Link } from 'react-router-dom';
import "./SignIn.css"


function SignIn({setCurrentUser}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordShown, setPasswordShown] = useState(false)

    function togglePasswordVisiblity(){
        setPasswordShown(passwordShown ? false : true);
    };
    
    function handleSubmitSignIn(event){
        event.preventDefault();
        console.log("Signing in...")
        fetch("/signin", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((res) => {
            if (res.ok) {
            res.json().then((user) => {
                setCurrentUser(user);
            });
            } else {
            res.json().then((errors) => {
                console.error(errors);
                alert("Password or username submitted, does not appear in our system.");
            });
            }
        });
        };

    return(
        <div id="backgroundPic">
            <form id="signInForm" onSubmit={handleSubmitSignIn}>
                <h1>Welcome to Sabrosa</h1>    
                <input
                    className="username"
                    placeholder="Username"
                    name="username"
                    type="username"
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
                <i id="view" onClick={togglePasswordVisiblity}>view 👁️</i>
                <div className="auth__form-container_fields-content_button">
                    <button id="signInButton"type="submit">Sign In</button>
                </div>
                <hr/>
                <p id="createAccount">Need to create a new account?</p>
                <Link to="/signup"><em id="signUp"> Sign Up </em></Link>
                <p id="rightsReserved">© 2021 Sabrosa. All Rights Reserved.</p>
            </form>
            <div id="auth__form-container_fields-account">
            {/* <p id="aboveSignUp">Need to create a new account?</p> */}
            {/* <Link to="/signup"><em id="signUp"> Sign Up </em></Link> */}
            </div>
        </div>
    )
}
export default SignIn;