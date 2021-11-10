import { Container, Grid } from '@mui/material';
import React from 'react';
import Calander from '../../Shared/Calender/Calander';
import Appointments from '../Appointments/Appointments';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date())
    return (
        <Container>
        <Grid container spacing={2} >
        <Grid item xs>
         <Calander
         date={date}
         setDate={setDate}
         ></Calander>
        </Grid>
        <Grid item xs>
          <Appointments date={date}></Appointments>
        </Grid>
      </Grid>
        </Container>
    );
};

export default DashboardHome;