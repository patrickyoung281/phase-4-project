import React, { useEffect, useState } from "react";

function AddNewWord ( {setErrorMessages, renderErrors, displayWords, setDisplayWords} ) {

useEffect(()=>{
    fetch("/synonyms")
    .then((resp)=>resp.json())
    .then((data)=>setSynonyms(data))
},[])

const [synonyms, setSynonyms] = useState([])
const [selectedSynonymId, setSelectedSynonymId] = useState(null)

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
    let value=e.target.value;
    setFormData({
        ...formData,
        [name]: value
    });
} 

const handleSynonymSelect = (e) => {
    setSelectedSynonymId(e.target.value);
};

function handleSubmit (e) {
    e.preventDefault();
    const submission = {
        ...formData
    }
    
    if (selectedSynonymId) {
        submission.synonym_id = selectedSynonymId;
    }

    fetch("/words", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(submission),
    })
    .then((resp)=>{
        if(resp.ok) {
            return resp.json();
        } else {
            return resp.json().then((errors)=> {
                throw errors;
            })
        }
    })
    .then((data)=> {
        setDisplayWords([...displayWords, data]);
        setErrorMessages([])
    })
    .catch((errors)=> {
        setErrorMessages(errors && errors.errors ? errors.errors : null)
    })
}

    return (
        <div>
            <h3 className="form">Use this form to add a new word to the thesaurus!</h3>
            <div>{renderErrors()}</div>
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
                <label className="labels">
                    Synonyms: 
                    <select 
                    name="synonym_id"
                    onChange={handleSynonymSelect}
                    >
                        <option value="">Select</option>
                    {Array.isArray(synonyms) && synonyms.map((entry)=>(
                        <option key={entry.id} value={entry.id}>{entry.synonym}</option>
                    ))}
                    </select>
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