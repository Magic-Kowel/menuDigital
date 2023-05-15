import React,{ useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../../components/Navigation";
import { getRestaurant } from "../../api/restaurant/restaurant";
import Footer from "../../components/Footer";
import { 
    Grid,
    Paper,
    TextField,
    Typography,
    Box,
    Button,
    Input,
    IconButton, 
    Card,
    CardMedia,
    CardContent,
    CardActions
} from "@mui/material";
import BackupIcon from '@mui/icons-material/Backup';
function RestaurantEdit(){
    const {idRestaurant} = useParams();
    const [restaurant, setRestaurant] = useState({
        restaurante_id:0,
        nombre:'',
        path:''
    });
    const [selectedFile, setSelectedFile] = useState(restaurant.path);
    const handleFileChange = (event) => {
        setSelectedFile(URL.createObjectURL(event.target.files[0]));
    };
    const getRestaurantData = async (idRestaurant)=> {
        const response = await getRestaurant(idRestaurant);
        setRestaurant(response);
        console.log(response);
    }
    useEffect(()=>{
        getRestaurantData(idRestaurant);
    },[])
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
                                <form>
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
                            <Card
                                sx={{
                                    margin:5,
                                    width:"20rem",
                                }}
                            > 
                                <CardContent>
                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <CardMedia
                                            component="img"
                                            sx={{ width:250 }}
                                            image={selectedFile}
                                            title=""
                                        />
                                    </Box>
                                </CardContent>
                                <CardActions>
                                    <Button
                                    fullWidth
                                    component="label"
                                    variant="contained"
                                    startIcon={<BackupIcon />}>
                                        Subir
                                        <Input 
                                            type="file"
                                            sx={{display:"none"}} 
                                            onChange={handleFileChange}
                                        />
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Paper>
            </Navigation>
            <Footer />
        </>
    );
}
export default RestaurantEdit;