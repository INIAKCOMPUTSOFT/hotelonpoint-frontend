import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { faVrCardboard } from "@fortawesome/free-solid-svg-icons";
import ContactForm from './contactform'

function ContactComponent(props){


return(
<div>

<div class="mb-4">
<h4>{props.Header}</h4>

    <div class="border" >
    <div class="row">
        <div class="col-md-4">

        </div>
        <div class="col-md-4">
        <p><b>{props.PhysicalAddress}</b></p>
        <p>{props.RoadNo} <br/>{props.Location}<br/>{props.City}</p>
        
        </div>
        <div class="col-md-4">
        <p><b>{props.PostalAddress}</b></p>
        <p>{props.ZipCode}</p> 
        </div>
    </div>
    <hr/>
    <div class="mb-2 ml-1">
    <span class="mr-1 btn btn-secondary"
     data-toggle="collapse"
      href={props.Href}
       aria-expanded="false"
        aria-controls="collapseExample">Email</span>                 
    <span class="mr-1 btn btn-secondary">Check on VR  <FontAwesomeIcon className="menuicon" icon={faVrCardboard} /></span>
    <span class="mr-1 btn btn-secondary">Get Directions</span>
    </div>
    <div class="collapse" id={props.Id}>
  <div class="card card-body">
   <ContactForm/>
  </div>
</div>
    </div>
    </div>

</div>
)




}

export default ContactComponent

