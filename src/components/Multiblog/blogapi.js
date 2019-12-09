import React, { Component } from 'react';
//import Blogdisplay from './blogdisplay
import {Link} from 'react-router-dom'


class Blogapi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:true,
      blogs:[],
      
    }
  }
  async componentDidMount() {
    const url='https://ota.iniakcomputsoft.com.ng/api/blogs/';
    const response = await fetch(url,{
      methods:'GET',
      headers:{
        'Content-type' :'Application/json'
      }
    });
    const data= await response.json();
    this.setState({blogs : data['hydra:member'], loading:false})
    console.log(this.state.blogs);
    }

  render(){
    if(this.state.loading){
        return<div>loading..</div>
    }

      
    return(
      
      <div className="container"> 
      {this.state.blogs.slice(0,3).map((blog,i)=>(
       <div className="card" key={blog.id} >
      <img className="card-img-top" src={`https://ota.iniakcomputsoft.com.ng/${blog.blogPhotos[0].filePath}`} alt="Card image cap" height="400"/>
      <div className="card-body">
      <h5 className="card-title">{blog.blogTitle}</h5>
      <Link to={`/singleblog/${blog.id}`}><button className="btn btn-primary">Read more</button></Link>
      </div> 
         
       </div>
            ))}       
            <br/>
              </div>

                      

    )}

  }

export default Blogapi;