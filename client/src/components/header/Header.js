import React from 'react';
import './style.css';
import desktopImage from './desktopImage.jpg';
import mobileImage from './mobileImage.jpg';

const Header = () => {
  
    const imageUrl = window.innerWidth = 1200 ? desktopImage : mobileImage;
    return (
      
        <div className="App Jumbotron" style={{backgroundImage: `url(${imageUrl})` }}>
            <div className="App-content">
                <h1 className="Title">Bill Tracker</h1>
                <h4 className="todaysDate">Todays Date: 00/00/00</h4>
            </div>
        </div>
    );
};

export default Header;