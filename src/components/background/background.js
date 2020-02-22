import './background.css';

import React from 'react';
import SearchBar from '../SearchBar/searchbar';
import background from './searchbackgroundimages/hoomage.jpg';

var sectionStyle = {
    padding:'30px',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
  };

function Background(){

    return(
        <div style={sectionStyle} className="bgcover">
        <SearchBar className="sbar" title="Unlock great hotels deals..."/>
        </div> 
    )

}
export default Background