import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import SignIn from './Components/SignIn/SignIn.js'
import SignUp from './Components/SignUp/SignUp.js'

function UnauthenticatedApp({ setCurrentUser }) {
    return (
    <Switch>
        <Route exact path="/">
            <SignIn setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/signup">
            <SignUp setCurrentUser={setCurrentUser}/>
        </Route>
        <Redirect to="/" />
    </Switch>
)
}

export default UnauthenticatedApp;