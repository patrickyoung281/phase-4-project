import React, { useState } from "react";

function EditEntry ( { displayWords, setDisplayWords, id, word, gender, plural, part_of_speech, english_translation, example_sentence} ) {

const [formData, setFormData] =useState ({
    id: id,
    word_entry: word,
    gender: gender,
    plural: plural,
    part_of_speech: part_of_speech,
    english_translation: english_translation,
    example_sentence: example_sentence
});

function handleChange(e) {
    const name=e.target.name;
    const value=e.target.value;
    setFormData({
        ...formData,
        [name]:value
    })
}


function handleSubmit (e) {
    e.preventDefault();
    fetch(`/words/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData)
    })
    .then((resp)=>resp.json())
    .then((data)=>updateEntry(data))
}

function updateEntry (data) {
    const updatedEntry = displayWords.map(entry=> {
        return entry.id === data.id ? data : entry
    })
    setDisplayWords(updatedEntry)
}

    return (
        <div>
            <h3>Hello! Edit This entry here.</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Word:
                    <input
                    type="text"
                    name="word_entry"
                    value={formData.word_entry}
                    onChange={handleChange}>
                    </input>
                </label>
                <label>
                    Gender:
                    <input
                    type="text"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}>
                    </input>
                </label>
                <label>
                    Plural:
                    <input
                    type="text"
                    name="plural"
                    value={formData.plural}
                    onChange={handleChange}>
                    </input>
                </label>
                <label>
                    Part of Speech:
                    <input
                    type="text"
                    name="part_of_speech"
                    value={formData.part_of_speech}
                    onChange={handleChange}>
                    </input>
                </label>
                <label>
                    English Translation:
                    <input
                    type="text"
                    name="english_tranlation"
                    value={formData.english_translation}
                    onChange={handleChange}>
                    </input>
                </label>
                <label>
                    Example Sentence:
                    <input
                    type="text"
                    name="example_sentence"
                    value={formData.example_sentence}
                    onChange={handleChange}>
                    </input>
                </label>
                <br />
                <input
                type="submit"
                name="submit"
                value="Edit This Entry">
                </input>
            </form>
        </div>
    )
}

export default EditEntry;