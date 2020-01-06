import './homeblog.css';

import { Link, Redirect } from 'react-router-dom';
import React, { Component } from 'react';

class HomeBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:true,
      blogs:[],
      redirect: false
      
      
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
    // console.log(this.state.blogs);
  }
  handleclick=()=>(
    this.setState({
      redirect: true
    })
  )

  renderRedirect = () => {
    if (this.handleclick) {
     return<Redirect to='/blogapi' />
    }
  }
  

  render(){
    if(this.state.loading){
        return<div>loading..</div>
    }

    const reverse=this.state.blogs.reverse();

   return(

    <div className="mt-3 mb-3">
    <h2 className="text-center">Top Round-trip Flight Deals</h2>
    <div className='card-deck'>   
    {this.state.blogs[0] ? reverse.slice(0,4).map((blog,i)=>(
    <div className="card border-0 text-white"  key={i}>
    <img src={blog.image[0].url}  className="card-img" alt="..." width="200" height="200" />
   
    <div className=""><h5 className="card-title text-dark text-left ">{blog.title}</h5></div>
  </div>
          ))
          :(<p>loading</p>)
          }             
        </div>
        <Link to="/blogapi" className="text-black ml-auto">Read more of our insparing blogs</Link>
        </div> 
   )
    }
    
    

  }

export default HomeBlog;