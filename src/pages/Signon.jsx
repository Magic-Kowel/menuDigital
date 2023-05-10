import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import {
    Grid,
    TextField,
    Box,
    Card,
    CardContent,
    CardActions,
    Button,
    Container,
    Typography
} from '@mui/material';
import Footer from "../components/Footer";
import NavbarNotLogin from "../components/NavbarNotLogin";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch } from 'react-redux';
import {createUser} from "../reducers/user/user"
import {signon} from "../api/signon";
import {validateEmail} from "../api/tool";
import {createToken} from "../api/token";
function Signon(){
    const navigate = useNavigate();
    const dispatch = useDispatch();    
    const [userData, setUserData] = useState({
        nombre:"",
        apellidos:"",
        password:"",
        confirmPassword:"",
        email:""
    });

    const handleSubmit = async (event) =>{
        event.preventDefault();
        if (
                userData.nombre.trim()==="" ||
                userData.apellidos.trim()==="" ||
                userData.email.trim()==="" ||
                userData.password.trim()==="" ||
                userData.confirmPassword.trim()===""
            ) {
            Swal.fire({
                icon: 'error',
                title: 'Rellene los campos',
                text: 'Verifique todos los campos',
            });
            return false;
        }
        
        if(userData.password != userData.confirmPassword){
            Swal.fire({
                icon: 'error',
                title: 'Claves no coinciden',
                text: 'Verifique que sus claves',
            });
            return false;
        }
        try {
            const resultEmail =  await validateEmail(userData.email);
            if(resultEmail.exists){
                Swal.fire({
                    icon: 'error',
                    title: 'Correo ya está registrado',
                    text: 'Intente con otro correo',
                });
                return false;
            }
            const result = await signon(userData);
            console.log(result);
            createToken(result.token);
            navigate('/home');
        } catch (error) {
            console.error(error);
        }
    };
    return(
        <>
            <Box
                sx={{
                    background: 'linear-gradient(90deg, rgba(255,0,155,1) 0%, rgba(136,84,222,1) 45%, rgba(0,212,255,1) 100%);'
                }}
            >
                <NavbarNotLogin />
                <Container maxWidth="xl">
                    <Grid container
                        direction="row"
                        justifyContent="center"
                        alignItems="center">
                        <Grid  md={4} sm={12}>
                            <Card elevation={3} sx={{
                                    marginTop:6,
                                    marginBottom:6,
                                    padding:4,
                                    borderRadius:8
                                }}>
                                    <form
                                        onSubmit={handleSubmit}
                                    >
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
                                                    sigin
                                                </Typography>
                                                <TextField 
                                                    id="name" 
                                                    label="Nombre" 
                                                    variant="standard"
                                                    fullWidth
                                                    sx={{marginTop:3}}
                                                    value={userData.nombre}
                                                    onChange={
                                                        (e)=>{
                                                            setUserData({
                                                                ...userData,
                                                                nombre:e.target.value
                                                            })
                                                        }
                                                    }
                                                />
                                                <TextField 
                                                    id="lastName" 
                                                    label="Apellidos" 
                                                    variant="standard"
                                                    fullWidth
                                                    sx={{marginTop:3}}
                                                    value={userData.apellidos}
                                                    onChange={
                                                        (e)=>{
                                                            setUserData({
                                                                ...userData,
                                                                apellidos: e.target.value
                                                            })
                                                        }
                                                    }
                                                />
                                                <TextField 
                                                    id="email" 
                                                    label="Correo" 
                                                    variant="standard"
                                                    fullWidth
                                                    sx={{marginTop:3}}
                                                    value={userData.email}
                                                    onChange={
                                                        (e)=>{
                                                            setUserData({
                                                                ...userData,
                                                                email: e.target.value
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
                                                    value={userData.password}
                                                    onChange={
                                                        (e)=>{
                                                            setUserData({
                                                                ...userData,
                                                                password:e.target.value
                                                            })
                                                        }
                                                    }
                                                />
                                                <TextField 
                                                    id="confirmPassword" 
                                                    label="Confirmar Contraseña" 
                                                    type="password" 
                                                    variant="standard"
                                                    fullWidth
                                                    sx={{marginTop:3}}
                                                    value={userData.confirmPassword}
                                                    onChange={
                                                        (e)=>{
                                                            setUserData({
                                                                ...userData,
                                                                confirmPassword:e.target.value
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
                                    </form>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </>
    );
}
export default Signon;