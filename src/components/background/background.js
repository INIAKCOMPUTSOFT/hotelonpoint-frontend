import React from 'react';
import SearchBar from '../SearchBar/searchbar';
import './background.css';
import background from './searchbackgroundimages/hoomage.jpg';


var sectionStyle = {
    width: "100%",
    height: "320px",
    padding:'45px',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    marginBottom:'80px'
  };

function Background(){

    return(
        <div style={sectionStyle}>
        <SearchBar className="sbar" title="Unlock great hotels deals..."/>
        </div> 
    )

}
export default Background