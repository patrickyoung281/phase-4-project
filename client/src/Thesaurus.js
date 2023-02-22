import React, { useEffect, useState } from "react";
import EntryCreator from "./EntryCreator.js"


function Thesaurus () {

    const [displayWords, setDisplayWords] = useState([])

    useEffect(()=>{
        fetch("/words")
        .then((resp)=>resp.json())
        .then((data)=>setDisplayWords(data));
    }, [])

    const thesaurusList = displayWords.map((entry)=>{
        return <EntryCreator id={entry.id} word_entry={entry.word_entry} image_url={entry.image_url} example_sentence={entry.example_sentence} />
    })

    return (
        <div>
            <h2 className="headers">You can view the entire Thesaurus here!</h2>
            <h3>{thesaurusList}</h3>
        </div>
    )
};

export default Thesaurus;