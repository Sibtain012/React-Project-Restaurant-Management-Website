import React from 'react';
import Hero from '../components/Hero';
import HMenu from '../components/HMenu';
import Testimonial from '../components/testimonial';
import HContactUs from '../components/HContactUs';


const Home = () => {
    return (
        <div>
            <Hero />
            <HMenu />
            <Testimonial />
            <HContactUs />
        </div>
    );
};

export default Home;