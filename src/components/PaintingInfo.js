import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import {useParams} from 'react-router-dom';
import usePainting from '../hooks/usePainting';

export default function PaintingInfo(){
    const {paintingId} = useParams();
    const {painting} = usePainting(paintingId);
    console.log(painting?.favorite)
    return (
        <Box sx={{display: "flex", flexDirection: "column"}}>
            <Card sx={{display: "inline-flex", flexDirection:'column', alignSelf: "center", alignItems: 'center', maxWidth: 1000}} key={painting?.id}>
                <CardMedia
                    component="img"
                    height="100%"
                    width="100%"
                    src={painting?.img}
                    alt={painting?.title}
                    style={{ objectFit: "contain" }}
                />
                <CardContent sx={{display: "flex", flexDirection:'column', textAlign:'center'}}>
                    <Typography gutterBottom variant="h5" component="div">
                        {painting?.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {painting?.medium}
                    </Typography>
                   
                    <Divider />
                    <Typography>
                        {painting?.description}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}