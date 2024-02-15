import React from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorImage from "./ErrorImage.png";

const Error = () => {
  const navigate = useNavigate();

  const handleGoBackClick = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <img src= {ErrorImage} alt="404 Error Image" className="w-64 h-64 mb-8" />
      <h2 className="text-2xl font-bold mb-4">404 ERROR</h2>
      <p className="text-xl text-gray-800">
        You underestimate the power of the dark side.
      </p>
      <button className="bg-purple-800 rounded-xl text-white py-2 mt-2 px-4 hover:scale-105 duration-300" onClick={handleGoBackClick}>
        Go Back
      </button>
    </div>
  );
};

export default Error;