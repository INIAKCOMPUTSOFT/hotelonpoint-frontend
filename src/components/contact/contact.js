import React from 'react'
import ContactComponent from './contactcomponent'

function Contact(){

    return(


    
<div className="container">

<ContactComponent
Header="Head Office"

PhysicalAddress="Physical Address"
RoadNo="Plot 5A Road 2"
Location="ofF Ebony road"
City="Port Harcourt"

PostalAddress="Postal Address"
ZipCode="Zip code : 500272"

Href="#hostoffice"
Id="hostoffice"

/>

<ContactComponent
Header="Branch Office"

PhysicalAddress="Physical Address"
RoadNo="Cedar House"
Location="First floor 41 Airport Road"
City="Warri, Delta State"

PostalAddress="Postal Address"
ZipCode="Zip code : 500272"
Href="#branchoffice"
Id="branchoffice"
/>
</div>
    )
}

export default Contact