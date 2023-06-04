import {
    Pagination,
    Box
} from '@mui/material';
function PaginationBar({currentPage, itemsPerPage=6, restaurantFilter, handleChangePage }){
    return(
        <Box
            mt={4}
        >
            <Pagination 
                count={Math.ceil(restaurantFilter.length / itemsPerPage)}
                page={currentPage}
                showFirstButton
                showLastButton
                onChange={handleChangePage}
            />
        </Box>
    );
}
export default PaginationBar;