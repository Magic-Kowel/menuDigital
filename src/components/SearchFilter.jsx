import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
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