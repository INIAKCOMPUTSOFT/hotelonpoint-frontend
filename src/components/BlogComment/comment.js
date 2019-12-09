import React from 'react'




function Commentdisplay(props){
return(
<>
                <div className="card border shadow-lg bg-white rounded" >
                            <div className="card-body" key={props.key}>
                              <h5 className="card-title">{props.comment}</h5>
                              <p className="card-title">{props.name}</p>
                            </div>
                    </div>

                    <br/>
</>
)
}


export default Commentdisplay