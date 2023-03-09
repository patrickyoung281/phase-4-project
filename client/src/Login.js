import React, { useState } from "react";

function Login ( {onLogin} ) {

const [username, setUsername] = useState(null);


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
                <button
                    type="submit">Login</button>
                </label>
            </form>
        </div>
    )
}

export default Login;