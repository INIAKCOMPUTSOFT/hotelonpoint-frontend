import './background.css';

import React from 'react';
import SearchBar from '../SearchBar/searchbar';
import background from './searchbackgroundimages/hoomage.jpg';

var sectionStyle = {
    width: "100%",
    height: "auto",
    padding:'45px',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    marginBottom:'80px'
  };

function Background(){

    return(
        <div style={sectionStyle}>
    <h1 className="unlock">
        <span className='unique'>Unlock </span>
          exclusive hotel deals  
         <span className='unique'> !!!!</span></h1>
        <SearchBar className="sbar" />
        </div> 
    )

}
export default Background