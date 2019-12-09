import React from 'react'
import { Link } from 'react-router-dom'



function Blogdisplay(props){
return(
<>
                <div className="card" >
                <img style={{display: props.singlePic ? 'block' : 'none'}} className="card-img-top" src={props.singlePic} alt="Card image cap" height="400"/>
                            <div className="card-body">
                              <h5 className="card-title">{props.title}</h5>
                              <Link to={`/singleblog/${props.passing}`}><button className="btn btn-primary">Read more</button></Link>
                            </div>
                    </div>

                    <br/>
</>
)
}


export default Blogdisplay