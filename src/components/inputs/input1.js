import React from 'react'
function  Input (props){

return(
    <div>
    <label>{props.Label}</label>
    <input type={props.type} name={props.name} value={props.value} onChange={props.onChange} className="form-control"  placeholder={props.placeholder}/>
    <small>{props.smallText}</small>  
    </div>
)

}
export default Input
