import { Route, Routes } from "react-router-dom"
import { Private_routes, Public_routes } from "./Constant"

const AllRoutes =()=>{
    return(
        <>

            <Routes>
                {Public_routes.map((route, index)=>{
                    const {path, component} = route;

                    return <Route key={index} path={path} element={component} />
                    
                })}

                {Private_routes.map((route, index)=>{
                       const {path, component} = route;
                       
                    return <Route key={index} path={path} element={component} />
                    
                })}

            </Routes>
        </>
    )
};

export default AllRoutes;