import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import doctor from "../../../images/doctor.png"
import bg from "../../../images/appointment-bg.png"
import { Button, Container, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor:'rgba(46, 55, 76, 0.8)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop:170,
    backgroundSize:"100% 100%",
    backgroundRepeat:"no-repeat",
    width:'100%', height:300,
    backgroundPosition: "center"
}

const AppointmentBanner = () => {
    return (
        <Container>
        <Box style={appointmentBg} sx={{mx:"auto", flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
            <img
            style={{width:400,height:400, 
                marginTop:"-115px",
                
            }}
            src={doctor} alt="doctor" />
            </Grid>
            <Grid item xs={12} md={6} sx={{display:'flex',justifyContent:'flex-start',textAlign:'left',alignItems:'center'}}>
            <Box>
            <Typography sx={{mb:5}} variant='h6'>
            Appointment
            </Typography>
            <Typography sx={{my:5}} variant='h4'>
            Make an appointment Today
            </Typography>
            <Typography  variant='p'>
            Lorem10 add gvdegv nnbhvd ccsf gbde nhhs cdf ggdrg
            </Typography>
            <Button variant="contained">Learn More</Button>
            </Box>
            </Grid>
        </Grid>
        </Box>
        </Container>
    );
};

export default AppointmentBanner;