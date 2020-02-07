import Profile from './profileedith';
import React from "react";
import SideList from '../dashboard/sidelist';

//import About from './about'

class Mysettings extends React.Component {
  render() {
    return (
      <div>
<div className="row">
       <div className="col-sm-4">
      <SideList />
       </div>
       <div className="col-sm-8">
         <div>
          <Profile />
          {/* <About/> */}
         </div>
       </div>
    </div>
      </div>
    );
  }
}

export default Mysettings;
