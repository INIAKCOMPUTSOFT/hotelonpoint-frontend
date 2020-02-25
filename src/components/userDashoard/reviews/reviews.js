import React from 'react'

export default class Review extends React.Component{
  constructor(){
    super();
    this.state={
      travellpurpose:'',
      travellertype:'',
      travellpet:'',
      staff:'',
      facilities:"",
      cleanlines:'',
      comfort:'',
      valueofmoney:'',
      location:''

  }
  }

  render(){

    return(
      <>
<ul class="list-group">
  <li class="list-group-item active">
<input type="radio" name="customRadio" class="custom-control-input"/>
</li>
  <li class="list-group-item">
<input type="radio" name="customRadio" class="custom-control-input"/>
</li>
  <li class="list-group-item">
<input type="radio" name="cu class="custom-control-input"/>
</li>
  <li class="list-group-item">
<input type="radio" name="customRadio" class="custom-control-input"/>
</li>
  <li class="list-group-item">
<input type="radio" name="customRadio" class="custom-control-input"/>
</li>
</ul>
      </>
    )
  }




}
