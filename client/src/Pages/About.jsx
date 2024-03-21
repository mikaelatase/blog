import React from 'react';
import ExtraDesign from '../components/Assets/ExtraAssets/ExtraDesign.jsx';
import AboutImage from '../components/Assets/images/about_image.png';

const About = () => {
  return (
    <div>
      <ExtraDesign titlePage="About Us Page" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
            <img src={AboutImage} alt="Blogsphere" className="rounded-lg" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">About Blogsphere</h2>
            <p className="text-gray-600"><span className='font-bold text-purple-500'>Blogsphere</span> is a versatile platform that offers a rich array of blog content spanning a wide range of topics. From the latest trends in travel destinations to insightful do-it-yourself projects, from in-depth analyses of startup culture to cutting-edge developments in artificial intelligence, Blogsphere provides a comprehensive repository of knowledge and inspiration. Whether you're a <span className='font-bold text-purple-500'>tech enthusiast</span> exploring the latest apps and gadgets, a <span className='font-bold text-purple-500' >news junkie</span> keeping up with global events, a <span className='font-bold text-purple-500'>gaming aficionado</span> seeking tips and tricks, or a <span className='font-bold text-purple-500'>researcher</span> delving into scholarly references, <span className='font-bold text-purple-500'>Blogsphere</span> caters to diverse interests and preferences. With its user-friendly interface and engaging community, <span className='font-bold text-purple-500'>Blogsphere</span> fosters a dynamic environment where users can discover, share, and engage with content that resonates with their passions and curiosity. Welcome to <span className='font-bold text-purple-500'>Blogsphere</span>, where there's always something new to explore and discover.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
