import React from 'react';
import SmcardShadow from './smallcard';

function CardCarrier(props){
    return(
        <>
         <h2 className="text-center">{props.h2}</h2>
        
        <div className="card-deck">
            <SmcardShadow/>
            <SmcardShadow/>
            <SmcardShadow/>
            <SmcardShadow/>
        </div>
    </>
    )
}

export default CardCarrier