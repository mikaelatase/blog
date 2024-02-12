import React from 'react';

function Banner() {
  return (
      <div className="block md:flex md:space-x-2 px-2 lg:p-0">
        <a 
          className="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block" 
          style={{ height: '24em' }}
          href="#"
        >
          <div className="absolute left-0 bottom-0 w-full h-full z-10"
            style={{ backgroundImage: 'linear-gradient(180deg,transparent,rgba(0,0,0,.7))' }}></div>
          <img src="https://worldofwanderlust.com/wp-content/uploads/2022/04/Paris-World-of-Wanderlust25-scaled.jpg" className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover" alt="First Example" />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">Travel</span>
            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
            These are the most visited cities in France.
            </h2>
            <div className="flex mt-3">
              <img src="https://randomuser.me/api/portraits/men/97.jpg" className="h-10 w-10 rounded-full mr-2 object-cover" alt="Author" />
              <div>
                <p className="font-semibold text-gray-200 text-sm"> Stuart Roth </p>
                <p className="font-semibold text-gray-400 text-xs"> 21 Aug </p>
              </div>
            </div>
          </div>
        </a>

        <a className="w-full md:w-1/3 relative rounded" 
          style={{ height: '24em' }}
          href="#"
        >
          <div className="absolute left-0 top-0 w-full h-full z-10"
            style={{ backgroundImage: 'linear-gradient(180deg,transparent,rgba(0,0,0,.7))' }}></div>
          <img src="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,w_730/at%2Fstyle%2F2023-09%2Fai-interior-design%2Fai-decorilla" className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover" alt="Second Example" />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">DIY</span>
            <h2 className="text-3xl font-semibold text-gray-100 leading-tight">Best Tips To Design A Space From Start To Finish</h2>
            <div className="flex mt-3">
              <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BODFjZTkwMjItYzRhMS00OWYxLWI3YTUtNWIzOWQ4Yjg4NGZiXkEyXkFqcGdeQXVyMTQ0ODAxNzE@._V1_UX172_CR0,0,172,256_AL_.jpg" className="h-10 w-10 rounded-full mr-2 object-cover" alt="Author" />
              <div>
                <p className="font-semibold text-gray-200 text-sm"> Zach Blair </p>
                <p className="font-semibold text-gray-400 text-xs"> 15 June </p>
              </div>
            </div>
          </div>
        </a>
      </div>
  )
}

export default Banner
