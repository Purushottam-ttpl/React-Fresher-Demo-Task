// import React from "react";
// import "./sidebar.css";
// import { useEffect } from "react";

//  const Sidebar=()=>{
//     useEffect(() => {
//         const sidebar = document.querySelector('.sidebar');
//         const toggleBtn = document.querySelector('.toggle-btn');
//         console.log("toggleee-----",toggleBtn)
//         console.log("sidebar----",sidebar)
//         if (toggleBtn) {
//             toggleBtn.addEventListener('click', () => {
//                 sidebar.classList.toggle('active');

//                 console.log("sidebar", sidebar)

//                 console.log("btn clickkkk-----",toggleBtn)
//             });
//         }

        
//         // return () => {
//         //     if (toggleBtn) {
//         //         toggleBtn.removeEventListener('click', () => {
//         //             sidebar.classList.toggle('active');
//         //         });
//         //     }
//         // };
//     }, []);
//     return(

//         <div>
          
//         <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />

        
//         <div className="body">
//             <nav className="sidebar">
//         <div className="logo-menu">
//             <h2 className="logo">Dashboard</h2>
//             <i className='bx bx-menu toggle-btn'  ></i>
//         </div>
//         <ul className="list">
//             <li className="list-item active">
//                 <Link to="#">
//                     <i className='bx bx-grid-alt' ></i>
//                     <span className="link-name" style={{ "--i": 1}}>Dashboard</span>
//                     {/* style="--i:1;" */}
//                 </Link>
//             </li>
//             <li className="list-item">
//                 <Link to="#">
//                     <i className='bx bx-user' ></i>
//                     <span className="link-name" style={{ "--i": 2 }}>User</span>
//                 </Link>
//             </li>
//             <li className="list-item">
//                 <Link to="#">
//                     <i className='bx bx-chat' ></i>
//                     <span className="link-name" style={{ "--i": 3 }}>Messages</span>
//                 </Link>
//             </li>
//             <li className="list-item">
//                 <Link to="#">
//                     <i className='bx bx-pie-chart-alt-2' ></i>
//                     <span className="link-name" style={{ "--i": 4 }}>Analytics</span>
//                 </Link>
//             </li>
//             <li className="list-item">
//                 <Link to="#">
//                     <i className='bx bx-folder' ></i>
//                     <span className="link-name" style={{ "--i": 5 }}>File Manager</span>
//                 </Link>
//             </li>
//             <li className="list-item">
//                 <Link to="#">
//                     <i className='bx bx-cart-alt' ></i>
//                     <span className="link-name" style={{ "--i": 6 }}>Order</span>
//                 </Link>
//             </li>
//             <li className="list-item">
//                 <Link to="#">
//                     <i className='bx bx-heart' ></i>
//                     <span className="link-name" style={{ "--i": 7 }}>Saved</span>
//                 </Link>
//             </li>
//             <li className="list-item">
//                 <Link to="#">
//                     <i className='bx bx-cog' ></i>
//                     <span className="link-name" style={{ "--i": 8}}>setting</span>
//                 </Link>
//             </li>
//         </ul>
//     </nav>
   
//         </div>
//         </div>

//     );
//  }

//  export default Sidebar;




import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './dashboard.css'; 
import 'boxicons/css/boxicons.min.css'; 
import Panel from './panel';

function Dashboard(){
    const [isActive, setIsActive] = useState(false);
    const navigte = useNavigate()

    const toggleSidebar = () => {
        setIsActive(!isActive);
    };

    useEffect(()=>{
        if(localStorage.getItem('UserType')=== 'Patient'){
            navigte("/home")
        }
    },[])
    return (
        <div className='main'>
         <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />


 <nav className={`sidebar ${isActive ? 'active' : ''}`}>
            <div className="logo-menu">
                <h2 className="logo">Dashboard</h2>
                <i className='bx bx-menu toggle-btn' onClick={toggleSidebar}></i>
            </div>
            <ul className="list">
                <li className="list-item active">
                    <Link to="#" className='sideLink'>
                        <i className='bx bx-grid-alt'></i>
                        <span className="link-name" style={{ "--i": 1 }}>Dashboard</span>
                    </Link>
                </li>
                <li className="list-item">
                    <Link to="#" className='sideLink'>
                        <i className='bx bx-user'></i>
                        <span className="link-name" style={{ "--i": 2 }}>User</span>
                    </Link>
                </li>
                <li className="list-item">
                    <Link to="#" className='sideLink'>
                        <i className='bx bx-chat'></i>
                        <span className="link-name" style={{ "--i": 3 }}>Messages</span>
                    </Link>
                </li>
                <li className="list-item">
                    <Link to="#" className='sideLink'>
                        <i className='bx bx-pie-chart-alt-2'></i>
                        <span className="link-name" style={{ "--i": 4 }}>Analytics</span>
                    </Link>
                </li>
                <li className="list-item">
                    <Link to="#" className='sideLink'>
                        <i className='bx bx-folder'></i>
                        <span className="link-name" style={{ "--i": 5 }}>File Manager</span>
                    </Link>
                </li>
                <li className="list-item">
                    <Link to="#" className='sideLink'>
                        <i className='bx bx-cart-alt'></i>
                        <span className="link-name" style={{ "--i": 6 }}>Order</span>
                    </Link>
                </li>
                <li className="list-item">
                    <Link to="#" className='sideLink'>
                        <i className='bx bx-heart'></i>
                        <span className="link-name" style={{ "--i": 7 }}>Saved</span>
                    </Link>
                </li>
                <li className="list-item">
                    <Link to="#" className='sideLink'>
                        <i className='bx bx-cog'></i>
                        <span className="link-name" style={{ "--i": 8 }}>Setting</span>
                    </Link>
                </li>
            </ul>
        </nav>
        <div className="panel-container">
                <Panel />
            </div>
        </div>
       
    );
};

export default Dashboard;
