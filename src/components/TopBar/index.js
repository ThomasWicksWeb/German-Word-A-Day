import React from 'react';
import ColorBar from '../ColorBar'
import Slider from '../Slider'
import ViewPrev from '../ViewPrev'

const TopBar = ({buttonText, handleViewPrev}) => {
    return(
        <div>
            <ColorBar />
            <ViewPrev buttonText={buttonText} handleViewPrev={handleViewPrev} />
            <Slider />
        </div>
    );
}

export default TopBar;