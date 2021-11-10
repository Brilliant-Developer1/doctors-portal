import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Booking from '../Booking/Booking';

const AvailableAppointments = ({date}) => {
    const [timeSlot, setTimeSlot] = useState([])

    useEffect( () => {
        fetch('appointmentData.json')
        .then(res => res.json())
        .then(data => setTimeSlot(data))
    },[])

    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography 
            variant='h5'
            sx={{color:'info.main', p:4,fontWeight:500}}
            >Available Appointments {date.toDateString()}</Typography>
            {bookingSuccess && <Alert  severity="success">Your Appointment is Booked</Alert> }
            <Grid container spacing={2}>
                {
                    timeSlot.map(time => <Booking
                        key={timeSlot.id}
                        booking={time}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                        ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;