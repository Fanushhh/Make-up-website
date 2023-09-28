import { imageUrls } from "../assets/imageIDs";

const Services = () => {
  return (
    <section className="bg-light-grey" id='services'>
    <div className="max-w-[1200px] w-full mx-auto pb-[5rem] px-6">
      <div className=" flex flex-col justify-center items-center text-center mb-8">
        <span className="font-bold text-[1.5rem] pb-1 border-b-4 leading-[1.8rem] w-fit border-highlight-color text-semi-dark-grey">
          Services
        </span>
        <h1 className=" max-w-[29.2rem] mt-[.75rem] min-[1000px]:mb-[1.75rem] text-[2.425rem] leading-[3.15rem] font-extrabold text-black">
        Beautiful makeup for every occasion
          </h1>
      </div>
      <div className="flex flex-col items-center gap-10">
        {imageUrls.services.map((service, index) => {
          return (
            <div key={index} className="flex rounded-lg transition-all min-[1000px]:hover:odd:border-l-[10px] min-[1000px]:hover:even:border-r-[10px] border-highlight-color relative even:flex-row-reverse bg-white min-[1000px]:hover:scale-105 hover:shadow-lg max-w-[74.5rem] w-full justify-between before:z-[-1] max-[900px]:flex-col-reverse max-[900px]:even:flex-col-reverse max-[900px]:max-w-[580px] ">
            
              <div className="p-[2.5rem] flex flex-col gap-4 justify-between rounded-xl relative max-[900px]:p-4 max-[900px]:text-left max-[900px]:items-start">
                <h2 className="text-[2.5rem] leading-[2.4rem] font-bold max-[900px]:text-[2rem]">{service.title}</h2>
                <p className=" text-dark-grey w-full max-w-[33rem]">{service.description}</p>
                <a href="#contact"><button className="px-8 py-3 bg-light-green mt-8 rounded-lg text-white w-fit">{service.button}</button></a>
              </div>
              <div className="">
                <img className="relative rounded-lg" src={service.image} alt={service.title} />
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
};

export default Services;
