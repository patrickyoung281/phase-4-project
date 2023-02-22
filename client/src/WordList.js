import React, { useState } from "react";
import EditEntry from "./EditEntry";

function WordList ( {displayWords, onClick} ) {


    const [editEntry, setEditEntry] = useState(false)

    function onEditEntry () {
        setEditEntry(current => !current)
    }


    return(
        <div>
            {displayWords.map((entry)=>(
            <div>
                <div className="Entries" key={entry.id}>
                    <h3 className="Words">{entry.word_entry}</h3>
                    <div className="ColumnsContainer">
                    <ul className="List">
                        <li><strong>Gender:</strong> <em>{entry.gender}</em></li>
                        <li><strong>Plural:</strong> {entry.plural}</li>
                        <li><strong>Part of Speech:</strong> {entry.part_of_speech}</li>
                        <li><strong>English Translation:</strong> {entry.english_translation}</li>
                        <li><strong>Example Sentence:</strong> {entry.example_sentence}</li>
                    </ul>
                    <button className="button" onClick={() => onClick(entry.id)}>Click here to see synonyms!</button>
                    <button onClick={() => onEditEntry()}>Click Here to Edit this Entry</button>
                    <div>
                        {editEntry ? <EditEntry /> : null}
                    </div>
                    </div>
                    <img className="images" src={entry.image_url} alt=""/>
                    <br />
                </div>
                <hr />
            </div>
            ))}
        </div>
    )
}

export default WordList;