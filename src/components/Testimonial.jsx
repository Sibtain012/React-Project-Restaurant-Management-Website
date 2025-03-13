import React, { useState } from 'react';
import img1 from '../assets/images/Testimonial/t2.webp'
import img2 from '../assets/images/Testimonial/t3.webp'
import img3 from '../assets/images/Testimonial/t4.webp'

const testimonials = [
  {
    text: "Eu id cras morbi consectetur viverra eleifend pellentesque dui. Senectus commodo morbi aliquet eget quis gravida. Ut vel cursus urna ut id tempor. Viverra non commodo vel ac aliquet.",
    name: "Dale Petersen",
    role: "Guest",
    image: img2,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Jane Doe",
    role: "Guest",
    image: img1,
  },
  {
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "John Smith",
    role: "Guest",
    image: img3,
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center py-12">
      <div className="text-[#349705] text-4xl font-serif">“</div>
      <h2 className="text-2xl font-serif font-bold mb-6 text-center">What our clients say about us</h2>

      <div className="flex space-x-4 mb-6">
        {testimonials.map((testimonial, index) => (
          <img
            key={index}
            src={testimonial.image}
            alt={testimonial.name}
            className={`w-10 h-10 rounded-full object-cover ${index === activeIndex ? 'ring-2 ring-green-500' : ''}`}
          />
        ))}
      </div>

      <p className="text-gray-600 text-center font-sans max-w-lg mb-4">
        {testimonials[activeIndex].text}
      </p>

      <p className="font-bold font-serif">{testimonials[activeIndex].name}</p>
      <p className="text-[#349705] font-thin">{testimonials[activeIndex].role}</p>

      <div className="flex space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-[#349705]' : 'bg-gray-300'}`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>

    </div>
  );
};

export default Testimonials;
