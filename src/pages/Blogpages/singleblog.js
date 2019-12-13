import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Commentdisplay from '../../components/BlogComment/comment';
import Blogsingle from '../../components/SingleBlog/blogsingle';

const pics={};

class Singleblog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      loading:true,
      blogs:[],
      Bpics:[],
      comments:[],
      picspath:'' 
           
    }
  }

  async componentDidMount() {
      const {match:{params}}=this.props
      var blo= parseInt(params.blog,10);

      //console.log(con)
console.log(blo)

const url=`https://ota.iniakcomputsoft.com.ng/api/blogs/${blo}`;
const response = await fetch(url);
const data= await response.json();
this.setState({blogs : data, loading:false})

console.log(this.state.blogs);

const thirdurl=`https://ota.iniakcomputsoft.com.ng/api/blogs/${blo}/
  heblog_coments`;
const thirdresponse = await fetch(thirdurl,{aders:{
    methods:'GET',
    'Content-type':'Application/json'
  }
});
const files= await thirdresponse.json();
this.setState({comments : files["hydra:member"], loading:false})
console.log(this.state.comments.id);


const secondurl=`https://ota.iniakcomputsoft.com.ng/api/blogs/${blo}/blog_photos`;
const secondresponse = await fetch(secondurl,{
  headers:{
  'Content-type':'Application/json'
  }
});
const picdata= await secondresponse.json();
this.setState({Bpics : picdata['hydra:member'], loading:false})
console.log(this.state.Bpics)
}

 

  render(){
if(this.state.loading){
    return<div>loading..</div>
 }
 const {picpath,isOpen } = this.state;


 
      
return( 
<div className="container">
<div>
{this.state.Bpics.map((pics,i)=>(
  <span><img src={`https://ota.iniakcomputsoft.com.ng/${pics.filePath}`}  onClick={() => this.setState({ isOpen: true })}
   className="img-fluid" alt="Responsive image" width="30%" height="100%"/></span>
  ),

  isOpen && (
          <Lightbox
            mainSrc={`https://ota.iniakcomputsoft.com.ng/${pics.filePath}`}
            nextSrc={(`https://ota.iniakcomputsoft.com.ng/${pics.filePath}` + 1) % pics.length}
            prevSrc={(`https://ota.iniakcomputsoft.com.ng/${pics.filePath}` - 1) % pics.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                picspath: (`https://ota.iniakcomputsoft.com.ng/${pics.filePath}` - 1) % pics.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                picspath:(`{https://ota.iniakcomputsoft.com.ng/${pics.filePath}` + 1) % pics.length,
              })
            }
          />
        )
)}
     
<Blogsingle

title={this.state.blogs.blogTitle}
content={this.state.blogs.blogContent}

/> 
</div>
<div className="border shadow-lg  bg-dark rounded"><p className="text-light mt-3 ">Comments</p></div>
<div>
{this.state.comments.map((comment,i)=>(
  <Commentdisplay 
  key={comment.id}
  name={comment['author'].email}
  comment={comment.content}
  />
))}
</div>
</div>

)
    }
}

export default Singleblog;