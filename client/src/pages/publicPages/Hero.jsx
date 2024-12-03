import React, { useState, useEffect } from 'react';
import Animal from '../../assets/Animal.jpg'
import HomeLess from '../../assets/HomeLess.jpg' 
import oldCouple from '../../assets/oldCouple.jpg' 

import HomeAbout from '../../Component/Common/HomeAbout';
import AidBridgeWhatWeDo from '../../Component/Common/AidbridgeWhatweDo';
import ProjectsWeHaveDone from '../../Component/Common/ProjectsWeHaveDone';
// import HomeAbout from '../components/HomeAbout';
// import AidBridgeWhatWeDo from '../components/AidBridgeWhatWeDo';
// import ProjectsWeHaveDone from '../components/ProjectsWeHaveDone';
const carouselData = [
  {
    image: Animal,
    text: 'Providing aid to Animal shelters',
  },
  {
    image: oldCouple,
    text: 'Helping hand of oldage Home Towards Old People',
  },
  {
    image: HomeLess,
    text: 'A Home For HomeLess People'
  },
  // Add more items as needed
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Set up interval to change slides every 5 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselData.length);
    }, 5000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return <>
     <div className="relative w-full h-[90vh]
     overflow-hidden">
      {/* Carousel Slide */}
      {carouselData.map((item, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={item.image}
            alt={item.text}
            className="w-full h-full object-cover"
          />
          {/* Text Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            
            <h2 className="text-white text-6xl md:text-4xl font-bold px-4 text-center">
              {item.text}
            </h2>
          </div>
        </div>
      ))}

      {/* Carousel Controls */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselData.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
      
    </div>
    <HomeAbout />
    <AidBridgeWhatWeDo />
    <ProjectsWeHaveDone />
    {/* <Testimonials /> */}
  </>
};

export default Hero;