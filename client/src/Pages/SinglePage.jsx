import React from "react";
import { FaUser } from "react-icons/fa";
import Sidebar from "../components/Assets/Sidebar.tsx";
import ParticleRing from "../components/Assets/ParticleRing.jsx";

const SinglePage = () => {
  return (
    <div>
      <ParticleRing titlePage = "Single Blog Page"/>

      {/* blog details */}
      <div className = "max-w-7xl mx-auto my-12 flex flex-col md:flex-row">
        <div className = "lg:w-3/4 mx-auto">
          <div className ="w-1/2"> 
            <img src= "https://worldofwanderlust.com/wp-content/uploads/2022/04/Paris-World-of-Wanderlust25-scaled.jpg" className= "w-full mx-auto rounded h-15" />
          </div>
          <h2 className= "text-3xl mt-8 font-bold mb-4 cursor-pointer text-purple-800">These are the most visited cities in France.</h2>
          <p className = "mb-3 text-gray-600"><FaUser className = "inline-flex items-center mr-2"/>Stuart Roth | 21 Aug</p>
          <p className = "text-base mb-6 text-gray-500">These are the most visited cities in France.</p>
          <div className = "text-base mb-6 text-gray-500">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam quia odio, veniam animi corrupti iusto dolorum fugit numquam at est soluta sapiente ex, id alias voluptatum eaque ea debitis labore.</p> <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repellendus expedita voluptates. Voluptate nulla ad, sint accusamus nihil praesentium aliquid debitis non ut totam, dolorem vero, eum eaque earum sed.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo molestiae repellat dolorem, non reprehenderit esse libero minima error? Libero distinctio nobis sit dignissimos. Labore fuga mollitia omnis laudantium libero magni?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam quia odio, veniam animi corrupti iusto dolorum fugit numquam at est soluta sapiente ex, id alias voluptatum eaque ea debitis labore.</p> <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repellendus expedita voluptates. Voluptate nulla ad, sint accusamus nihil praesentium aliquid debitis non ut totam, dolorem vero, eum eaque earum sed.</p>
          </div>
        </div>
        {/* <div className = "lg:w-1/2">
          <Sidebar className="w-full lg:w-full px-3"/>
        </div> */}
      </div>
    </div>
  )
}

export default SinglePage