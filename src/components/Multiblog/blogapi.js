import React, { Component } from 'react';
import './blogapi.css';


class Blogapi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:true,
      blogs:[],
      
    }
  }
  async componentDidMount() {
    const url='https://calm-anchorage-14244.herokuapp.com/blog';
    const response = await fetch(url,{
      methods:'GET',
      headers:{
        'Content-type' :'Application/json'
      }
    });
    const data= await response.json();
    this.setState({blogs : data.post, loading:false})
    console.log(this.state.blogs);
    }

  render(){
    if(this.state.loading){
        return<div>loading..</div>
    }

      
    return(
      
      <div className="container"> 
      {this.state.blogs.map((blog,i)=>(

<div class="card mb-3" key={i}>
<div class="row no-gutters">
  <div class="col-md-4">
  <img className="card-img-top" src={blog.image[0].url} alt="Card image cap" height="400"/>
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h2 class="card-title bt text-dark">{blog.title}</h2>
      <h5 class="card-title text-dark">{blog.content}</h5>
    </div>
  </div>
</div>
</div>
            ))}       
            <br/>
              </div>

                      

    )}

  }

export default Blogapi;