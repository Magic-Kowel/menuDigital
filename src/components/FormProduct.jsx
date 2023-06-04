import { useRef,useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct,getProducts } from '../reducers/product/product';
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
    Card,
    CardContent,
    CardActions,
    Button,
    Typography,
    TextField
} from '@mui/material';
import CurrencyTextField from '@lupus-ai/mui-currency-textfield';
import UploadImagen from './UploadImagen';
function FormProduct(){
    const dispatch = useDispatch();
    const {idSeccion} = useParams();
    const form = useRef(null);
    const [selectedFile, setSelectedFile] = useState("");
    const handleSave = async (e) =>{
        e.preventDefault();
        const formData = new FormData(form.current);
        const product ={
            'name': formData.get('name'),
            'description': formData.get('description'),
            'price': formData.get('price'),
            'file': selectedFile,
            'idSeccion': idSeccion
        }
        if(
            product.name.trim()==="" ||
            product.description.trim()==="" ||
            product.price.trim()==="" ||
            !product.file
        ){
            Swal.fire({
              icon: "info",
              title: 'Error',
              text: 'Rellene todos los datos',
            })
            return false;
        }
        console.log(product);
        try {
            const response = await dispatch(createProduct(product));
            if(response.payload.created){
                dispatch(getProducts(idSeccion))
                Swal.fire({
                    icon:"success",
                    title: 'Guardado',
                    text: 'Producto guardado con éxito',
                });
            }else{
                Swal.fire({
                    icon:"error",
                    title: 'Error',
                    text: 'Seccion no guardado',
                })
            }
        } catch (error) {
            
        }
        
    }
    return(
        <Card sx={{ minWidth: 275 }} elevation={3}>
            <form
                ref={form}
                onSubmit={handleSave}
                autoComplete="off"
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
                        Crear Product
                        </Typography>
                        <TextField 
                            id="name"
                            name="name"
                            label="Nombre" 
                            variant="standard"
                            fullWidth
                            sx={{marginTop:3}}
                        />
                        <TextField
                            sx={{marginTop:3}}
                            name="description"
                            label="Descripcion"
                            fullWidth
                            multiline
                        />
                    
                        <CurrencyTextField
                            sx={{ marginTop: 3 }}
                            name="price"
                            label="Precio"
                            variant="standard"
                            fullWidth
                            currencySymbol="$"
                            minimumValue={0}
                            outputFormat="number"
                            decimalCharacter="."
                            digitGroupSeparator=","
                        />
                        <UploadImagen 
                            setSelectedFile={setSelectedFile}
                            selectedFile={selectedFile}
                        />
                </CardContent>
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
    )
}
export default FormProduct;