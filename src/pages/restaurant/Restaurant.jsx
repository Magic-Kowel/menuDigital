import  React,{useEffect,useState} from 'react';
import { useDispatch } from "react-redux";
import Navigation from '../../components/Navigation';
// import { 
//   getRestaurantsUser
// } from '../../api/restaurant/restaurant';
import { getRestaurantsUser } from '../../reducers/restaurant/restaurant';  
import {
  Grid
} from '@mui/material';
import CardRestaurantUser from '../../components/CardRestaurantUser';
import SearchFilter from '../../components/SearchFilter';
import FormCreateRestaurant from '../../components/FormCreateRestaurant';
import { useTheme } from '@mui/material/styles';

export default function Restaurant() {
  const dispatch = useDispatch()
  const theme = useTheme();
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantFilter, setRestaurantFilter] = useState([]);

  const [selectedOption, setSelectedOption] = useState(null)

  const getDataRestaurant = async () =>{
    try {
      const data = await dispatch(getRestaurantsUser());
      console.log(data.payload);
      setRestaurants(data.payload);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    const { nombre } = selectedOption || "";
    let data = restaurants;
    if (nombre) {
      data = restaurants.filter((item) =>
        item.nombre.toLowerCase().includes(nombre.toLowerCase())
      );
    }
    setRestaurantFilter(data);
  }, [restaurants, selectedOption]);
  useEffect(()=>{
    getDataRestaurant();
  },[])
  return (
    <>
      <Navigation>
        <Grid container spacing={2}>
          <Grid item sm={12} md={4}>
              <FormCreateRestaurant
                getDataRestaurant={getDataRestaurant}
              />
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
                <Grid item  mt={theme.breakpoints.down('sm') ? 2 : 0} sx={{ width: '90%' }}>
                  <SearchFilter
                    dataSearch={restaurants}
                    setSelectedOption={setSelectedOption}
                  />
                </Grid>
            </Grid>
            {restaurantFilter.map((restaurants)=>(
                <Grid item key={restaurants.restaurante_id} >
                    <CardRestaurantUser
                      path={restaurants.path}
                      name={restaurants.nombre}
                      idRestaurant={restaurants.restaurante_id}
                      setRestaurant={setRestaurants}
                    />
                </Grid>
            ))}
          </Grid>
      </Grid>
      </Navigation>
    </>
  );
}