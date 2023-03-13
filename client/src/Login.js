import React, { useState } from "react";

function Login ( {onLogin} ) {

const [username, setUsername] = useState(null);
const [password, setPassword] = useState("")
const [passwordConfirmation, setPasswordConfirmation] = useState("")


function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
                username: username,
                password,
                password_confirmation: passwordConfirmation, 
            }),
    })
    .then((r) => r.json())
    .then((r) => onLogin(r))
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

                <label>
        Password:
        <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}></input>
    </label>

    <label>
        Confirm Password:
        <input
        type="password"
        id="password_confirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}></input>
    </label>

                <button
                    type="submit">Login</button>
                </label>
            </form>
        </div>
    )
}

export default Login;