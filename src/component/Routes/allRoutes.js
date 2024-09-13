import { Navigate, Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { Private_routes, Public_routes } from "./Constant"
import Navbar from "../Header/Navbar";
import LogSign from "../LoginSignUp/LogSign";
import ProtectedRoute from "./protectedRoute";


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
            {location.pathname === "/" ? <LogSign /> : <Navbar />}


            <Routes>
                {Public_routes.map((route, index)=>{
                    const {path, component} = route;

                    return <Route key={index} path={path} element={component} />
                    
                })}

                {Private_routes.map((route, index)=>{
                       const {path, component} = route;

                    return <Route key={index} path={path} element={<ProtectedRoute element={component} />} />
                    
                })}

            </Routes>
        </>
    )
};

export default AllRoutes;