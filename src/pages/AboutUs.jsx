import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import titleImg from '../assets/images/TitleImage.png';
import mission from '../assets/images/mission.jpg';
import aboutUs from '../assets/images/about-us.jpg';
import chef from '../assets/images/chefs/chef.jpeg';

const chefs = [
    {
        name: 'Brodie Burgess',
        position: 'Sous Chef',
        image: chef,
        socialLinks: {
            facebook: '#',
            twitter: '#',
            instagram: '#',
        },
    },
    {
        name: 'Lorenzo Beck',
        position: 'Executive Chef',
        image: chef,
        socialLinks: {
            facebook: '#',
            twitter: '#',
            instagram: '#',
        },
    },
    {
        name: 'Warren Walter',
        position: 'Sous Chef',
        image: chef,
        socialLinks: {
            facebook: '#',
            twitter: '#',
            instagram: '#',
        },
    },
];

const AboutUs = () => {
    return (
        <div>
            <div className='relative h-[400px] bg-cover bg-center' style={{ backgroundImage: `url(${titleImg})` }}>
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center">
                    <h1 className="text-7xl font-serif mb-4">About Us</h1>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center bg-white p-8">
                <div className="w-full lg:w-1/2 relative mb-8 lg:mb-0">
                    <div className="absolute w-full h-full bg-brown-300 transform translate-x-6 translate-y-6"></div>
                    <img
                        src={aboutUs}
                        alt="Restaurant creativity"
                        className="relative z-10 w-full h-auto shadow-xl rounded-lg"
                    />
                </div>

                <div className="w-full lg:w-1/2 lg:pl-16">
                    <h3 className="text-[#349705] font-serif font-bold text-lg mb-2">Our History</h3>
                    <h2 className="text-4xl font-serif font-semibold mb-4">
                        Creativity is always on our menu.
                    </h2>
                    <p className="text-gray-600">
                        Aliquet egestas gravida orci nulla lacus suspendisse. Vel ullamcorper ultrices volutpat enim dignissim id purus.
                        Uma quam massa urna dolor enim dui lectus id...
                    </p>
                </div>
            </div>

            <div className="bg-white py-12">
                <h2 className="text-4xl font-serif font-semibold text-center mb-8">Meet Our Team</h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4">
                    {chefs.map((chef, index) => (
                        <div key={index} className="text-center w-full max-w-sm">
                            <div className="relative w-full h-64 bg-gray-200 mb-4">
                                <img
                                    src={chef.image}
                                    alt={chef.name}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            <h3 className="text-xl font-bold">{chef.name}</h3>
                            <p className="text-green-700 mb-4">{chef.position}</p>
                            <div className="flex justify-center space-x-4">
                                <a href={chef.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebookF} className="text-[#349705]" />
                                </a>
                                <a href={chef.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} className="text-[#349705]" />
                                </a>
                                <a href={chef.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} className="text-[#349705]" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center bg-white p-8">
                <div className="w-full lg:w-1/2 lg:pl-16">
                    <h3 className="text-[#349705] font-serif font-bold text-lg mb-2">Our Mission & Values</h3>
                    <h2 className="text-4xl font-serif font-semibold mb-4">
                        Paradise on your plate
                    </h2>
                    <p className="text-gray-600">
                        Aliquet egestas gravida orci nulla lacus suspendisse. Vel ullamcorper ultrices volutpat enim dignissim id purus.
                        Uma quam massa urna dolor enim dui lectus id...
                    </p>
                </div>
                <div className="w-full lg:w-1/2 relative mb-8 lg:mb-0">
                    <div className="absolute w-full h-full bg-brown-300 transform translate-x-6 translate-y-6"></div>
                    <img
                        src={mission}
                        alt="Restaurant creativity"
                        className="relative z-10 w-full h-auto shadow-xl rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
