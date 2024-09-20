import LogSign from "../LoginSignUp/LogSign";
import SignUp from "../LoginSignUp/SignUp";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Dashboard from "../Pages/dashboard";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import UnAuthorize from "../Pages/UnAuthorize";


export const Public_routes =[
  {path : "/", component : <LogSign />, name : "LogSign"},
  {path : "/register", component : <SignUp />, name : "SignUp"},
];

export const Private_routes =[
    {path  : "/home", component : <Home />,  name: "Home", allowedRoles: ["Admin", "Patient"],},
    {path : "/about", component : <About />,  name: "About",  allowedRoles: ["Patient"]},
    {path : "/contact", component : <Contact />,  name: "Contact", allowedRoles: ["Admin"],},
    {path : "/dashboard", component : <Dashboard />,  name: "Dashboard", allowedRoles: ["Admin"],},
  ];

  export const Normal_routes =[
    {path : "/unAuth", component : <UnAuthorize />, name : "UnAuthorize"},
    {path : "*", component : <NotFound />, name : "NotFound"},
  ];
  