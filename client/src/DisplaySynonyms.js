import React, { useEffect, useState } from "react";
import AddSynonyms from "./AddSynonyms";

function DisplaySynonyms ( {selectedWord, setErrorMessages, renderErrors} ) {

const [displaySynonyms, setDisplaySynonyms] = useState([]);
const [averageRatings, setAverageRatings] = useState({});
const [displayAssociatedWords, setDisplayAssociatedWords] =useState({});

useEffect (()=>{
    fetch(`/words/${selectedWord.id}/synonyms`)
    .then((resp)=>resp.json())
    .then((data)=>{
      setDisplaySynonyms(data);
      const ratings = {};
      data.forEach((synonym) => {
        ratings[synonym.id] = calculateAverageRating(synonym);
      });
      setAverageRatings(ratings);
    });
  },[selectedWord]);


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
            const updatedAvgRating = calculateAverageRating(updatedEntry);
            setAverageRatings({
              ...averageRatings,
              [updatedEntry.id]: updatedAvgRating,
            });
            return updatedEntry;
          } else {
            return entry;
          }
        });
        setDisplaySynonyms(updatedSynonyms);
      });
  };

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

const handleDisplayAssociatedWords = (synonymID)=>{
  const showAssociatedWords = displayAssociatedWords[synonymID];
  if (showAssociatedWords) {
    setDisplayAssociatedWords({
      ...displayAssociatedWords,
      [synonymID]: null
    });
  } else {
  fetch(`/synonyms/${synonymID}/words`)
    .then((resp)=>resp.json())
    .then((data)=>{
      setDisplayAssociatedWords({
        ...displayAssociatedWords,
        [synonymID]: data
      })
    })
}
}
const showSynonyms = Array.isArray(displaySynonyms)? displaySynonyms.map((entry, index)=>{
    console.log("displaySynonyms", displaySynonyms)
    const avgRating = calculateAverageRating(entry);
    const showAssociatedWords = displayAssociatedWords[entry.id];
    return <ol key={entry.id}>
            <div key={entry.id}>{entry.synonym}</div>
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
                    <li><div>
                      <button onClick={()=>handleDisplayAssociatedWords(entry.id)}>
                        {showAssociatedWords ? 'Hide Associated Words' : 'See Associated Words'}
                        </button>
                        <span>Click here to view other main words related to this synonym.</span>
                      </div>
                      {showAssociatedWords && (
                        <ul>
                          {entry.words.map(word=>(
                            <li key={word.id}>{word.word_entry}</li>
                          ))}
                        </ul>
                      )}</li>
                </ul>
            </ol>
}) : null;

    return (
        <div>
            <div>{showSynonyms}</div>
            <div>
                <AddSynonyms 
                selectedWord={selectedWord} 
                setDisplaySynonyms={setDisplaySynonyms} 
                displaySynonyms={displaySynonyms}
                setErrorMessages={setErrorMessages} 
                renderErrors={renderErrors}/>
            </div>
        </div>
    )
}

export default DisplaySynonyms;