import React from 'react';
import BannerElement from './BannerElement.tsx';

function Banner() {
  return (
    <div className="block md:flex md:space-x-2 px-2 lg:p-0">
      <div className="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block">
        <BannerElement
          bannerImage="https://worldofwanderlust.com/wp-content/uploads/2022/04/Paris-World-of-Wanderlust25-scaled.jpg"
          bannerTag="Travel"
          bannerTitle="These are the most visited cities in France."
          bannerAuthor="Stuart Roth"
          bannerDateOfCreation="21 Aug"
          authorImage="https://randomuser.me/api/portraits/men/97.jpg"
        />
      </div>
      <div className="w-full md:w-1/3 relative rounded">
        <BannerElement
          bannerImage="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,w_730/at%2Fstyle%2F2023-09%2Fai-interior-design%2Fai-decorilla"
          bannerTag="DIY"
          bannerTitle="Best Tips To Design A Space From Start To Finish"
          bannerAuthor="Zach Blair"
          bannerDateOfCreation="15 June"
          authorImage="https://randomuser.me/api/portraits/men/18.jpg"
        />
      </div>
    </div>
  );
}

export default Banner;
