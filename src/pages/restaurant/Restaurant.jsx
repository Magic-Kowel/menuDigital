import  React,{useEffect,useState} from 'react';
import Swal from 'sweetalert2';
import { useSelector } from "react-redux";
import Navigation from '../../components/Navigation';
import { 
  getRestaurantsUser,
  createRestaurant
} from '../../api/restaurant/restaurant';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  TextField
} from '@mui/material';
import Footer from '../../components/Footer';
import CardRestaurantUser from '../../components/CardRestaurantUser';
import SearchFilter from '../../components/SearchFilter';
export default function Restaurant() {
  const [restaurant, setRestaurant] = useState([]);
  const [restaurantFilter, setRestaurantFilter] = useState([]);
  const [restaurantName, setRestaurantName] = useState('');
  const [selectedOption, setSelectedOption] = useState(null)
  const user = useSelector(state => state.user);

  const handleCreateRestaurant = async (e) =>{
    e.preventDefault();
    if(restaurantName.trim()!==""){
      await createRestaurant(restaurantName);
      setRestaurantName('');
      Swal.fire({
        icon:"success",
        title: 'Guardado',
        text: 'Restaurante guardado con éxito',
      })
      setTimeout(()=>{
        getDataRestaurant();
      },1000);
    }
  }
  const getDataRestaurant = async () =>{
    let data = await getRestaurantsUser();
    setRestaurant(data);
  }
  useEffect(() => {
    const { nombre } = selectedOption || "";
    let data = restaurant;
    if (nombre) {
      data = restaurant.filter((item) =>
        item.nombre.toLowerCase().includes(nombre.toLowerCase())
      );
    }
    setRestaurantFilter(data);
  }, [restaurant, selectedOption]);
  useEffect(()=>{
    getDataRestaurant();
  },[])
  return (
    <>
      <Navigation>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
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
                            value={restaurantName}
                            onChange={
                              (e)=>{
                                setRestaurantName(e.target.value);
                              }
                            }
                            variant="standard"
                            fullWidth
                            sx={{marginTop:3}}
                        />
                    
                  </CardContent>
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
          </Grid>
          <Grid container item xs={12} md={8} spacing={2}>
            <Grid   
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item sm={8}>
                  <SearchFilter
                    dataSearch={restaurant}
                    setSelectedOption={setSelectedOption}
                  />
                </Grid>
            </Grid>
            {restaurantFilter.map((restaurant)=>(
              <Grid item key={restaurant.restaurante_id} >
                  <CardRestaurantUser
                    path={restaurant.path}
                    name={restaurant.nombre}
                    idRestaurant={restaurant.restaurante_id}
                    setRestaurant={setRestaurant}
                  />
              </Grid>
            ))}
          </Grid>
      </Grid>
      </Navigation>
      <Footer />
    </>
  );
}