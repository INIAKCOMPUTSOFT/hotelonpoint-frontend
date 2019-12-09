import React from 'react'
function Blogsingle(props){
return(
<>
<div>
                    
                    
                    <div className="card mb-4">
                        <div className="mb-2"> 
                    </div>
                            <div className="card-body">
                              <h5 className="card-title">{props.title}</h5>
                              <p className="card-text">{props.content}</p>
                            </div>
                    </div>
                    </div>
</>
)
}
export default Blogsingle

