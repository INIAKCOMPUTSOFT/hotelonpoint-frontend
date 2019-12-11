import './homeblog.css';

import React, { Component } from 'react';

class HomeBlog extends Component {
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

    <div className="mt-3 mb-3">
    <h5>Get inspired to travel</h5>
    <div className='card-deck'>   
    {/* {this.state.blogs[0] ? this.state.blogs.slice(0,2).map((blog,i)=>(
      
    <div className="card bg-dark text-white" key={blog.id}>
    <img src={`https://ota.iniakcomputsoft.com.ng/${blog.blogPhotos[0]['filePath']}`} className="card-img" alt="..." width='200' height='300' />
    <div className="card-img-overlay">
      <div className="titleback p-3"><h5 className="card-title text-light text-center">{blog.blogTitle}</h5></div>
    </div>
  </div>
 
          ))
          :(<p>loading</p>)
          }              */}
        </div>
        <p className="text-black ml-auto">Read more of our insparing blogs</p>
        </div> 
   )
    }
    
    

  }

export default HomeBlog;