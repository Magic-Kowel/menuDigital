import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';
export default function SearchFilter({dataSearch,setSelectedOption}) {
    return (
        <Autocomplete
            disablePortal
            options={dataSearch}
            getOptionLabel={(option) => option.nombre}
            renderInput={(params) => <TextField {...params} label="Buscar" />}
            onChange={(event, newValue) => {
                setSelectedOption(newValue);
            }}
        />
    );
}