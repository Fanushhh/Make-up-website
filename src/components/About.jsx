import { imageUrls } from "../assets/imageIDs";

export const About = () => {
  return (
    <section className="bg-light-grey" id="about">
    <div className="max-w-[1200px] mx-auto p-4 py-[5rem] relative before:content-[''] before:absolute before:max-w-[500px] before:w-full before:max-h-[480px] before:h-full before:bg-highlight-color before:z-0 before:top-[60px] before:left-[0] before:rounded-lg max-[1100px]:before:left-[0px] max-[1100px]:before:top-[60px] max-[1100px]:before:max-w-[90%] max-[600px]:before:max-h-[30%]">
      <div className="w-full flex relative max-[1100px]:flex-col max-[1100px]:items-center justify-between gap-4 bg-white drop-shadow-2xl rounded-md ">
        <div className=" w-full max-w-[550px] relative z-50 overflow-hidden">
          
          <img className="z-50 relative h-full w-full rounded-md" src={imageUrls.aboutImg} alt="makeup image" />
        </div>
        <div className="pl-8 pr-[5rem] max-[600px]:pr-8 py-[2rem] max-w-[40.25rem] flex flex-col justify-center items-start text-semi-dark-grey ">
          <span className="font-bold text-[1.5rem] pb-1 border-b-4 leading-[1.8rem] w-fit border-highlight-color">
            About
          </span>
          <h1 className="mt-[.75rem] mb-[1.75rem] text-[2.425rem] leading-[3.15rem] font-extrabold text-black">
            Viktoria Make-up Artist
          </h1>
          <p className="pb-4">
          Hello! My name is Viktoria and I’m a professional makeup artist.
          </p>
         
          <p>Your makeup appointment means more to me than just brushing on some lipstick & blush. Every tiny detail matters because you deserve a flawless look that reflects your own unique beauty & style</p>
          <a href="#contact"><button className="px-8 py-3 bg-light-green mt-8 rounded-lg text-white">Book Now</button></a>
        </div>
      </div>
      </div>
    </section>
  );
};
