import { useDispatch } from 'react-redux';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@mui/material';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { BASE_URL } from '../config';
import { deleteSeccion, getSeccions } from '../reducers/seccion/seccion';
function CardSeccionUser({seccion}){
    console.log(seccion);
    const dispatch = useDispatch();
    const handleIsDeleteSeccion = async (seccion)=>{
        const {seccion_id,restaurante_id} = seccion;
        Swal.fire({
            title: '¿Deseas eliminar la seccion?',
            showDenyButton: true,
            confirmButtonText: 'Eliminar',
            denyButtonText: `Cancelar`,
        }).then((result) => {
            if (result.isConfirmed) {
                handleDeleteSeccion(seccion_id,restaurante_id);
            }
        })
    }
    const handleDeleteSeccion = async (seccion_id,restaurante_id) =>{
        const response = await dispatch(deleteSeccion(seccion_id));
        if(response.payload===204){
            Swal.fire({
                icon:"success",
                title: 'Eliminado',
                text: 'Restaurante eliminado con éxito',
            })
            dispatch(getSeccions(restaurante_id))
            return false;
        }
        Swal.fire({
            icon:"error",
            title: 'Error',
            text: 'Error al eliminar restaurante',
        })
    }
    return(
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column'  , width:"15rem" }} elevation={3}>
            <CardMedia
                component="img"
                alt={seccion.nombre}
                image={`${BASE_URL}${seccion.path}`}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {seccion.nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {seccion.descripcion}
                </Typography>
            </CardContent>
            <CardActions sx={{ marginTop: 'auto' }}>
                <Button 
                    size="small"
                    onClick={()=>handleIsDeleteSeccion(seccion)}
                >
                    Eliminar
                </Button>
                <Link 
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    to={`/seccion/edit/${seccion.seccion_id}`}
                >
                    <Button size="small">
                        Editar
                    </Button>
                </Link>
                <Link 
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    to={`/producto/${seccion.seccion_id}`}
                >
                    <Button size="small">
                        Producto
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
}
export default CardSeccionUser;