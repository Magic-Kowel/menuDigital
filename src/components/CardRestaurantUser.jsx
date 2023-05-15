import {
    Card,
    CardContent,
    CardActions,
    Button,
    Typography,
    CardMedia
} from '@mui/material';
import { 
    deleteRestaurant, 
    getRestaurantsUser 
} from '../api/restaurant/restaurant';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
function CardRestaurantUser(props){
    const {name,path,idRestaurant,setRestaurant} = props;
    const handleIsDeleteRestaurant = (id)=>{
        Swal.fire({
            title: '¿Deseas eliminar el restaurante?',
            showDenyButton: true,
            confirmButtonText: 'Eliminar',
            denyButtonText: `Cancelar`,
        }).then((result) => {
            if (result.isConfirmed) {
                handleDeleteRestaurant(id);
            }
        })
    }
    const handleDeleteRestaurant = async (id) =>{
        const response = await deleteRestaurant(id);
        if(response===204){
            Swal.fire({
                icon:"success",
                title: 'Eliminado',
                text: 'Restaurante eliminado con éxito',
            })
            const responseRestaurant = await getRestaurantsUser();
            setRestaurant(responseRestaurant);
            return false;
        }
        Swal.fire({
            icon:"error",
            title: 'Error',
            text: 'Error al eliminar restaurante',
        })
    }
    return(
        <Card sx={{ width:"15rem" }} elevation={3}>
            <CardMedia
                component="img"
                alt={name}
                height="140"
                image={path}
            />
            <CardContent>
                <Typography 
                gutterBottom 
                component="div">
                    {name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button 
                onClick={()=>handleIsDeleteRestaurant(idRestaurant)}
                size="small">
                    Eliminar
                </Button>
                <Link 
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    to={`/restaurant/edit/${idRestaurant}`}
                >
                    <Button size="small">
                        Editar
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
}
export default CardRestaurantUser;