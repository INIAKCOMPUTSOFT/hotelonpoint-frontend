import React from 'react'
import Poor from './emojis/poor.png';
import Good from './emojis/good.png';
import Verygood from './emojis/verygood.png'
import Excellent  from './emojis/excellent.png';
import { connect } from 'react-redux'
import Axios from 'axios'

class Review extends React.Component{
  constructor(){
    super();
    this.state={
      travellpurpose:'',
      travellertype:'',
      travellpet:'',
      staff: "",
      facilities:0,
      cleanlines:0,
      comfort:0,
      valueofmoney:0,
      location:0,
      likes:"",
      dislikes:'',
      totalRating:"",
      review:0,
      country:'',
      Hh:[],

  }
  }
  petstate=(value)=>{
    this.setState({travellpet:value})
    console.log(this.state.travellpet)
  }
  staffstate=(value)=>{
    this.setState({staff:value})
  }
  facilitiesstate=(value)=>{
    this.setState({facilities:value})
  }
  cleanlinesstate=(value)=>{
    this.setState({cleanlines:value})
  }
  comfortstate=(value)=>{
    this.setState({comfort:value})
  }
  valueofmoneystate=(value)=>{
    this.setState({valueofmoney:value})
  }
  locationstate=(value)=>{
    this.setState({location:value})
  }

  async componentDidMount() {
    window.scrollTo(0,0);
    const {
      match: { params }
    } = this.props;
    var sentid = params.hotelId;
    // console.log("hotelid is", sentid);

    Axios.get(
      `https://calm-anchorage-14244.herokuapp.com/hotel/${sentid}`
    ).then(result =>
      this.setState({ Hh: result.data.data.hotel })
    )      .catch(err=>{
        if(err.response){
          this.setState({review : err.response.data.message})
        }
      })
    }
  handlechange = (event) => {
    event.preventDefault();
    const { name, value,  } = event.target;
       this.setState({ [name]: value });
    console.log(this.state);
  };

  handlerating=(state,value)=>{
    this.setState({state: value})
    //this.state=value;
    console.log(value,"value",state,'state')
  }
  // console.log(this.handlerating());
submitreviews=(Rate,user)=>{

  const data={
    previewer:user,
    totalRating:Rate,
    Hotelid:this.state.Hh._id
  }

  console.log(data,'data')
}

  render(){
    const {
      user: {userData }
    } = this.props

 const{staff, comfort,facilities,cleanlines,valueofmoney,location,like,dislike,review,totalRating,country} = this.state
 let totalrating=(staff+comfort+facilities+cleanlines+valueofmoney+location)/6;
 let rate =totalrating.toFixed(1)
 function ratestatus(Rate){
  if(Rate <= 1.5){
    return(<>Poor</>)
  }else if(Rate <=3.5){
    return(<>Good</>)
  }else if(Rate <= 5.25){
    return(<>Very Good</>)
  }else{
    return(<>Excellent</>)
  }
 }

 var fullname;
 var imgurl;
 
   if(userData){
      fullname = userData.fullName;
      imgurl = userData.imageUrl
   }
   



 console.log(userData)
 console.log(this.state)
    return(
      <>
      <div className="container">
      <div>
        <p className="h4"><span className="veiw">1</span> Purpose of Trip</p>
        
      <ul class="list-group">
      
        <li class="list-group-item ">
        <div class="custom-control custom-radio">
          <input type="radio" id="customRadio5" onChange={this.handlechange} name="travellpurpose" value="Business" class="custom-control-input"/>
          <label class="custom-control-label" for="customRadio5">Business</label>
          </div>
          </li>
          
          
        <li class="list-group-item">
        <div class="custom-control custom-radio">
        <input type="radio" id="customRadio6" onChange={this.handlechange} name="travellpurpose" value="Leisure" class="custom-control-input"/>
        <label class="custom-control-label" for="customRadio6" >Leisure</label>
        </div>
          </li>
          
          
        <li class="list-group-item">
        <div class="custom-control custom-radio">
        <input type="radio" id="customRadio7" onChange={this.handlechange} name="travellpurpose" value="others" class="custom-control-input"/>
        <label class="custom-control-label" for="customRadio7">Others</label>
        </div>
        </li>
      </ul>
      </div>

      <div>
        <h5> Travel Type</h5>
        
      <ul class="list-group">
        <li class="list-group-item ">
        <div class="custom-control custom-radio">
          <input type="radio" id="customRadio1" onChange={this.handlechange} name="travellertype" value="solo travell" class="custom-control-input"/>
          <label class="custom-control-label" for="customRadio1">Solo Travel</label>
          </div>
          </li>
        <li class="list-group-item">
        <div class="custom-control custom-radio">
        <input type="radio" id="customRadio2" onChange={this.handlechange} name="travellertype" value="group of friends" class="custom-control-input"/>
        <label class="custom-control-label" for="customRadio2">Group of Friends</label>
         </div>
          </li>
        <li class="list-group-item">
        <div class="custom-control custom-radio">
        <input type="radio" id="customRadio3" onChange={this.handlechange} name="travellertype" value="couple"  class="custom-control-input"/>
        <label class="custom-control-label" for="customRadio3">Couple</label>
        </div>
          </li>
        <li class="list-group-item">
        <div class="custom-control custom-radio">
        <input type="radio" id="customRadio4" onChange={this.handlechange} name="travellertype" value="family" class="custom-control-input"/>
        <label class="custom-control-label" for="customRadio4">Family</label>
          </div>
          </li>
      </ul>
      </div>
     <div className="mb-4"> 
      <div className="row">
        <div className="col-md-12">
  <h5> Did you Travel with pet</h5>
  <div class="btn-group btn-block" role="group" aria-label="Basic example">
  <button type="button" onClick={()=>this.petstate("yes")} className={this.state.travellpet==="yes" ? "btn btn-primary" :"btn btn-secondary" }>yes</button>
  <button type="button" onClick={()=>this.petstate("no")} className={this.state.travellpet==="no" ? "btn btn-primary" :"btn btn-secondary" }>No</button>
  </div>
 </div>
</div>
</div>


<div className="mb-5">
<h4 className="mb-5"><span className="veiw">2</span> Rate This Hotel</h4>  
  <p className="h5">Staff</p>
  <div class="btn-group btn-block" role="group" aria-label="First group">
    <button type="button" onClick={()=>this.staffstate(1.75)} class={staff===1.75 ? "btn btn-primary" :"btn btn-secondary" }> <img src={Poor} alt="poor" width="40px" height="40px"/>          </button>
    <button type="button" onClick={()=>this.staffstate(3.5)} class={staff===3.5 ? "btn btn-primary" :"btn btn-secondary" }>   <img src={Good} alt="good" width="40px" height="40px" />        </button>
    <button type="button" onClick={()=>this.staffstate(5.27)} class={staff===5.27 ? "btn btn-primary" :"btn btn-secondary" }> <img src={Verygood} alt="verygood" width="40px" height="40px" />   </button>
    <button type="button" onClick={()=>this.staffstate(7.0)} class={staff===7.0 ? "btn btn-primary" :"btn btn-secondary" }>   <img src={Excellent} alt="excellent" width="40px" height="40px" /> </button>
  </div>

  <p className="h5">Location </p>
  <div class="btn-group btn-block" role="group" aria-label="First group">
    <button type="button" onClick={()=>this.locationstate ( 1.75)} class={location ===1.75 ? "btn btn-primary" :"btn btn-secondary" }><img src={Poor} alt="poor" width="40px" height="40px"/>        </button>
    <button type="button" onClick={()=>this.locationstate ( 3.5)} class={location ===3.5 ? "btn btn-primary" :"btn btn-secondary" }>  <img src={Good} alt="good" width="40px" height="40px" />       </button>
    <button type="button" onClick={()=>this.locationstate ( 5.27)} class={location ===5.27 ? "btn btn-primary" :"btn btn-secondary" }><img src={Verygood} alt="verygood" width="40px" height="40px" />  </button>
    <button type="button" onClick={()=>this.locationstate ( 7.0)} class={location ===7.0 ? "btn btn-primary" :"btn btn-secondary" }>  <img src={Excellent} alt="excellent" width="40px" height="40px" /></button>
  </div>

  <p className="h5">Value of Money</p>
  <div class="btn-group btn-block" role="group" aria-label="First group">
    <button type="button" onClick={()=>this.valueofmoneystate( 1.75)} class={valueofmoney===1.75 ? "btn btn-primary" :"btn btn-secondary" }> <img src={Poor} alt="poor" width="40px" height="40px"/>            </button>
    <button type="button" onClick={()=>this.valueofmoneystate( 3.5)} class={valueofmoney===3.5 ? "btn btn-primary" :"btn btn-secondary" }>   <img src={Good} alt="good" width="40px" height="40px" />        </button>
    <button type="button" onClick={()=>this.valueofmoneystate( 5.27)} class={valueofmoney===5.27 ? "btn btn-primary" :"btn btn-secondary" }> <img src={Verygood} alt="verygood" width="40px" height="40px" />     </button>
    <button type="button" onClick={()=>this.valueofmoneystate( 7.0)} class={valueofmoney===7.0 ? "btn btn-primary" :"btn btn-secondary" }>   <img src={Excellent} alt="excellent" width="40px" height="40px" />  </button>
  </div>

  <p className="h5">Cleanlines</p>
  <div class="btn-group btn-block" role="group" aria-label="First group">
    <button type="button" onClick={()=>this.cleanlinesstate(1.75)} class={cleanlines===1.75 ? "btn btn-primary" :"btn btn-secondary" }> <img src={Poor} alt="poor" width="40px" height="40px"/>           </button>
    <button type="button" onClick={()=>this.cleanlinesstate(3.5)} class={cleanlines===3.5 ? "btn btn-primary" :"btn btn-secondary" }>   <img src={Good} alt="good" width="40px" height="40px" />          </button>
    <button type="button" onClick={()=>this.cleanlinesstate(5.27)} class={cleanlines===5.27 ? "btn btn-primary" :"btn btn-secondary" }> <img src={Verygood} alt="verygood" width="40px" height="40px" />    </button>
    <button type="button" onClick={()=>this.cleanlinesstate(7.0)} class={cleanlines===7.0 ? "btn btn-primary" :"btn btn-secondary" }>   <img src={Excellent} alt="excellent" width="40px" height="40px" /> </button>
  </div>

  <p className="h5">Facilities</p>
  <div class="btn-group btn-block" role="group" aria-label="First group">
    <button type="button" onClick={()=>this.facilitiesstate(1.75)} class={facilities===1.75 ? "btn btn-primary" :"btn btn-secondary" }> <img src={Poor} alt="poor" width="40px" height="40px"/>   </button>
    <button type="button" onClick={()=>this.facilitiesstate(3.5)} class={facilities===3.5 ? "btn btn-primary" :"btn btn-secondary" }>   <img src={Good} alt="good" width="40px" height="40px" />         </button>
    <button type="button" onClick={()=>this.facilitiesstate(5.27)} class={facilities===5.27 ? "btn btn-primary" :"btn btn-secondary" }> <img src={Verygood} alt="verygood" width="40px" height="40px" />     </button>
    <button type="button" onClick={()=>this.facilitiesstate(7.0)} class={facilities===7.0 ? "btn btn-primary" :"btn btn-secondary" }>   <img src={Excellent} alt="excellent" width="40px" height="40px" /> </button>
  </div>

  <p className="h5">Comfort</p>
  <div class="btn-group btn-block" role="group" aria-label="First group">
    <button type="button" onClick={()=>this.comfortstate(1.75)} class={comfort===1.75 ? "btn btn-primary" :"btn btn-secondary" }>  <img src={Poor} alt="poor" width="40px" height="40px"/>        </button>
    <button type="button" onClick={()=>this.comfortstate(3.5)} class={comfort===3.5 ? "btn btn-primary" :"btn btn-secondary" }>    <img src={Good} alt="good" width="40px" height="40px" />        </button>
    <button type="button" onClick={()=>this.comfortstate(5.27)} class={comfort===5.27 ? "btn btn-primary" :"btn btn-secondary" }>  <img src={Verygood} alt="verygood" width="40px" height="40px" />   </button>
    <button type="button" onClick={()=>this.comfortstate(7.0)} class={comfort===7.0 ? "btn btn-primary" :"btn btn-secondary" }>    <img src={Excellent} alt="excellent" width="40px" height="40px" /> </button>
  </div>
</div>

  <div className="row">
    <div className="col-md-10">
  <div class="alert alert-success" role="alert">
  We have Calculated Your Total Review Score 
</div>
</div>
<div className="col-md-2">
    <p className="mt-3"><span className="veiw bg-success text-light">{rate}</span> {ratestatus(rate)}</p>
</div>
</div>


<div className="mb-5">
<h4 className="mb-5"><span className="veiw">3</span> Could you tell us a little more?</h4>  

<div class="alert alert-info" role="alert">
</div>
  <div className="row">
    <div className="col-md-4">
      <div className="card border-0 p-2">
        <h5 className="card-head">What did you like</h5>
    <div class="form-group">
    <textarea class="form-control" onChange={this.handlechange} name="like" value={like} id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
      </div>
  </div>
  <div className="col-md-4">
  <div className="card border-0 p-2">
        <h5 className="card-head">What didnt you like</h5>
        <div class="form-group">
    <textarea class="form-control"  onChange={this.handlechange}  name="dislike" value={dislike} id="exampleFormControlTextarea2" rows="3"></textarea>
  </div>
      </div>
  </div>
  <div className="col-md-4">
  </div>
</div>
<div class="form-group">
  <label>Give your Review</label>
    <input class="form-control"  onChange={this.handlechange}  name="review" value={review} />
  </div>
      

</div>

<div className="row">
  <div className="col-md-4">
<p><b>Preview of your Review</b></p>

  <>
  <img src={imgurl}  style={{ width: 40,height: 40, }} className="rounded-circle" alt="user pic"/>
<p>{fullname}</p>
</>


<div class="card mb-5"style={{height: "100px", }} >
  <div class="card-head">
  <span className="veiw mr-auto bg-success text-light">{rate}</span>
  {ratestatus(rate)}     
  </div>
  <div class="card-body" >
  <p className="">{review}</p>

  </div>
</div>

</div>

<div className="col-md-4">


</div>
</div>
<div>
<button onClick={this.submitreviews(rate,fullname)} className="btn btn-primary btn-block mb-4">Submit Review</button>
</div>
</div>
      </>
    )
  }




}
const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps)(Review);