import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';

function NavbarNotLogin() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar
    position="static">
      <Container maxWidth="xl">
        <Toolbar 
          disableGutters
          sx={{
            display: { xs: "flex" },
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 300,
              
              fontSize:20,
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            Ubicatucomida 
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography 
                  sx={{color: '#fff'}} >
                    <Link href={`/`} underline="none">
                      Login
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography 
                  sx={{color: '#fff'}} >
                    <Link href={`/signon`} underline="none">
                      Registrarte
                    </Link>
                  </Typography>
                </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 200,
              fontSize:20,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Ubicatucomida
          </Typography>
          <Box sx={{ flexGrow: 1, 
            display: {
            xs: 'none',
            md: 'flex' ,
            flexDirection: "row",
            justifyContent: "end"
            }
            }}>
              <Button
                href={`/`} 
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#fff', display: 'block' }}
              >
                Login
              </Button>
              <Button
                href={`/signon`} 
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#fff', display: 'block' }}
              >
                Registrarte
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavbarNotLogin;