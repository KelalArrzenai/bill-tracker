import React from 'react';
import './style.css';
import desktopImage from './header.jpg';
import mobileImage from './header.jpg';

const Background = () => {
    const imageUrl = window.innerWidth >= 1200 ? desktopImage : mobileImage;

    return (
        <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
            <div className="App-content">
                <h1>Bill Tracker</h1>
                <p>Keep track of monthly bills</p>
            </div>
        </div>
    );
};

export default Background;