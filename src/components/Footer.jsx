import { Grid,Box } from "@mui/material";
function Footer(){
    return(
        <Grid
        mt={5}
        component='footer' 
        justifyContent="center"   
        spacing={2}>
            <Grid item xs={12}>
                <Box 
                    sx={{
                        background:'#000',
                        width:"100%",
                        paddingTop: "3rem",
                        paddingBottom: "3rem"
                    }}
                    >
                    
                </Box>
            </Grid>

        </Grid>
    );
}
export default Footer;