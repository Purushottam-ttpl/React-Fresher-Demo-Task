import Login from "../Authentication/Login";
import LogSign from "../LoginSignUp/LogSign";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";

export const Public_routes =[
  {path : "/", component : <LogSign />, name : "LogSign"},
];

export const Private_routes =[
    {path  : "/home", component : <Home />,  name: "Home"},
    {path : "/about", component : <About />,  name: "About"},
    {path : "/contact", component : <Contact />,  name: "Contact"},
  ];
  