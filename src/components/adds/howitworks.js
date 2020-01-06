import React from 'react'
import ima from './svgimages/calender.png'
import imb from './svgimages/handkey.png'
import imc from './svgimages/savecalender.png'
import imd from './svgimages/tag.png'

function How(){

    return(
        <div class=" jumbotron p-3 bg-white text-dark rounded-0">
        <h3 class=""> How it works</h3>
        <br/>
        <div class="row">
            <div class="col-md-6 ">
                <span className="d-inline-flex">
                <img src={imb} alt="imb" className="mr-3" width="100" height="100"/>
                <div class="card border-0">
               <p>Free registration</p>
               <p>Start your partnership with hotel-on-point.comby filling out this form 
               <br/>-it takes less than a minute and is completely free
                </p>

                </div>
                </span>
            </div>
            <div class="col-md-6">
            <span className="d-inline-flex">
                <img src={imd} alt="imb" className="mr-3" width="100" height="100"/>
                <div class="card border-0">
                        <p>Contact within two hours</p>
                        <p>Our expert team will send you a tailored offer and ask for a few more details 
                        <br/> to get you started.
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
                            <p>Setting your property up</p>
                            <p>You’ll receive an online contract to sign, we’ll also need your payment and billing details.
                                <br/> Next, you’ll need to provide us with 20 high resolution photos,
                                 <br/>your best rates and availability. We’ll take care of the rest.
                             </p>
                    </div>
                    </span>
                </div>
                <div class="col-md-6">
                <span className="d-inline-flex">
                <img src={imc} alt="imb" className="mr-3" width="100" height="100"/>
                    <div class="card  border-0">
                            <p>Final check</p>
                            <p>We’ll call you for a final check before you go live across all of our sites
                               <br/>  (including Hotels.com, Expedia.com etc.) You can then manage your property
                                <br/>  any time online.
                             </p> 
                    </div>  
                    </span>  
                </div>
            </div>
    </div>
    )

}

export default How