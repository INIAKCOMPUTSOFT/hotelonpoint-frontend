import './card.css'

import React from 'react'

function Card(props){

    return(
        <div>
        <div class="card scard">
        <div class="card-body">
        <h5 class="card-title">{props.Title}</h5>
        <p class="card-text">{props.content}</p> 
        </div>
      </div>
        </div>
    )

}
export default Card