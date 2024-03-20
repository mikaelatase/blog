import React from 'react';
import ExtraDesign from '../components/Assets/ExtraAssets/ExtraDesign.jsx';
import ContactImage from '../components/Assets/images/contact_image.png';

const Contact = () => {
  return (
    <div>
      <ExtraDesign titlePage="Contact Page" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img src={ContactImage} alt="Contact Us" className="rounded-lg" style={{ maxWidth: '200px' }} />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Contact Us</h2>
            <p className="text-gray-600">Have any questions or suggestions? Feel free to reach out to us. Whether it's about partnerships, advertising opportunities, or simply to say hello, we'd love to hear from you.</p>
            <ul className="mt-4 text-gray-600">
              <li className="flex items-center mb-2">
                <svg className="h-5 w-5 mr-2 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10V3M12 21v-2M12 12a9 9 0 009-9h0a9 9 0 00-9 9z" />
                </svg>
                <span className=' text-purple-700'>Email: </span> contact@example.com
              </li>
              <li className="flex items-center mb-2">
                <svg className="h-5 w-5 mr-2 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10V3M12 21v-2M12 12a9 9 0 009-9h0a9 9 0 00-9 9z" />
                </svg>
                <span className=' text-purple-700'>Phone: </span> +1234567890
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10V3M12 21v-2M12 12a9 9 0 009-9h0a9 9 0 00-9 9z" />
                </svg>
                 <span className=' text-purple-700'>Address: </span> 123 Main St, City, Country
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;