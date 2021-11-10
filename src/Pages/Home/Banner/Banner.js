import React from 'react';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
const banerBg = {
  background: `url(${bg})`,
  
  
}
const verticalCenter = {
  display: 'flex',
  alignItems: 'center',
  height: 400,
  
}
/* 
  backgroundColor:'rgba(46, 55, 76, 0.8)',
  backgroundBlendMode: 'darken, luminosity',
  marginTop:170,
  backgroundSize:"100% 100%",
  backgroundRepeat:"no-repeat",
  width:"100%", 
  backgroundPosition: "center"
  663*433 img
*/
const Banner = () => {
    return (
        <Container style={banerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5} style={{...verticalCenter}} sx={{textAlign:"left"}}>
          <Box>
          <Typography variant='h3' >
          Your New Smile <br/>
          Starts Here
          </Typography>
          <Typography variant="h6" sx={{my:3,fontSize:13, color:'gray',fontWeight:300}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </Typography>
          <Button variant="contained">Get Appointment</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={7} style={verticalCenter}>
         <img width="350px" src={chair} alt="chair"/>
        </Grid>
        
      </Grid>
      </Container>
    );
};

export default Banner;