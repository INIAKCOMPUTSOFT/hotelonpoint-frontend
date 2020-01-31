import Cards from './card/cards';
import React from "react";
import SideList from './sidelist';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
     <div className="row">
       <div className="col-sm-4">
      <SideList />
       </div>
       <div className="col-sm-8">
         <div>
          <Cards/>
         </div>
       </div>
    </div>
      </div>
    );
  }
}
export default Dashboard;
