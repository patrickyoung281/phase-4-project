import React, { useEffect, useState } from "react";
import AddSynonyms from "./AddSynonyms";

function DisplaySynonyms ( {selectedWord} ) {

const [displaySynonyms, setDisplaySynonyms] = useState([])

useEffect (()=>{
    fetch(`/words/${selectedWord.id}/synonyms`)
    .then((resp)=>resp.json())
    .then((data)=>setDisplaySynonyms(data))
}, [selectedWord])


const handleRate = (synonymWord, rating) => {
    fetch(`/words/${selectedWord.id}/synonyms/${synonymWord.id}/rate`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ synonym_word: { user_rating: rating } }),
    })
    .then((resp) => resp.json())
    .then((data) => {
        const updatedSynonymWord = {
            ...synonymWord, 
            user_rating: data.user_rating,
        };
        const index = displaySynonyms.findIndex(
            (entry) => entry.id === updatedSynonymWord.id
        );
        const updatedDisplaySynonyms = [
            ...displaySynonyms.slice(0, index),
            updatedSynonymWord,
            ...displaySynonyms.slice(index+1),
        ]
        setDisplaySynonyms(updatedDisplaySynonyms)
    })
}


const showSynonyms = Array.isArray(displaySynonyms)? displaySynonyms.map((entry, index)=>{
    return <ol start={index+1}>
            <li key={index}>{entry.synonym}</li>
                <ul>
                    <li><strong>Gender:</strong> <em>{entry.gender}</em></li>
                    <li><strong>Plural:</strong> {entry.plural}</li>
                    <li><strong>User Rating:</strong>{ entry.user_rating }</li>
                    <li>
                        <form onSubmit={(e) => {
                        e.preventDefault();
                        handleRate(entry, e.target.rating.value)
                        }}>
                            <label>
                            Rate
                            <input
                            type="number"
                            name="rating"
                            min="1"
                            max="5"
                            ></input>
                            </label>
                            <button
                            type="submit">Rate</button>
                        </form>
                    </li>
                </ul>
            </ol>
}) : null;
    return (
        <div>
            <div>{showSynonyms}</div>
            <div>
                <AddSynonyms selectedWord={selectedWord} setDisplaySynonyms={setDisplaySynonyms} displaySynonyms={displaySynonyms}/>
            </div>
        </div>
    )
}

export default DisplaySynonyms;