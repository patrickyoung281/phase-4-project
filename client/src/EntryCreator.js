import React from "react";

function EntryCreator ( {id, word_entry, image_url, example_sentence} ) {

    return(
        <div>
            <div className="Entries">
                <h3>{id}</h3>
                <h3 className="Words">Word: {word_entry}</h3>
                <h3 className="Words">Example Sentence: {example_sentence}</h3>
                <img className="images" src={image_url}/>
            </div>
            <hr></hr>
        </div>
    )
}

export default EntryCreator;