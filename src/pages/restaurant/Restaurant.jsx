import  React from 'react';
import Navigation from '../../components/Navigation';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  TextField,
  CardMedia
} from '@mui/material';
import Footer from '../../components/Footer';
export default function Restaurant() {
  return (
    <>
      <Navigation>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
              <Card sx={{ minWidth: 275 }} elevation={3}>
                <CardContent>
                    <form>
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
                          variant="standard"
                          fullWidth
                          sx={{marginTop:3}}
                      />
                    </form>
                </CardContent>
                <CardActions>
                  <Button
                  fullWidth
                  variant="contained"
                  size="medium"
                  >Crear</Button>
                </CardActions>
              </Card>
          </Grid>
          <Grid container item xs={12} md={8} spacing={2}>
            <Grid item >
                <Card sx={{ maxWidth: 245 }} elevation={3}>
                  <CardMedia
                    component="img"
                    alt="Imagen Restaurante"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Nombre Restaurante
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Eliminar</Button>
                    <Button size="small">Editar</Button>
                  </CardActions>
              </Card>
            </Grid>
            <Grid item >
                <Card sx={{ maxWidth: 245 }}  elevation={3}>
                  <CardMedia
                    component="img"
                    alt="Imagen Restaurante"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Nombre Restaurante
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Eliminar</Button>
                    <Button size="small">Editar</Button>
                  </CardActions>
              </Card>
            </Grid>
            <Grid item >
                <Card sx={{ maxWidth: 245 }}  elevation={3}>
                  <CardMedia
                    component="img"
                    alt="Imagen Restaurante"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Nombre Restaurante
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Eliminar</Button>
                    <Button size="small">Editar</Button>
                  </CardActions>
              </Card>
            </Grid>
            <Grid item >
                <Card sx={{ maxWidth: 245 }}  elevation={3}>
                  <CardMedia
                    component="img"
                    alt="Imagen Restaurante"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Nombre Restaurante
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Eliminar</Button>
                    <Button size="small">Editar</Button>
                  </CardActions>
              </Card>
            </Grid>
          </Grid>
      </Grid>
      </Navigation>
      <Footer />
    </>
  );
}