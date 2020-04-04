import React from 'react';
import GermanList from './data/german.json'

// DOTY is the current Day Of The Year, used to get the position in the JSON array
const ContentBody = ({DOTY}) => {

    // Sorting the json in a somewhat random order so the words don't appear in alphabetical order
    const OrderedList = GermanList.sort((a, b) => a.sentence > b.sentence ? 1 : -1);

    return(
        <div className="flexCont">
            <div className="wordsCont">
                <h2>{ OrderedList[DOTY].wordDE }</h2>
                <h3>{ OrderedList[DOTY].wordEN }</h3>
            </div>
            <div className="senCont">
                <p className="is-size-5">{ OrderedList[DOTY].type } - <em>{ OrderedList[DOTY].sentence }</em></p>
            </div>
        </div>
    )
}

export default ContentBody;