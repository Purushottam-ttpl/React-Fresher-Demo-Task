import { Link } from "react-router-dom";
import { routes } from "../Routes/Constant";

const Navbar =()=>{
    return(
        <nav>
            <ul>
                {routes.map((route, index)=>{
                    return  <li key={index}>
                            <Link to={route.path}>{route.name}</Link>
                            </li>
                })}
            </ul>
        </nav>
    );
}

export default Navbar;