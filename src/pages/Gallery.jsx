import React, { useState } from 'react';
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css'; 
import interior1 from '../assets/images/Gallery/interior1.jpg'
import interior2 from '../assets/images/Gallery/interior2.jpg'
import ambiance from '../assets/images/Gallery/ambiance.jpg'
import food1 from '../assets/images/Gallery/tuna-salad.jpg'
import food2 from '../assets/images/Gallery/tacos.jpg'
import food3 from '../assets/images/Gallery/pancakes.jpg'
import food4 from '../assets/images/Gallery/coffee.jpg'
import food5 from '../assets/images/Gallery/cocktails.jpg'

const images = [
  { id: 1, src: food1, category: 'Food' },       
  { id: 2, src: interior1, category: 'Interior' },  
  { id: 3, src: food2, category: 'Food' },        
  { id: 4, src: ambiance, category: 'Ambiance' },    
  { id: 5, src: interior2, category: 'Interior' }, 
  { id: 6, src: food3, category: 'Food' },   
  { id: 7, src: food4, category: 'Food' },   
  { id: 8, src: food5, category: 'Food' },   
];


const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter((image) => image.category === selectedCategory)

  const handleImageClick = (index) => {
    setPhotoIndex(index)
    setLightboxOpen(true)
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-4">
        <button
          className={`px-4 py-2 mr-2 ${selectedCategory === 'All' ? 'bg-[#349705] text-white' : 'bg-gray-300'}`}
          onClick={() => setSelectedCategory('All')}
        >
          All
        </button>
        <button
          className={`px-4 py-2 mr-2 ${selectedCategory === 'Food' ? 'bg-[#349705] text-white' : 'bg-gray-300'}`}
          onClick={() => setSelectedCategory('Food')}
        >
          Food
        </button>
        <button
          className={`px-4 py-2 mr-2 ${selectedCategory === 'Interior' ? 'bg-[#349705] text-white' : 'bg-gray-300'}`}
          onClick={() => setSelectedCategory('Interior')}
        >
          Interior
        </button>
        <button
          className={`px-4 py-2 mr-2 ${selectedCategory === 'Ambiance' ? 'bg-[#349705] text-white' : 'bg-gray-300'}`}
          onClick={() => setSelectedCategory('Ambiance')}
        >
          Ambiance
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            <img
              src={image.src}
              alt={image.category}
              className="w-full h-48 object-cover transform hover:scale-105 transition duration-300 ease-in-out"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/300'
              }}
            />

          </div>
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          images={filteredImages.map(image => image.src)}
          startIndex={photoIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
};

export default Gallery;
