import React from 'react';
import BannerElement from './BannerElement.tsx';
import bannerDetails from '../components/Assets/bannerDetails.js';

function createBannerElement(bannerElement) {
  return (
    <div className="w-1/2 relative rounded inline-block">
       <BannerElement
      key = {bannerElement.id}  //its used for react so it can render elements in the right order, its not a props
      bannerImage = {bannerElement.bannerImage}
      bannerTag = {bannerElement.bannerTag}
      bannerTitle = {bannerElement.bannerTitle}
      bannerAuthor = {bannerElement.bannerAuthor}
      bannerDateOfCreation = {bannerElement.bannerDateOfCreation}
      authorImage = {bannerElement.authorImage}
    />
    </div>
  );
}

function Banner() {
  return (
    <div className="block md:flex w-full relative rounded md:space-x-2 px-2 lg:p-0">
      <div className="mb-4 md:mb-0 w-full relative rounded inline-block">
        {bannerDetails.map(createBannerElement)}
      </div>
    </div>
  );
}

export default Banner;
