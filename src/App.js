import React from 'react';
import './App.css';
import Navbar from './component/Header/Navbar';
import { routes } from './component/Routes/Constant';
import AllRoutes from './component/Routes/allRoutes';
import LogSign from './component/LoginSignUp/LogSign';

function App() {

//  console.log("routes--->",routes)

  return (
    <div>

      {/* <Navbar /> */}
      <AllRoutes />

      {/* <LogSign /> */}
      
  
    </div>
  );
}

export default App;
