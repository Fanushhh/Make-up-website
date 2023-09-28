export const Footer = () => {
  return (
    <footer className="bg-dark-grey  w-full text-white">
      <div className="w-[1200px] flex justify-between items-center mx-auto max-w-full py-10 px-2 max-[956px]:flex-col max-[956px]:text-center">
        <div className="w-full max-w-[200px]">
          <h1 className=" text-2xl leading-7 pb-6">Viktoria</h1>
          <p className="text-[#FFFFFF66]">
            © Copyright. Viktoria All right are reserved
          </p>
        </div>
        <ul className="flex gap-10 max-[956px]:flex-col max-[956px]:gap-4 max-[956px]:my-4">
        <li><a href="#hero" >
            Home
          </a></li>
          <li><a href="#about">
            About
          </a></li>
          <li><a href="#services">
            Services
          </a></li>
          <li><a href="#gallery">
            Gallery
          </a></li>
          <li><a href="#reviews">
            Testimonials
          </a></li>
          <li><a href="#faq">
            FAQ
          </a></li>
        </ul>
        <div className="flex flex-col gap-5 max-[200px]:">
          <a href="#contact" className=" border text-[#A7D7C5B2] border-[#A7D7C5B2] px-8 py-3 rounded-lg ">
            Contact us
          </a>
          <div className="flex gap-4 justify-center ">
            <a href="https://wa.me/971506346869" target="_blank">
              <img
                className="w-full max-w-[30px] cursor-pointer"
                src="./whatsapp.png"
                alt="whats app contact icon"
              />
            </a>
            <a href="https://t.me/kovlv" target="_blank">
              <img
                className="w-full max-w-[30px] cursor-pointer"
                src="./telegram.png"
                alt="telegram app contact icon"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
