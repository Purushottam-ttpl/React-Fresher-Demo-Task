import Login from "../Authentication/Login";
import LogSign from "../LoginSignUp/LogSign";
import SignUp from "../LoginSignUp/SignUp";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";

export const Public_routes =[
  {path : "/login", component : <LogSign />, name : "LogSign"},
  {path : "/register", component : <SignUp />, name : "SignUp"},
  // {path : "/*", component : <NotFound />, name : "NotFound"},


];

export const Private_routes =[
    {path  : "/home", component : <Home />,  name: "Home"},
    {path : "/about", component : <About />,  name: "About"},
    {path : "/contact", component : <Contact />,  name: "Contact"},
  ];
  