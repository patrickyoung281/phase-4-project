import React, { useState } from "react";

function Register () {

    const [registerUsername, setRegisterUsername] = useState("");
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    function handleSubmitRegister(e) {
        e.preventDefault();
        fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                username: registerUsername,
                password,
                password_confirmation: passwordConfirmation, 
            }),
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
    type="submit">Register</button>
</form>

        </div>
    )
}

export default Register 