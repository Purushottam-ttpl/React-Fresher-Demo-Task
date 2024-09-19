import LogSign from "../LoginSignUp/LogSign";
import SignUp from "../LoginSignUp/SignUp";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Dashboard from "../Sidebar/dashboard";
import Sidebar from "../Sidebar/dashboard";

export const Public_routes =[
  {path : "/", component : <LogSign />, name : "LogSign"},
  {path : "/register", component : <SignUp />, name : "SignUp"},
  // {path : "/*", component : <NotFound />, name : "NotFound"},


];

export const Private_routes =[
    {path  : "/home", component : <Home />,  name: "Home", allowedRoles: ["Admin", "Patient"],},
    {path : "/about", component : <About />,  name: "About",  allowedRoles: ["Patient"]},
    {path : "/contact", component : <Contact />,  name: "Contact", allowedRoles: ["Admin"],},
    {path : "/dashboard", component : <Dashboard />,  name: "Dashboard", allowedRoles: ["Admin"],},
  ];
  