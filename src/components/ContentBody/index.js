import React from 'react';
import GermanList from './data/german.json'

const ContentBody = ({DOTY}) => {

    // Sorting the json in a somewhat random order so the words don't appear in alphabetical order
    const OrderedList = GermanList.sort((a, b) => a.sentence > b.sentence ? 1 : -1);

    return(
        <div class="flexCont">
            <div class="wordsCont">
                <h2>{ OrderedList[DOTY].wordDE }</h2>
                <h3>{ OrderedList[DOTY].wordEN }</h3>
            </div>
            <div class="senCont">
                <p class="is-size-5">{ OrderedList[DOTY].type } - <em>{ OrderedList[DOTY].sentence }</em></p>
            </div>
        </div>
    )
}

export default ContentBody;