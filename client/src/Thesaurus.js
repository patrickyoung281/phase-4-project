import React, { useEffect, useState } from "react";
import WordList from "./WordList";
import WordDetails from "./WordDetails";


function Thesaurus ( {setErrorMessages, renderErrors, displayWords, setDisplayWords} ) {

    const [selectedWord, setSelectedWord] = useState(false)

    const handleClick = (id) => {
        fetch(`/words/${id}`)
        .then((resp)=>resp.json())
        .then((data)=>setSelectedWord(data))
    }

    const backToWordList = () => setSelectedWord(false)

    useEffect(()=>{
        fetch("/words")
        .then((resp)=>resp.json())
        .then((data)=>setDisplayWords(data));
    }, [setDisplayWords])
console.log("display", displayWords)
    return (
        <div>
            <h2 className="headers">You can view the entire Thesaurus here!</h2>
            <hr />
            {selectedWord ? (
                <div>
                <WordDetails 
                    selectedWord={selectedWord}
                    backToWordList={backToWordList}
                    setErrorMessages={setErrorMessages} 
                    renderErrors={renderErrors} 
                    />
            </div>
            ) : (
                <div>
                    <WordList 
                    displayWords={displayWords} 
                    setDisplayWords={setDisplayWords} 
                    onClick={handleClick}
                    setErrorMessages={setErrorMessages} 
                    renderErrors={renderErrors} />
                </div>
            )}
        </div>
    );
}
export default Thesaurus;