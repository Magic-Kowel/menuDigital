import Navigation from "../../components/Navigation";
import { 
    Grid,
    Card,
    CardContent,
    CardActions,
    Box,
    Typography
} from "@mui/material";

function User(){
    return(
        <Navigation>
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Box
                                sx={{textAlign:'center'}}
                            >
                                <AccountCircleIcon
                                    sx={{
                                        fontSize:"5rem"
                                    }}
                                />
                                <Box
                                    sx={{
                                        display:"flex",
                                        justifyContent:"center",
                                        marginTop:"1rem"
                                    }}
                                >
                                    <Typography
                                        component="p"
                                        mr={1}
                                    >
                                        Nombre
                                    </Typography>
                                    <Typography
                                        component="p"
                                        color="text.secondary"
                                    >
                                        Nombre Del usuario
                                    </Typography>

                                </Box>
                                <Box
                                    sx={{
                                        display:"flex",
                                        justifyContent:"center",
                                        marginTop:"1rem"
                                    }}
                                >
                                    <Typography
                                        component="p"
                                        mr={1}
                                    >
                                        Email
                                    </Typography>
                                    <Typography
                                        component="p"
                                        color="text.secondary"
                                    >
                                        correo@gmail.com
                                    </Typography>

                                </Box>
                            </Box>
                        </CardContent>
                        <CardActions>
                            
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs>
                </Grid>
            </Grid>
        </Navigation>
    );
}
export default User;