import React, { useEffect, useState } from "react";
import WordList from "./WordList";
import WordDetails from "./WordDetails";


function Thesaurus () {

    const [displayWords, setDisplayWords] = useState([])
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
    }, [])

    return (
        <div>
            <h2 className="headers">You can view the entire Thesaurus here!</h2>
            {selectedWord ? (
                <div>
                <WordDetails 
                    selectedWord={selectedWord}
                    backToWordList={backToWordList} 
                    />
            </div>
            ) : (
                <div>
                    <WordList 
                    displayWords={displayWords} onClick={handleClick}/>
                </div>
            )}
        </div>
    );
}
export default Thesaurus;