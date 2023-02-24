import React, { useEffect, useState } from "react";

function DisplaySynonyms ( {selectedWord} ) {

const [displaySynonyms, setDisplaySynonyms] = useState([])

useEffect (()=>{
    fetch(`/words/${selectedWord.id}/synonyms`)
    .then((resp)=>resp.json())
    .then((data)=>setDisplaySynonyms(data))
}, [selectedWord])

const showSynonyms = Array.isArray(displaySynonyms)? displaySynonyms.map((entry)=>{
    return <li key={entry.id}>{entry.synonym}</li>
}) : null;
    return (
        <div>
            {showSynonyms}
        </div>
    )
}

export default DisplaySynonyms;