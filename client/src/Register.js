import React, { useState, useEffect } from "react";

function Register () {

    const [registerUsername, setRegisterUsername] = useState("");
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errorMessages, setErrorMessages] = useState([])

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
        .then((r) => {
            if(r.ok) {
                return r.json();
            } else {
                return r.json().then((errors)=> {
                    throw errors;
                })
            }
        })
        .then((data)=> {
            setErrorMessages([])
        })
        .catch((errors)=> {
            console.log("Caught errors:", errors);
            setErrorMessages(errors && errors.errors ? errors.errors : null)
        })
    }


    useEffect(() => {
        console.log("errorMessages", errorMessages)
    }, [errorMessages]);


function renderErrors () {
    console.log("errorMessages", errorMessages)
    if (errorMessages && errorMessages.length>0) {
        return (

                <ul>
                    {errorMessages.map((error, index) => (
                        <li key={index}>{error}</li>
                    ))}
                </ul>

        )
    }
    else return null
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
<div>{renderErrors()}</div>
        </div>
    )
}

export default Register 