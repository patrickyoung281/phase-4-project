import React, { useState } from "react";

function Register () {

    const [registerUsername, setRegisterUsername] = useState("");

    function handleSubmitRegister(e) {
        e.preventDefault();
        fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: registerUsername }),
        })
        .then((r) => r.json())
        .then((r) => console.log(r))
    }


    return (
        <div>
            <h2>Register Here!</h2>

<form onSubmit={handleSubmitRegister}>
    <label>
        Create Username:
        <input
        type="text"
        value={registerUsername}
        onChange={(e) => setRegisterUsername(e.target.value)}
        ></input>
    </label>
    <button
    type="submit">Register</button>
</form>

        </div>
    )
}

export default Register 