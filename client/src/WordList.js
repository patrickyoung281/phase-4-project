import React from "react";

function WordList ( {displayWords, onClick} ) {

    return(
        <div>
            {displayWords.map((entry)=>(
            <div>
                <div className="Entries" key={entry.id}>
                <h3 className="Words" onClick={() => onClick(entry.id)}>Word: {entry.word_entry}</h3>
                <h3>Gender: {entry.gender}</h3>
                <h3>Plural: {entry.plural}</h3>
                <h3>Part of Speech: {entry.part_of_speech}</h3>
                <h3>English Translation: {entry.english_translation}</h3>
                <h3 className="Words">Example Sentence: {entry.example_sentence}</h3>
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