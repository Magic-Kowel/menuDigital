import { Link as RouterLink  } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
function ItemNavigation({
    route,
    name,
    children,
    open
}){
    return(
        <RouterLink to={route} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                        >
                        <ListItemIcon
                            sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                            }}
                        >
                            {children}
                        </ListItemIcon>
                        <ListItemText primary={name} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>       
        </RouterLink>
    );
}
export default ItemNavigation;