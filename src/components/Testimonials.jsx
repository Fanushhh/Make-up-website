
import { imageUrls } from "../assets/imageIDs";
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay } from 'swiper/modules';

function Testimonials(){
    
  
  return (
    <section className=" bg-light-grey" id='reviews'>
    <div className="max-w-[1200px] mx-auto w-full pt-20">
      <div className=" flex flex-col px-4 justify-center items-center text-center mb-[4rem] relative">
        <span className="font-bold text-[1.5rem] pb-1 border-b-4 leading-[1.8rem] w-fit border-highlight-color text-semi-dark-grey">
          Testimonials
        </span>
        <h1 className=" max-w-[29.2rem] mt-[.75rem] min-[1000px]:mb-[1.75rem] text-[2.425rem] leading-[3.15rem] font-extrabold text-black relative">
          What our clients say
        </h1>
        <span className=" absolute text-highlight-color font-bold bottom-[-50px]  left-[30px]">{window.innerWidth < 600 ? "Swipe" : 'Drag'}</span>
      </div>
      
      <Swiper autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} delay="500" breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay]}
        
    >
    
        {imageUrls.testimonials.map((review,index) => {
            return(
                <SwiperSlide key={index} className="flex flex-col items-center bg-white drop-shadow-xl m-4 max-w-[300px] w-ful cursor-pointer hover:scale-105 duration-500 transition-all rounded-xl overflow-hidden">
                
                    <img className="w-full" src={review.src} alt="review" />
                    <div className="p-4 ">
                        <p className="font-bold text-xl">{review.name}</p>
                        <p>{review.description}</p>
                    </div>
                </SwiperSlide>
            )
        })}
      </Swiper>
      </div>
    </section>
    
  );
};

export default Testimonials;
