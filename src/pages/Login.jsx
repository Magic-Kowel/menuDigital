import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'
import { 
    Container,
    Card,
    CardContent,
    Box,
    Typography,
    CardActions,
    Button,
    TextField,
    Grid
} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Footer from "../components/Footer";
import NavbarNotLogin from "../components/NavbarNotLogin";
import { loginUser } from "../api/loginUser";
import { createToken } from "../api/token";
// import { loginUser } from "../reducers/user/user";
function Login(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        email:"",
        password:""
    })
    const hantleLogin = async (event) =>{
        event.preventDefault();
        try{
            const result = await loginUser(login);
            // const result = await dispatch(loginUser(login));
            console.log(result);
            if(result.auth){
                await createToken(result.token)
                navigate('/home');
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Usuario o clave incorrecta',
                    text: 'Verifique que su clave y usuario sean correctas',
                });
            }
        }catch(error){
            console.log(error);
        }
    }
    return(
        <>
            <Box
                sx={{
                    height: "100vh",
                    margin:0,
                    padding:0,
                    background: 'linear-gradient(90deg, rgba(255,0,155,1) 0%, rgba(136,84,222,1) 45%, rgba(0,212,255,1) 100%);'
                }}
            >
                <Container maxWidth="xl" >
                    <NavbarNotLogin />
                    <Grid container
                            direction="row"
                            justifyContent="center"
                            alignItems="center">
                            <Grid  md={4} sm={12}>
                                <form
                                    onSubmit={hantleLogin}
                                >
                                    <Card elevation={3} sx={{
                                            marginTop:6,
                                            marginBottom:6,
                                            padding:4,
                                            borderRadius:8
                                        }}>
                                        <CardContent>
                                                <Box sx={{textAlign:'center'}}>
                                                    <AccountCircleIcon
                                                        sx={{
                                                            fontSize:"9rem"
                                                        }}
                                                    />
                                                </Box>
                                                <Typography
                                                    component='h1'
                                                    mt={2} 
                                                    sx={{
                                                        fontSize:'2rem',
                                                        fontWeight:'400',
                                                        textAlign:'center'
                                                    }}
                                                >
                                                    login
                                                </Typography>
                                                <TextField 
                                                    id="email" 
                                                    label="Correo" 
                                                    variant="standard"
                                                    fullWidth
                                                    sx={{marginTop:3}}
                                                    onChange={
                                                        (e)=>{
                                                            setLogin({
                                                                ...login,
                                                                email:e.target.value
                                                            })
                                                        }
                                                    }
                                                />
                                                <TextField 
                                                    id="password" 
                                                    label="Contraseña"
                                                    type="password" 
                                                    variant="standard"
                                                    fullWidth
                                                    sx={{marginTop:3}}
                                                    onChange={
                                                        (e)=>{
                                                            setLogin({
                                                                ...login,
                                                                password:e.target.value
                                                            })
                                                        }
                                                    }
                                                />
                                        </CardContent>
                                        <CardActions>
                                                <Button 
                                                type="submit"
                                                variant="contained" 
                                                size="medium"
                                                fullWidth>
                                                    Registrar
                                                </Button>
                                        </CardActions>
                                    </Card>
                                </form>
                            </Grid>
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </>
    );
}
export default Login;