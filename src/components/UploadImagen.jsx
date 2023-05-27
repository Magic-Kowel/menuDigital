import { useState, useEffect, useRef } from "react";
import { BASE_URL } from "../config";
import { 
    Card,
    CardContent,
    Box,
    CardMedia,
    CardActions,
    Button,
    IconButton
} from "@mui/material";
import BackupIcon from '@mui/icons-material/Backup';
import CancelIcon from '@mui/icons-material/Cancel';
function UploadImagen({selectedFile,setSelectedFile}){
    const fileInputRef = useRef(null);
    const [updateImg, setUpdateImg] = useState(false);
    const [imagenData, setImagenData] = useState(null);
    console.log(imagenData+selectedFile);
    const handleFileChange = (event) => {
        setUpdateImg(true);
        setSelectedFile(event.target.files[0] || null);
        setImagenData(URL.createObjectURL(event.target.files[0] || null))
    };
    const handleDeletaImagen = () =>{
        setSelectedFile(null);
        setImagenData(null);
        fileInputRef.current.value = null;
    }
    useEffect(() => {
        if (!updateImg) {
            setImagenData(BASE_URL + selectedFile);
        }
      }, [selectedFile]);
    return(
        <Card
            sx={{
                margin:5,
                width:"20rem",
            }}
        > 
            <CardContent>
                    <IconButton
                        onClick={handleDeletaImagen}
                    >
                        <CancelIcon 
                            color="error"
                        />
                    </IconButton>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CardMedia
                        component="img"
                        sx={{ width:250 }}
                        image={imagenData}
                        title=""
                    />
                </Box>
            </CardContent>
            <CardActions>
                <Button
                fullWidth
                component="label"
                variant="contained"
                startIcon={<BackupIcon />}>
                    Subir
                    <input
                        ref={fileInputRef}
                        type="file"
                        style={{display:"none"}} 
                        onChange={handleFileChange}
                    />
                </Button>
            </CardActions>
        </Card>
    );
}
export default UploadImagen;