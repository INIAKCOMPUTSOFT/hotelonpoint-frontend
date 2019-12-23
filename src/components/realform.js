import React from 'react'


class RealForm extends React.Component{

constructor(){
        super()
            this.state={
            FirstName :"",
            LastName :"",
            Age:"",
            Gender :"",
            Location :"",
            Restrictions1 :" ",
            Restrictions2 :"",
        }
}

handleForm=(event)=>{
const {name,value,type,checked} = event.target
type === "checkbox"? this.setState({[name]:checked}) :this.setState({[name]:value})
console.log(this.state)
}



render(){

    return (
        <div  className="container">
                <form>
        <label>
            what is your FirstName
            <input
            type="text"
            name="FirstName"
            placeholder="your frist name please"
            value={this.state.FirstName}
            onChange={this.handleForm}
            />
        </label>
        <br/>

        <label>
            what is your LastName
            <input
            type="text"
            name="LastName"
            placeholder="your last name please"
            value={this.state.LastName}
            onChange={this.handleForm}
            />
        </label>
        <br/>

        <label>
        <input
            type="text"
            name="Age"
            placeholder="your age please"
            value={this.state.Age}
            onChange={this.handleForm}
            />
        </label>
        <br/>

        <label>please your gender</label>
        <label>
        <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender==="male"}
            onChange={this.handleForm}
            />
            Male
        </label>
        <br/>
        <label>
            <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender==="female"}
            onChange={this.handleForm}
            />
            Female
        </label>
        <br/>

        <label>your destination </label>
        <label>
        <select
         value={this.state.Locationr}
         onChange={this.handleChange}
         name="Location"
         >
        <option value="lagos"> lagos</option>
        <option value="ghana">ghana</option>
        <option value="togo">togo</option>                    
        </select>
        </label>
        <br/>

        <label>what is your restrictions</label>
                                   
        <input
         type="checkbox"
         checked={this.state.Restrictions1}
         name=" Restrictions1"
         onChange={this.handleChange}
        />        
        <label>restriction 1   </label>

        <label>restriction 3
        <input
         type="checkbox"
         checked={this.state.Restrictions2}
         name="Restrictions2"
         onChange={this.handleChange}
        />
        </label>
        <br/>

        <button>submit this form</button>

    </form>
        </div>
    )
}
}


export default RealForm