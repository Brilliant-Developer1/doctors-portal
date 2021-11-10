import { TextField, Button, Container, Alert } from '@mui/material';
import React, { useState } from 'react';
import useAuth from './../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false)
    const {token} = useAuth();
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = {email}
        fetch('https://quiet-oasis-65860.herokuapp.com/users/admin', {
            method: 'PUT',
            headers:{
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                console.log(data);
                setSuccess(true)
            }
        })
        e.preventDefault();
    }
    return (
        <Container>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
            <TextField sx={{width:'50%', m:2}}
            type='email' 
            label="Email"
            onBlur={handleOnBlur} 
            variant="standard" /> <br />
            <Button type='submit' variant='contained'>Make Admin</Button>
            </form>
            {success && <Alert  severity="success">Admin added Successfully</Alert> }
        </Container>
    );
};

export default MakeAdmin;