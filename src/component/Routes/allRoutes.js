import { Navigate, Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { Normal_routes, Private_routes, Public_routes } from "./Constant"
import Navbar from "../Header/Navbar";
import LogSign from "../LoginSignUp/LogSign";
import { AuthProtected, FullPageRoute } from "./protectedRoute";
import NotFound from "../Pages/NotFound";
import UnAuthorize from "../Pages/UnAuthorize";



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
                        console.log("routes from---- ",  path, index);
                    return <Route key={index} path={path} element={<FullPageRoute element={component} />} />
                })}

                {Private_routes.map((route, index)=>{
                       const {path, component, allowedRoles} = route;
                    //    const allowedRoles = path === "/dashboard" ? ["Admin"] : ["Patient","Admin"];

                    return <Route key={index} path={path} element={<AuthProtected element={component} allowedRoles={allowedRoles} />} />
                    
                })}

                {Normal_routes.map((route, index)=>{
                    const {path, component} = route;
                        console.log("routes from---- ",  path, index);
                    return <Route key={index} path={path} element={component} />
                })}

                {/* <Route path="/unAuth" element={<UnAuthorize />} />

                <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </>
    )
};

export default AllRoutes;