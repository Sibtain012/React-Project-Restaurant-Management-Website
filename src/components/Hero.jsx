import React from 'react'
import { FiClock, FiUser, FiGrid } from 'react-icons/fi';
import HeroImg from '../assets/images/hero-img.jpg'
import HeroImg1 from '../assets/images/hero-img1.jpg';
import HeroImg2 from '../assets/images/hero-img2.jpg';
import HeroImg3 from '../assets/images/hero-img3.jpg';
import HeroImg4 from '../assets/images/hero-img4.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${HeroImg})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-60 blur-md"></div>

            <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center">
                <h1 className="text-7xl font-serif mb-4">Welcome to our Restaurant</h1>

                <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center">
                        <FiGrid className="mr-1" />
                        <span>4 Servings</span>
                    </div>
                    <div className="flex items-center">
                        <FiClock className="mr-1" />
                        <span>40 Minutes</span>
                    </div>
                    <div className="flex items-center">
                        <FiUser className="mr-1" />
                        <span>person</span>
                    </div>
                </div>

                <Link to='/menu'>
                    <button className="bg-[#349705] hover:bg-[#3e7923] text-white font-semibold py-2 px-6 rounded-full">
                        View Menu
                    </button>
                </Link>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-transparent">
                <div className="px-16 grid grid-cols-4 gap-4">
                    <img className="h-40 w-full object-cover rounded-sm border-4 border-white" src={HeroImg1} alt="Dish 1" />
                    <img className="h-40 w-full object-cover rounded-sm border-4 border-white" src={HeroImg2} alt="Dish 2" />
                    <img className="h-40 w-full object-cover rounded-sm border-4 border-white" src={HeroImg4} alt="Dish 4" />
                    <img className="h-40 w-full object-cover rounded-sm border-4 border-white" src={HeroImg3} alt="Dish 3" />
                </div>
            </div>
        </section>
    )
}

export default Hero
