import { imageUrls } from "../assets/imageIDs";
import React from "react";
import { useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { prototype } from "postcss/lib/previous-map";

function Portfolio(){
  const [index, setIndex] = useState(-1);

  const handleClick = (index) => console.log(index.key);

  return (
    <section className=" w-full p-4 bg-light-grey" id="gallery">
      <div className=" flex flex-col justify-center items-center text-center mb-8">
        <span className="font-bold text-[1.5rem] pb-1 border-b-4 leading-[1.8rem] w-fit border-highlight-color text-semi-dark-grey">
          Portfolio
        </span>
        <h1 className=" max-w-[29.2rem] mt-[.75rem] min-[1000px]:mb-[1.75rem] text-[2.425rem] leading-[3.15rem] font-extrabold text-black">
        Gallery of recent works
          </h1>
      </div>

      {/* <Gallery
      
        images={imageUrls.carouselImgs}
        onClick={handleClick}
        enableImageSelection={false}
      /> */}
      <div className="grid grid-cols-5 max-[1200px]:grid-cols-3 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 gap-4">
      <Gallery >
        {imageUrls.carouselImgs.map((image, index) => {
          return (
            <Item
            
              width={580}
              height={580}
              key={index}
              original={image.src}
            >
              {({ ref, open }) => (
                <img
                  className={`object-cover min-[1000px]:hover:scale-105 cursor-pointer transition-all duration-500 rounded-xl max-[600px]:even:w-full odd:w-full odd:h-[300px] max-[600px]:even:h-[300px] h-full ${image.number == 7 || image.number == 9 ? 'place-self-start' : 'place-self-end'}`}
                  alt='porfolio image'
                  ref={ref}
                  onClick={open}
                  src={image.src}
                />
              )}
            </Item>
          );
        })}
      </Gallery>
      </div>
    </section>
  );
};

export default Portfolio;
