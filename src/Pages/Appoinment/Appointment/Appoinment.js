import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeder from '../AppointmentHeder/AppointmentHeder';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appoinment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeder
            date={date} setDate={setDate}
            ></AppointmentHeder>
            <AvailableAppointments date={date}></AvailableAppointments>
        </div>
    );
};

export default Appoinment;