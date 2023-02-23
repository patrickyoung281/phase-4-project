import React, { useState } from "react";
import EditEntry from "./EditEntry";

function WordList ( {displayWords, setDisplayWords, onClick} ) {


    const [editEntry, setEditEntry] = useState(null)

    function onEditEntry (id) {
        setEditEntry(id)
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
                    <div className="ButtonsContainer">
                    <button onClick={() => onClick(entry.id)}>Click here to see synonyms!</button>
                    <button onClick={() => onEditEntry(entry.id)}>Click Here to Edit this Entry</button>
                    </div>
                    <div>
                        {editEntry === entry.id ? <EditEntry displayWords={displayWords} setDisplayWords={setDisplayWords} id={entry.id} word={entry.word_entry} gender={entry.gender} plural={entry.plural} part_of_speech={entry.part_of_speech} english_translation={entry.english_translation} example_sentence={entry.example_sentence} /> : null}
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