import React from 'react'

function SignOut({ currentUser, setCurrentUser}){

    // function handleSignOut() {
    //     console.log(currentUser)
    //     console.log("Logging off...");
    //     fetch("/signout", {
    //     method: "DELETE",
    //     credentials: 'include'
    //     })
    //     .then(resp => {
    //         if(resp.ok){
    //             setCurrentUser(null)
    //         }
    //     })
    // };
    
    return(
        <div>
            <h1>Sign Out Page</h1>
            {/* <button onClick={handleSignOut}>Sign Out</button> */}
        </div>
    )
}

export default SignOut;