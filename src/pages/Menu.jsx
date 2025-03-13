import React, { useState } from 'react'
import titleImg from '../assets/images/TitleImage.png'

const Menu = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const starters = [
        { name: 'Tomato Bruschetta', description: 'Lectus sit ac quam viverra ridiculus scelerisque dapibus sed. Id nisi parturient adipiscing ac lectus tempor.', price: '$5' },
        { name: 'Cesar Salad', description: 'Morbi aenean congue leo sit ornare proin duis sapien aenean.', price: '$10' },
        { name: 'Greek Salad', description: 'Massa tempor imperdiet. Id d venenatis adipiscing tellus congue. A libero purus faucibus massa faucibus.', price: '$11' },
        { name: 'Breaded Mushrooms', description: 'Sagittis sed aliquam lorem dignissim. Massa bibendum ligula morbi arcu purus lectus.', price: '$22' },
        { name: 'French Onion Soup', description: 'Morbi aenean congue leo sit ornare proin duis sapien aenean.', price: '$12' },
        { name: 'Houmous', description: 'Lectus sit ac quam viverra ridiculus scelerisque dapibus sed. Id nisi parturient adipiscing.', price: '$12' },
    ];

    const mainCourse = [
        { name: 'Grilled Chicken Breast', description: 'Morbi aenean congue leo sit ornare proin dumper a eget felis quis sapien aenean...', price: '$5' },
        { name: 'Apple Honey Pork Sausage', description: 'Morbi aenean congue leo sit ornare proin dumper a eget felis quis sapien aenean...', price: '$10' },
        { name: 'Pork Chop', description: 'Morbi aenean congue leo sit ornare proin dumper a eget felis quis sapien aenean...', price: '$11' },
        { name: 'Blackened Catfish', description: 'Morbi aenean congue leo sit ornare proin dumper a eget felis quis sapien aenean...', price: '$11' },
        { name: 'Grilled Meat Platter', description: 'Morbi aenean congue leo sit ornare proin dumper a eget felis quis sapien aenean...', price: '$22' },
        { name: 'Seafood Gumbo', description: 'Morbi aenean congue leo sit ornare proin dumper a eget felis quis sapien aenean...', price: '$12' },
        { name: 'Lamb Meatballs', description: 'Morbi aenean congue leo sit ornare proin dumper a eget felis quis sapien aenean...', price: '$5' },
        { name: 'BBQ Chicken Wings', description: 'Morbi aenean congue leo sit ornare proin dumper a eget felis quis sapien aenean...', price: '$5' },
    ];

    const drinks = [
        { name: 'Water', description: 'Morbi aenean congue leo sit ornare proin dumper a eget felis quis sapien aenean...', price: '$5' },
        { name: 'Orange Juice', description: 'Morbi aenean congue leo sit ornare proin dumper a eget felis quis sapien aenean...', price: '$10' },
        { name: 'Milk Shake', description: 'Morbi aenean congue leo sit ornare proin dumper a eget felis quis sapien aenean...', price: '$11' },
        { name: 'Iced Tea', description: 'Morbi aenean congue leo sit ornare proin dumper a eget felis quis sapien aenean...', price: '$11' },
        { name: 'Manhattan', description: 'Morbi aenean congue leo sit ornare proin dumper a eget felis quis sapien aenean...', price: '$22' },
        { name: 'White Lady', description: 'Morbi aenean congue leo sit ornare proin dumper a eget felis quis sapien aenean...', price: '$12' },
        { name: 'Long Island', description: 'Morbi aenean congue leo sit ornare proin dumper a eget felis quis sapien aenean...', price: '$5' },
        { name: 'Negroni', description: 'Morbi aenean congue leo sit ornare proin dumper a eget felis quis sapien aenean...', price: '$5' },
    ];

    const allMenuItems = [...starters, ...mainCourse, ...drinks];

    const filteredItems = allMenuItems.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section className="scroll-smooth">
            <div className='relative h-[400px] bg-cover bg-center' style={{ backgroundImage: `url(${titleImg})` }}>
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center">
                    <h1 className="text-7xl font-serif mb-4">Menu</h1>
                </div>
            </div>

            <div className="py-12 bg-white text-center">
                <h2 className="text-4xl font-bold font-serif mb-4">Main Menu</h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                    Lectus sit a quam viverra ridiculus scelerisque dapibus sed, id rid porttitor adipiscing
                    sit lectus tempor. Sagittis atod aliquam lobortis dignissim. Massa bibendum ligula
                    molestie arcu purus lectus fermentum sed.
                </p>
            </div>

            <div className="max-w-md mx-auto mb-8">
                <input
                    type="text"
                    className="w-full border rounded-lg py-2 px-4"
                    placeholder="Search for a food item..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <div className="max-w-5xl mx-auto p-6 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item, index) => (
                            <div key={index} className="border-b pb-4 mb-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h2 className="font-serif font-semibold text-lg">{item.name}</h2>
                                        <p className="text-sm text-gray-500">{item.description}</p>
                                    </div>
                                    <span className="text-[#349705] text-lg font-semibold">{item.price}</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No items match your search.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Menu;
