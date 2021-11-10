import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import OurServices from '../OurServices/OurServices';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <OurServices></OurServices>
            <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;