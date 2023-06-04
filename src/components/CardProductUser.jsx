import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Chip,
    Typography
} from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Swal from 'sweetalert2';
import { BASE_URL } from '../config';
function CardProductUser({product}){
    return(
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column'  , width:"15rem" }} elevation={3}>
            <CardMedia
                component="img"
                alt={product.nombre}
                image={`${BASE_URL}${product.path}`}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <Chip 
                    icon={<AttachMoneyIcon />} 
                    label={product.price} 
                    color="success" 
                    variant="outlined" />
                    {product.descripcion}
                </Typography>
            </CardContent>
            <CardActions sx={{ marginTop: 'auto' }}>
            
            </CardActions>
        </Card>
    )
}
export default CardProductUser;