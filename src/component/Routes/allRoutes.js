import { Navigate, Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { Private_routes, Public_routes } from "./Constant"
import Navbar from "../Header/Navbar";
import LogSign from "../LoginSignUp/LogSign";
import { AuthProtected, FullPageRoute } from "./protectedRoute";
import NotFound from "../Pages/NotFound";



const AllRoutes =()=>{
    
    const location = useLocation();
    console.log("current path------>",location.pathname)

    // if(location.pathname=="/"){
    //    return <LogSign />
    // }
    // else{
    //     return <Navbar />    
    // }


    return(
        <>
            {/* {location.pathname === "/" ? <LogSign /> : <Navbar />} */}


            <Routes>
                {Public_routes.map((route, index)=>{
                    const {path, component} = route;
                        console.log("routes from ",  path, index);
                    return <Route key={index} path={path} element={<FullPageRoute element={component} />} />
                })}

                {Private_routes.map((route, index)=>{
                       const {path, component} = route;

                    return <Route key={index} path={path} element={<AuthProtected element={component} />} />
                    
                })}

                {/* <Route path="/*" element={<NotFound />} /> */}
            </Routes>
        </>
    )
};

export default AllRoutes;