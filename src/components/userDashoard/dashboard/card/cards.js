import Card from './card'
import React from 'react'

function Cards (){

return(
    <div>
        <div class="card-group">
        <Card 
        Title="Find the best deals"
        content="Unlock Secret deals by signing before you search"
        />
        <Card
        Title="Add Your Details"
        content="Book faster and get better recommendations by adding your details"
        /> 
</div>
    </div>
)
}

export default Cards