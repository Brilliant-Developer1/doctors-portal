import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import './OurServices.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import OurService from '../OurService/OurService';

const OurServices = () => {
    const [OurServices, setOurServices] = useState([])

    useEffect( () => {
        fetch('./OurServicesData.json')
        .then(res => res.json())
        .then(data => setOurServices(data))
    },[])
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
        <Typography sx={{fontWeight:500,m:4,color:'success.main'}} variant="h3" component="div">
        OUR SERVICES
        </Typography>
            <Grid className="all-services" container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                OurServices.map((service) => <OurService
                key={service.name}
                service={service}
                ></OurService>)
                
                
            }
            </Grid>
        </Container>
    </Box>
    );
};

export default OurServices;