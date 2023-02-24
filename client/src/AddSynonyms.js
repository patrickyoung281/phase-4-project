import React, { useState } from "react";

function AddSynonyms ( {selectedWord, setDisplaySynonyms, displaySynonyms} ) {


const [formData, setFormData] = useState({
    synonym: "",
    gender: "",
    plural: ""
})

function handleChange (e) {
    const name=e.target.name;
    let value=e.target.value
    setFormData({
        ...formData,
        [name]: value
    });
}

function handleSubmit (e) {
    e.preventDefault();
    const submission = {
        ...formData,
        word_id: selectedWord.id
    }
    fetch('/synonyms', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(submission),
    })
    .then((resp)=>resp.json())
    .then((data)=>setDisplaySynonyms([...displaySynonyms, data]))
}

    return (
        <div>
            <h3>Use the form below to add more synonyms to this word.</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Synonym: 
                    <input
                    type="text"
                    name="synonym"
                    placeholder="Enter Synonym Here"
                    onChange={handleChange}
                    ></input>
                </label>
                <br />
                <label>
                    Gender: 
                    <input
                    type="text"
                    name="gender"
                    placeholder="Enter Gender Here"
                    onChange={handleChange}
                    ></input>
                </label>
                <br />
                <label>
                    Plural: 
                    <input
                    type="text"
                    name="plural"
                    placeholder="Enter Plural Here"
                    onChange={handleChange}
                    ></input>
                </label>
                <br />
                <label>
                    <input
                    type="submit"
                    name="submit"
                    value="Create New Synonym">
                    </input>
                </label>
            </form>
        </div>
    )
}

export default AddSynonyms;