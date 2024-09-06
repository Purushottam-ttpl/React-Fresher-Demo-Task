import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";

export const routes =[
    {path  : "/", component : <Home />,  name: "Home"},
    {path : "/about", component : <About />,  name: "About"},
    {path : "/contact", component : <Contact />,  name: "Contact"},
  ];
  