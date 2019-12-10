import React from 'react'
import background from './searchbackgroundimages/picture1.jpg'
import SearchBar from '../SearchBar/searchbar' 
import './background.css'

var sectionStyle = {
    width: "100%",
    height: "400px",
    padding:'45px',
    backgroundImage: `url(${background})`,
    backgroundSize: 'auto',
    marginBottom:'80px'
  };

function Background(){

    return(
        <div style={sectionStyle}>
        <SearchBar className="sbar" />
        </div> 
    )

}
export default Background