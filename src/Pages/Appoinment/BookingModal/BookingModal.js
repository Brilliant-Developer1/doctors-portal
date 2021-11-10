import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from './../../../hooks/useAuth';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const BookingModal = ({handleBookingClose,openBooking,booking,date,setBookingSuccess}) => {
    const {name,time} = booking;
    const {user} = useAuth();

    const initialBookingInfo = {
      patientName: user.displayName,
      email: user.email,
      phone: ''
    }

    const [bookingInfo, setBookingInfo] = useState(initialBookingInfo);

    
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...bookingInfo};
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }

    const handleSubmit = e => {
        //Collect Data 
        const appointment = {
          ...bookingInfo,
          time,
          serviceName: name,
          date: date.toLocaleDateString()
        }
        // send to the server
        fetch('https://quiet-oasis-65860.herokuapp.com/appointments', {
          method:'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(appointment)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            setBookingSuccess(true)
            handleBookingClose();
          }
        })

        
        e.preventDefault();
    }
    return (
        <Modal
        keepMounted
        open={openBooking}
        onClose={handleBookingClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2"
          sx={{textAlign:'center',mb:2}}>
            {name}
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
                disabled
                sx={{width:'100%',m:1}}
                label="Time"
                id="outlined-size-small"
                defaultValue={time}
                size="small"/>
            <TextField
                sx={{width:'100%',m:1}}
                label="Name"
                id="outlined-size-small"
                defaultValue={user.displayName}
                name="patientName"
                onBlur={handleOnBlur}
                size="small"/>
            <TextField
                sx={{width:'100%',m:1}}
                label="Number"
                type="number"
                id="outlined-size-small"
                defaultValue="Phone Number"
                name="phone"
                onBlur={handleOnBlur}
                size="small"/>
            <TextField
                sx={{width:'100%',m:1}}
                label="Email"
                type="email"
                id="outlined-size-small"
                defaultValue={user.email}
                name="email"
                onBlur={handleOnBlur}
                size="small"/>
            <TextField
                sx={{width:'100%',m:1}}
                label="Date"
                disabled
                id="outlined-size-small"
                defaultValue={date.toDateString()}
                size="small"/>
                <Button
                sx={{textAlign:'center'}}
                type="submit" variant='contained'>Submit</Button>
          </form>
        </Box>
      </Modal>
    );
};

export default BookingModal;