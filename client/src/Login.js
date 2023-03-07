import React, { useState } from "react";

function Login () {


const [username, setUsername] = useState("");

function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username })
    })
    .then((r) => r.json())
    .then((r) => console.log(r))
}


function handleSubmitRegister(e) {
    e.preventDefault();
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
    })
    .then((r) => r.json())
    .then((r) => console.log(r))
}

    return (
        <div>
            <h2>Login Here!</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    Enter Username Here: 
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        >
                </input>
                <button
                    type="submit">Login</button>
                </label>
            </form>

            <h2>Register Here!</h2>

            <form onSubmit={handleSubmitRegister}>
                <label>
                    Create Username:
                    <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    ></input>
                </label>
                <button
                type="submit">Register</button>
            </form>


        </div>
    )
}

export default Login;