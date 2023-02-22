import React from "react";

function WordDetails (  {selectedWord, backToWordList} ) {

    return (
        <div>
            <div className="Entries">
                <h3>{selectedWord.id}</h3>
                <h3 className="Words">Word: {selectedWord.word_entry}</h3>
                <h3 className="Words">Example Sentence: {selectedWord.example_sentence}</h3>
                <img className="images" src={selectedWord.image_url} alt=""/>
            </div>
            <hr></hr>
            <div className="BackToListButtons">
                <button onClick={()=>backToWordList()}>Back to Thesaurus</button>
            </div>
        </div>
    )
}

export default WordDetails;