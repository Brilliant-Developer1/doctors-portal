import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';




const OurService = (props) => {
    const {name,details,img} = props.service
    return (
    
        <Grid item xs={4} sm={4} md={4}>
        <Card sx={{ minWidth: 275 }}>
        <CardMedia
            sx={{pt:4}}
            component="img"
            style={{width:"auto", height:"80px",margin:"0 auto"}}
            image={img}
            alt="Image"
            />
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          
          <Typography color="text.secondary" variant="body2">
            {details}
          </Typography>
        </CardContent>
      </Card>
        </Grid>
    
    );
};

export default OurService;