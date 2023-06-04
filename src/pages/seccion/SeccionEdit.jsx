import { useEffect, useState } from "react";
import Navigation from "../../components/Navigation";
import { useParams,useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { getSeccion,updateSeccion } from "../../reducers/seccion/seccion";
import { 
    Grid,
    Paper,
    TextField,
    Typography,
    Box,
    Button
} from "@mui/material";
import UploadImagen from "../../components/UploadImagen";
import GoBackButton from "../../components/GoBackButton";

function SeccionEdit(){
    const {idSeccion} = useParams();
    const navigate  = useNavigate();
    const dispatch = useDispatch();
    const [selectedFile, setSelectedFile] = useState("");
    const [seccion,setSeccion] = useState({
        name:"",
        descripcion:"",
        idSeccion:0,
        file:null
    });
    const getDataSeccion = async () => {
        const data = await dispatch(getSeccion(idSeccion));
        console.log(data.payload);
        setSeccion({
            ...seccion,
            name:data.payload[0].nombre,
            descripcion:data.payload[0].descripcion,
            idSeccion:data.payload[0].seccion_id
        })
        await setSelectedFile(data.payload[0].path);
    };
    const handleUpdateSeccion = async (e) =>{
        e.preventDefault();
        if(
            seccion.name.trim()===""||
            seccion.descripcion.trim()===""
        ){
            Swal.fire({
              icon: "info",
              title: 'Error',
              text: 'Rellene todos los campos',
            })
            return false;
        }
        const response = await dispatch(updateSeccion(seccion));
        if(response.payload.update){
            Swal.fire({
                icon:"success",
                title:'Editado',
                text:'Seccion actualizado con éxito',
                timer: 5000,
            }).then(()=>{
                navigate(-1);
            })
        }else{
            Swal.fire({
                icon:"error",
                title:'Error',
                text:'Error al actualizar seccion',
            })
        }
    }
    useEffect(()=>{
        setSeccion({
            ...seccion,
            file:selectedFile
        });
    },[selectedFile])
    useEffect(()=>{
        getDataSeccion();
    },[])
    return(
        <Navigation>
            <Paper elevation={3}>
                    <GoBackButton />
                    <Grid container spacing={2}>
                        <Grid item md={8} sm={12}>
                            <Box
                                sx={{
                                    margin:5
                                }}
                            >
                                <form
                                    onSubmit={handleUpdateSeccion}
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
                                            Editar Seccion
                                        </Typography>
                                        <TextField 
                                            label="Nombre" 
                                            variant="standard"
                                            value={seccion.name}
                                            fullWidth
                                            sx={{marginTop:3}}
                                            onChange={(e)=>{
                                                setSeccion({
                                                    ...seccion,
                                                    name:e.target.value
                                                })
                                            }}
                                        />
                                        <TextField 
                                            label="Descripción" 
                                            variant="standard"
                                            value={seccion.descripcion}
                                            fullWidth
                                            multiline
                                            sx={{marginTop:3}}
                                            onChange={(e)=>{
                                                setSeccion({
                                                    ...seccion,
                                                    descripcion:e.target.value
                                                })
                                            }}
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
    );
}
export default SeccionEdit