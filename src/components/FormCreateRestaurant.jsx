
import { useState, useEffect } from 'react';
import {
    Card,
    CardContent,
    CardActions,
    Button,
    Typography,
    TextField
} from '@mui/material';
import UploadImagen from './UploadImagen'; 
import { 
    createRestaurant
} from '../api/restaurant/restaurant';
import Swal from 'sweetalert2';
function FormCreateRestaurant({
    getDataRestaurant
}){
    const [selectedFile, setSelectedFile] = useState("");
    const [restaurantForm, setRestaurantForm] = useState({
        name:"",
        img:""
    });
    useEffect(()=>{
        setRestaurantForm({
          ...restaurantForm,
          img:selectedFile
        });
    },[selectedFile])
    const handleCreateRestaurant = async (e) =>{
        e.preventDefault();
        if(restaurantForm.name.trim()===""){
          Swal.fire({
            icon: "info",
            title: 'Error',
            text: 'Rellene nombre',
          })
          return false;
        }
        await createRestaurant(restaurantForm);
        setRestaurantForm({
          ...restaurantForm,
          name:""
        });
        Swal.fire({
          icon:"success",
          title: 'Guardado',
          text: 'Restaurante guardado con éxito',
        })
        setTimeout(()=>{
          getDataRestaurant();
        },1000);
    }
    return(
        <Card sx={{ minWidth: 275 }} elevation={3}>
                <form
                  autoComplete="off"
                  onSubmit={handleCreateRestaurant}
                >
                  <CardContent>
                        <Typography
                            component='h3'
                            mt={2} 
                            sx={{
                                fontSize:'2rem',
                                fontWeight:'400',
                                textAlign:'center'
                            }}
                        >
                          Crear Restaurante
                        </Typography>
                        <TextField 
                            id="name" 
                            label="Nombre" 
                            value={restaurantForm.name}
                            onChange={
                              (e)=>{
                                setRestaurantForm({
                                  ...restaurantForm,
                                  name:e.target.value
                                });
                              }
                            }
                            variant="standard"
                            fullWidth
                            sx={{marginTop:3}}
                        />
                    
                  </CardContent>
                  <UploadImagen 
                    setSelectedFile={setSelectedFile}
                    selectedFile={selectedFile}
                  />
                  <CardActions>
                    <Button
                    fullWidth
                    variant="contained"
                    size="medium"
                    type="submit"
                    >Crear</Button>
                  </CardActions>
                </form>
            </Card>
    );
}
export default FormCreateRestaurant;