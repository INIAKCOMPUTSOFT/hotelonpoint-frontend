import './App.css';

import { Provider } from 'react-redux';
import React from "react";
import Router from './route';
import store from './redux/store';

//import UserRoute from './userroute';




function App() {
  return (
    <Provider store={store}>
      <Router />
      {/* <UserRoute/> */}
      {/* <UserRoute/> */}
    </Provider>
  );
}

export default App;
