import { Navigate,Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IsLogged } from "../api/token";
import {setUser} from "../reducers/user/user";
export const ProtectedRoute = ({ permission, children, redirectTo="/"}) =>{
    const dispatch = useDispatch();
    const {userId,permiso,auth,token} = IsLogged();
    dispatch(setUser({token}));
    const isPermission = ([permission].includes(permiso));

    if(!auth || !isPermission){
        return <Navigate to={redirectTo}/>
    }
    return children  ? children : <Outlet />;
}