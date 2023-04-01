import React from "react";
import DisplaySynonyms from "./DisplaySynonyms";

function WordDetails (  {selectedWord, backToWordList, setErrorMessages, renderErrors} ) {

    return (
        <div>
            <div className="Entries">
            <h3 className="Words">{selectedWord.word_entry}</h3>
                    <ul className="List">
                        <li><strong>Gender:</strong> <em>{selectedWord.gender}</em></li>
                        <li><strong>Plural:</strong> {selectedWord.plural}</li>
                        <li><strong>Part of Speech:</strong> {selectedWord.part_of_speech}</li>
                        <li><strong>English Translation:</strong> {selectedWord.english_translation}</li>
                        <li><strong>Example Sentence:</strong> {selectedWord.example_sentence}</li>
                    </ul>
                        <img className="images" src={selectedWord.image_url} alt=""/>
                </div>
            <hr></hr>
            <h3>List of Synonyms</h3>
            <DisplaySynonyms 
            selectedWord={selectedWord}
            setErrorMessages={setErrorMessages} 
            renderErrors={renderErrors} />
            <div className="BackToListButtons">
                <button onClick={()=>backToWordList()}>Back to Thesaurus</button>
            </div>
        </div>
    )
}

export default WordDetails;