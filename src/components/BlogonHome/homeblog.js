import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import './homeblog.css';


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
    console.log(this.state.blogs);
  }
  handleclick=()=>(
    this.setState({
      redirect: true
    })
  )

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/blogapi' />
    }
  }
  

  render(){
    if(this.state.loading){
        return<div>loading..</div>
    }

    const reverse=this.state.blogs.reverse();

   return(

    <div className="mt-3 mb-3">
    <h5>Get inspired to travel</h5>
    <div className='card-deck'>   
    {this.state.blogs[0] ? reverse.slice(0,3).map((blog,i)=>(
    <div className="card bg-dark text-white" onClick={this.handleclick} key={blog.id}>
    <img src={blog.image[0].url}  className="card-img" alt="..." width="200" height="400" />
    <div className="card-img-overlay">
      <div className="titleback p-3"><h5 className="card-title text-light text-center btitle">{blog.title}</h5></div>
    </div>
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