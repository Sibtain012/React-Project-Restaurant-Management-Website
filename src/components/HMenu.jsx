import React from 'react';
import Item1 from '../assets/images/menu-items/sweet-desserts.jpg'
import Item2 from '../assets/images/menu-items/coffee.jpg'
import Item3 from '../assets/images/menu-items/breakfasts.jpg'
import Item4 from '../assets/images/menu-items/cocktails.jpg'
import Item5 from '../assets/images/menu-items/greek-salad.jpg'
import Item6 from '../assets/images/menu-items/spicy-seafood.jpg'
import Item7 from '../assets/images/menu-items/pizza-pepperoni.jpg'
import Item8 from '../assets/images/menu-items/tuna-salad.jpg'
import { Link } from 'react-router-dom';

const Menu = () => {
    const menuItems = [
        {
            title: 'Sweet Desserts',
            description: '',
            image: Item3,
        },
        {
            title: 'Amazing Coffee',
            description: '',
            image: Item4,
        },
        {
            title: 'Best Breakfasts',
            description: '',
            image: Item2,
        },
        {
            title: 'Great Cocktails',
            description: '',
            image: Item1,
        }
    ]

    const dishes = [
        {
            name: "Greek Salad",
            description: "Aliquet egestas gravida orci nulla lacus suspendisse.",
            image: Item5,
        },
        {
            name: "Spicy Seafood",
            description: "Morbi aenean congue leo sit ornare porta dapibus eget felis.",
            image: Item6,
        },
        {
            name: "Pizza Pepperoni",
            description: "A libero purus faucibus massa faucibus.",
            image: Item7,
        },
        {
            name: "Tuna Salad",
            description: "Vel ullamcorper senan congue leo sit ornare.",
            image: Item8,
        },
    ];
    return (
        <div>
            <section className='py-16'>
                <div className='text-center mb-6'>
                    <h3 className='text-2xl font-serif uppercase text-[#349705] tracking-wider mb-1'>-Restaurant-</h3>
                    <h2 className='text-4xl font-serif font-semibold'>Explore our splendid menu</h2>
                </div>
                <div className='p-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {menuItems.map((item, index) => (
                        <div key={index} className="relative group h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}>
                            <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity group-hover:bg-opacity-80"></div>
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
                                <h3 className="text-2xl font-semibold mb-4">{item.title || 'Untitled'}</h3>
                                <Link to='/menu'>
                                <button className="bg-[#349705] text-white px-4 py-2 rounded transition-transform group-hover:scale-110">
                                    View menu
                                </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="py-12">
                <div className="text-center mb-8">
                    <h5 className="text-2xl text-[#349705] uppercase font-serif tracking-wider">-Restaurant-</h5>
                    <h2 className="text-4xl font-bold font-serif mb-4">Most Popular Dishes</h2>
                    <p className="text-gray-500 font-sans max-w-xl mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, vero atque aperiam dolorum molestiae eos quo repudiandae adipisci dignissimos dolores quia in ab corrupti fuga blanditiis. Nesciunt laboriosam repellendus eius.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {dishes.map((dish, index) => (
                        <div
                            key={index}
                            className="text-center p-4 border-2 border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
                        >
                            <img
                                src={dish.image}
                                alt={dish.name}
                                className="h-32 w-32 mx-auto object-cover rounded-full mb-4"
                            />
                            <h3 className="text-xl font-serif font-bold mb-2">{dish.name}</h3>
                            <p className="text-gray-500 font-sans">{dish.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Menu;
