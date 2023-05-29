import {useState,useEffect} from "react"
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import UploadImagen from "./UploadImagen";
import { getSeccion,createSeccion } from "../reducers/seccion/seccion";   
import {
    Card,
    CardContent,
    CardActions,
    Button,
    Typography,
    TextField
} from '@mui/material';
function FormCreateSeccion(){
    const dispatch = useDispatch();
    const { idRestaurant } = useParams();
    const [selectedFile, setSelectedFile] = useState("");
    const [seccionForm, setSeccionForm] = useState({
        name:"",
        descripcion:"",
        idRestaurant:idRestaurant,
        file:null
    });
    useEffect(()=>{
        setSeccionForm({
            ...seccionForm,
            file:selectedFile
        })
    },[selectedFile]);
    const handleCreateSeccion = async (e) =>{
        e.preventDefault();
        console.log();
        if(
            seccionForm.name.trim()==="" ||
            seccionForm.descripcion.trim()==="" ||
            !seccionForm.file
        ){
            Swal.fire({
              icon: "info",
              title: 'Error',
              text: 'Rellene todos los datos',
            })
            return false;
        }
        try {
            const data = await dispatch(createSeccion(seccionForm));
            if(data.payload.created){
                dispatch(getSeccion(idRestaurant));
                Swal.fire({
                    icon:"success",
                    title: 'Guardado',
                    text: 'Seccion guardado con éxito',
                })
                setSeccionForm({
                    name:"",
                    descripcion:"",
                    idRestaurant:idRestaurant,
                    file:null
                })
            }else{
                Swal.fire({
                    icon:"error",
                    title: 'Error',
                    text: 'Seccion no guardado',
                })
            }
        } catch (error) {
            console.error(error);
        }
    }
    return(
        <Card sx={{ minWidth: 275 }} elevation={3}>
            <form
                autoComplete="off"
                onSubmit={handleCreateSeccion}
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
                        Crear Seccion
                        </Typography>
                        <TextField 
                            id="name"
                            value={seccionForm.name}
                            label="Nombre" 
                            variant="standard"
                            fullWidth
                            onChange={(e)=>{
                                setSeccionForm({
                                    ...seccionForm,
                                    name:e.target.value
                                })
                            }}
                            sx={{marginTop:3}}
                        />
                        <TextField
                            sx={{marginTop:3}}
                            value={seccionForm.descripcion}
                            label="Descripcion"
                            fullWidth
                            multiline
                            onChange={(e)=>{
                                setSeccionForm({
                                    ...seccionForm,
                                    descripcion:e.target.value
                                })
                            }}
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
                    >
                        Crear
                    </Button>
                </CardActions>
            </form>
        </Card>
    );
}
export default FormCreateSeccion;