import {useState,useEffect,useMemo} from "react"
import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import Navigation from "../../components/Navigation"
import CardSeccionUser from "../../components/CardSeccionUser";
import { getSeccions } from "../../reducers/seccion/seccion";
import {
    Grid
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FormCreateSeccion from "../../components/FormCreateSeccion";
import SearchFilter from "../../components/SearchFilter";
import PaginationBar from '../../components/PaginationBar';
function Seccion(){
    const dispatch = useDispatch();
    const theme = useTheme();
    const dataSeccions = useSelector((state) => state.seccion);
    const { idRestaurant } = useParams();
    const [seccions, setSeccions] = useState([]);
    const [restaurantFilter, setRestaurantFilter] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const getDataSeccion = async () => {
        const data = await dispatch(getSeccions(idRestaurant));
    };
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    useEffect(() => {
        const { nombre } = selectedOption || '';
        let data = seccions;
        if (nombre) {
        data = seccions.filter((item) => item.nombre.toLowerCase().includes(nombre.toLowerCase()));
        }
        setRestaurantFilter(data);
    }, [seccions, selectedOption]);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = restaurantFilter.slice(indexOfFirstItem, indexOfLastItem);
    useEffect(() => {
        console.log(dataSeccions);
        getDataSeccion();
    }, []);
    useEffect(() => {
        setSeccions(dataSeccions.seccions);
    }, [dataSeccions]);
    const handleChangePage = (event, page) => {
        setCurrentPage(page);
    };
    return(
        <Navigation>
            <Grid container spacing={2}>
                <Grid item sm={12} md={4}>
                    <FormCreateSeccion />
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
                        dataSearch={seccions}
                        setSelectedOption={setSelectedOption}
                    />
                    </Grid>
                </Grid>
                {
                    currentItems.map((seccion,index)=>(
                        <Grid item key={`${seccion.seccion_id}-${index}`}>
                            <CardSeccionUser 
                                seccion={seccion}
                            />
                        </Grid>
                    ))  
                }
                <PaginationBar
                    currentPage={currentPage}
                    restaurantFilter={restaurantFilter}
                    handleChangePage={handleChangePage}
                />
                </Grid>
            </Grid>
        </Navigation>
    );
}
export default Seccion;