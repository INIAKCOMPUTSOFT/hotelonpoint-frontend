import React from 'react'
import imc from './svgimages/live.svg'
import imb from './svgimages/uploadhouse.svg'
import ima from './svgimages/approve.svg'
import imd from './svgimages/photo-camera.svg'

function How(props){

    return(
        <div class=" jumbotron p-3 bg-white text-dark rounded-0">
        <h3 class="">Join us in 4 steps </h3>
        <br/>
        <div class="row">
            <div class="col-md-6 ">
                <span className="d-inline-flex">
                <img src={imb} alt="imb" className="mr-3" width="100" height="100"/>
                <div class="card border-0">
               <p>1. Register for free </p>
               <p>
               <br/>
               <br/> 
                </p>

                </div>
                </span>
            </div>
            <div class="col-md-6">
            <span className="d-inline-flex">
                <img src={imd} alt="imb" className="mr-3" width="100" height="100"/>
                <div class="card border-0">
                        <p>2. Upload property picture and information</p>
                        <p>
                        <br/>
                         </p>
                </div>
                </span>    
            </div>
        </div>
        <br/>
        <br/>

        <div class="row">
                <div class="col-md-6 ">
                <span className="d-inline-flex">
                <img src={ima} alt="imb" className="mr-3" width="100" height="100"/>
                    <div class="card  border-0">
                            <p>3. Approval final check</p>
                            <p>
                                <br/> 
                                 <br/>
                             </p>
                    </div>
                    </span>
                </div>
                <div class="col-md-6">
                <span className="d-inline-flex">
                <img src={imc} alt="imb" className="mr-3" width="100" height="100"/>
                    <div class="card  border-0">
                            <p>4. Your property goes live.  </p>
                            <p>Please <button className="btn btn-primary btn-sm"><a href={props.id} className="text-light">get started </a></button>
                               <br/>  
                                <br/>  
                             </p> 
                    </div>  
                    </span>  
                </div>
            </div>
    </div>
    )

}

export default How