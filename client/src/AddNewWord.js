import React, { useState } from "react";

function AddNewWord () {

const [formData, setFormData] = useState({
    word_entry: "",
    definition: "",
    image_url: "",
    example_sentence: "",
    gender: "",
    plural: "",
    part_of_speech: "",
    english_translation: ""
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
    fetch("/words", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
    .then((resp)=>resp.json())
    .then((data)=>console.log(data))
}

    return (
        <div>
            <h3 className="form">Use this form to add a new word to the thesaurus!</h3>
            <form onSubmit={handleSubmit} className="form">
                <label className="labels">
                    Word:
                    <input type="text"
                    onChange={handleChange}
                    name="word_entry"
                    value={formData.word_entry}
                    placeholder="Word">
                    </input>
                </label>
                <br />
                <label className="labels">
                    Definition:
                    <input type="text"
                    onChange={handleChange}
                    name="definition"
                    value={formData.definition}
                    placeholder="Definition">
                    </input>
                </label>
                <br />
                <label className="labels">
                    Image URL
                    <input type="text"
                    onChange={handleChange}
                    name="image_url"
                    value={formData.image_url}
                    placeholder="Image URL">
                    </input>
                </label>
                <br />
                <label className="labels">
                    Example Sentence:
                    <input type="text"
                    onChange={handleChange}
                    name="example_sentence"
                    value={formData.example_sentence}
                    placeholder="Example Sentence">
                    </input>
                </label>
                <br />
                <label className="labels">
                    Gender:
                    <input type="text"
                    onChange={handleChange}
                    name="gender"
                    value={formData.gender}
                    placeholder="Enter m, f, n, or n/a">
                    </input>
                </label>
                <br />
                <label className="labels">
                    Plural:
                    <input type="text"
                    onChange={handleChange}
                    name="plural"
                    value={formData.plural}
                    placeholder="Plural">
                    </input>
                </label>
                <br />
                <label className="labels">
                    Part of Speech:
                    <input type="text"
                    onChange={handleChange}
                    name="part_of_speech"
                    value={formData.part_of_speech}
                    placeholder="Part of Speech">
                    </input>
                </label>
                <br />
                <label className="labels">
                    English Translation:
                    <input type="text"
                    onChange={handleChange}
                    name="english_translation"
                    value={formData.english_translation}
                    placeholder="English Translation">
                    </input>
                </label>
                <br />
                <input
                type="submit"
                name="submit"
                value="Create New Thesaurus Entry"
                >
                </input>
            </form>
        </div>
    )
}

export default AddNewWord;