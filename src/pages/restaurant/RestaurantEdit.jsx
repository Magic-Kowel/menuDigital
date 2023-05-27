import React,{ useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import Navigation from "../../components/Navigation";
import { 
    getRestaurant,
    updateRestaurant
} from "../../api/restaurant/restaurant";
import Footer from "../../components/Footer";
import { 
    Grid,
    Paper,
    TextField,
    Typography,
    Box,
    Button
} from "@mui/material";
import UploadImagen from "../../components/UploadImagen";
function RestaurantEdit(){
    const navigate = useNavigate();
    const {idRestaurant} = useParams();
    const [restaurant, setRestaurant] = useState({
        restaurante_id:0,
        nombre:'',
        path:null
    });
    const [selectedFile, setSelectedFile] = useState("");

    const getRestaurantData = async (idRestaurant)=> {
        const response = await getRestaurant(idRestaurant);
        setRestaurant(response);
        await setSelectedFile(restaurant.path);
    }
    const handleUpdateRestaurant = async (event) => {
        event.preventDefault();
        if(restaurant.nombre.trim()===""){
            Swal.fire({
              icon: "info",
              title: 'Error',
              text: 'Rellene nombre',
            })
            return false;
        }
        const imagen = selectedFile;
        setRestaurant({
            ...restaurant,
            path:selectedFile
        })
        console.log("restaurant",restaurant);
        const response = await updateRestaurant(restaurant,selectedFile);
        if(response.update){
            Swal.fire({
                icon:"success",
                title:'Editado',
                text:'Restaurante actualizado con éxito',
                timer: 5000,
            }).then(()=>{
                navigate("/restaurant");
            })
        }else{
            Swal.fire({
                icon:"error",
                title:'Error',
                text:'Error al actualizar restaurante',
            })
        }
    }
    useEffect(()=>{
        getRestaurantData(idRestaurant);
        console.log(selectedFile);
    },[restaurant.path]);
    // useEffect(()=>{
    //     console.log("imagen update",selectedFile);
    //     setRestaurant({
    //       ...restaurant,
    //       path:selectedFile
    //     });
    //     console.log("imagen update2",restaurant);
    //   },[selectedFile]);
    return(
        <>
            <Navigation>
                <Paper elevation={3}>
                    <Grid container spacing={2}>
                        <Grid item md={8} sm={12}>
                            <Box
                                sx={{
                                    margin:5
                                }}
                            >
                                <form
                                    onSubmit={handleUpdateRestaurant}
                                >
                                        <Typography
                                            component='h3'
                                            mt={2} 
                                            sx={{
                                                fontSize:'2rem',
                                                fontWeight:'400',
                                                textAlign:'center'
                                            }}
                                        >
                                        Editar Restaurante
                                        </Typography>
                                        <TextField 
                                            id="name" 
                                            label="Nombre" 
                                            variant="standard"
                                            value={restaurant.nombre}
                                            onChange={(e)=>{
                                                setRestaurant({
                                                    ...restaurant,
                                                    nombre:e.target.value
                                                })
                                            }}
                                            fullWidth
                                            sx={{marginTop:3}}
                                        />
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            size="medium"
                                            type="submit"
                                            sx={{
                                                marginTop:6
                                            }}
                                        >
                                            Editar
                                        </Button>
                                </form>
                            </Box>
                        </Grid>
                        <Grid item sm={12} md={4}>
                            <UploadImagen 
                                setSelectedFile={setSelectedFile}
                                selectedFile={selectedFile}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Navigation>
        </>
    );
}
export default RestaurantEdit;