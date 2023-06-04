import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../../components/Navigation";
import {useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../reducers/product/product";  
import {
    Grid
} from '@mui/material';
import CardProductUser from "../../components/CardProductUser";
import FormProduct from "../../components/FormProduct";
function Product(){
    const {idSeccion} = useParams();
    const dispatch = useDispatch();
    const dataProduct = useSelector((state) => state.product);
    const [products,setProducts] = useState([]);
    const getDataProduct = async () =>{
        const data = await dispatch(getProducts(idSeccion));
    }
    useEffect(()=>{
        getDataProduct();
    },[])
    useEffect(() => {
        setProducts(dataProduct.products);
    }, [dataProduct]);
    return(
        <>
            <Navigation>
                <Grid container spacing={2}>
                    <Grid item sm={12} md={4}>
                        <FormProduct />
                    </Grid>
                    <Grid 
                        container
                        justifyContent="center"
                        item 
                        xs={12} 
                        md={8} 
                        spacing={2}
                    > 
                    <Grid   
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item   >
                       
                        </Grid>
                    </Grid>
                        {products.map((product)=>(
                            <Grid item>
                                <CardProductUser 
                                    product={product}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Navigation>
        </>
    )
}
export default Product;