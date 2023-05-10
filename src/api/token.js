import jwtDecode from 'jwt-decode';
export function createToken(token){
    sessionStorage.setItem('token', token);
}
function validateToken(token) {
    const decoded = jwtDecode(token);
    const userId = decoded.id;
    const permiso = decoded.permiso;
    console.log(decoded);
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
    const token = sessionStorage.getItem('token');
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
            auth:true
        }
    }
    return {
        userId,
        permiso,
        auth:false
    }
}