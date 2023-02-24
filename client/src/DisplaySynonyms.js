import React, { useEffect, useState } from "react";
import AddSynonyms from "./AddSynonyms";

function DisplaySynonyms ( {selectedWord} ) {

const [displaySynonyms, setDisplaySynonyms] = useState([])

useEffect (()=>{
    fetch(`/words/${selectedWord.id}/synonyms`)
    .then((resp)=>resp.json())
    .then((data)=>setDisplaySynonyms(data))
}, [selectedWord])

const showSynonyms = Array.isArray(displaySynonyms)? displaySynonyms.map((entry, index)=>{
    return <ol start={index+1}>
            <li key={index}>{entry.synonym}</li>
                <ul>
                    <li><strong>Gender:</strong> <em>{entry.gender}</em></li>
                    <li><strong>Plural:</strong> {entry.plural}</li>
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