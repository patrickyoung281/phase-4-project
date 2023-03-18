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
        body: JSON.stringify({ user_rating: rating }),
    })
    .then((resp) => resp.json())
    .then((data) => {
        console.log("rating", data);
        const updatedSynonyms = displaySynonyms.map((entry) => {
            if (entry.id === synonymWord.id) {
                const updatedEntry = {
                  ...entry,
                  user_ratings: [...(entry.user_ratings || []), data.user_rating],
                };
                return updatedEntry;
            } else {
                return entry;
            }
        });
        setDisplaySynonyms(updatedSynonyms);
    });
}

const calculateAverageRating = (synonymWord) => {
    const allRatings = [...(synonymWord.user_ratings || []), ...(synonymWord.ratings || [])];
    const numRatings = allRatings.length;
    if (numRatings === 0) {
      return null;
    }
    const sum = allRatings.reduce((total, rating) => total + rating, 0);
    const average = Math.round((sum / numRatings))
    return isNaN(average) ? null : average;
  };

const showSynonyms = Array.isArray(displaySynonyms)? displaySynonyms.map((entry, index)=>{
    const avgRating = calculateAverageRating(entry);
    console.log('avgRating:', avgRating);
    return <ol key={entry.id}>
            <li>{entry.synonym}</li>
                <ul>
                    <li><strong>Gender:</strong> <em>{entry.gender}</em></li>
                    <li><strong>Plural:</strong> {entry.plural}</li>
                    <li><strong>User Rating:</strong>{""}
                    {avgRating !== null ? avgRating : "N/A"}</li>
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