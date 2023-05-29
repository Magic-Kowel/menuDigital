import { useState } from 'react';
import {
    Pagination
} from '@mui/material';
const [currentPage, setCurrentPage] = useState(1);
function PaginationBar({items,setCurrentPage}){
    const handleChangePage = (event, page) =>{
        setCurrentPage(page);
    }
    const itemsPerPage = 5;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = restaurantFilter.slice(indexOfFirstItem, indexOfLastItem);
    return(
        <Pagination 
            count={Math.ceil(items / itemsPerPage)}
            page={currentPage}
            showFirstButton 
            showLastButton
            onChange={handleChangePage}
        />
    );
}
export default PaginationBar;