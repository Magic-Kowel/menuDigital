import jwtDecode from 'jwt-decode';
import { NAME_TOKEN } from '../config';
export function createToken(token){
    sessionStorage.setItem(NAME_TOKEN, token);
}
function validateToken(token) {
    const decoded = jwtDecode(token);
    const userId = decoded.id;
    const permiso = decoded.permiso;
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        return {
            userId,
            permiso,
            auth:false
        };
    }
    return {
        userId,
        permiso,
        auth:true
    };
}
export function IsLogged(){;
    const token = sessionStorage.getItem(NAME_TOKEN);
    if(!token){
        return {
            userId:0,
            permiso:'',
            auth:false
        }
    }
    const data = validateToken(token);
    const { userId, permiso, auth} = data;
    if (token && auth) {
        return {
            userId,
            permiso,
            auth:true,
            token
        }
    }
    return {
        userId,
        permiso,
        auth:false
    }
}