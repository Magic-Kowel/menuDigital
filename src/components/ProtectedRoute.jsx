import { Navigate,Outlet } from "react-router-dom";
import { IsLogged } from "../api/token";
export const ProtectedRoute = ({ permission, children, redirectTo="/"}) =>{
    const {userId,permiso,auth} = IsLogged();
    const isPermission = ([permission].includes(permiso));

    if(!auth || !isPermission){
        return <Navigate to={redirectTo}/>
    }
    return children  ? children : <Outlet />;
}