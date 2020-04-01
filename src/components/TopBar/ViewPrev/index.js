import React from 'react';

import './ViewPrev.module.scss';

const ViewPrev = ({handleViewPrev, buttonText}) => {
    return(
        <button id="ViewPrevButton" onClick={() => handleViewPrev()} class="button is-text">{ buttonText }</button>
    )
}

export default ViewPrev;