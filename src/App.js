import React from 'react';
import './App.css';
import Navbar from './component/Header/Navbar';
import { routes } from './component/Routes/Constant';
import AllRoutes from './component/Routes/allRoutes';
import Login from './component/Authentication/Login';

function App() {

 console.log("routes--->",routes)

  return (
    <div>
      <Navbar />
      <AllRoutes />

      {/* <Login /> */}
    </div>
  );
}

export default App;
