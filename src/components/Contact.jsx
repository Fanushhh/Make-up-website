import { useState } from "react";
import { imageUrls } from "../assets/imageIDs";

export const Contact = () => {
  const [fullName, setFullName] = useState('');
    const [number, setNumber] = useState('');
    const [text, setText] = useState('');
  
  

  const handleSubmit = (e) => {
    
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    const chatId = -1001910142298;
    const my_text = `New message from: ${name} %0APhone number: ${phone} %0AMessage: ${message}`
  const url = `https://api.telegram.org/bot${
    import.meta.env.VITE_TELEGRAM_KEY
  }/sendMessage?chat_id=${chatId}&text=${my_text}`;
    fetch(`${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Message sent successfully:", data);
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });

      alert('Message sent!')
      setFullName('');
      setNumber('');
      setText('');
  };

  return (
    <section className="bg-light-grey " id="contact">
      <div className=" flex flex-col justify-center items-center text-center min-[1000px]:mb-[2rem]">
        <span className="font-bold text-[1.5rem] pb-1 border-b-4 leading-[1.8rem] w-fit border-highlight-color text-semi-dark-grey">
          Contact
        </span>
        <h1 className=" max-w-[35.2rem] mt-[.75rem]  text-[2.425rem] leading-[3.15rem] font-extrabold text-black">
          Book Your Makeup Session
        </h1>
      </div>
      <div className="max-w-[1200px] mx-auto p-4 py-[5rem] relative before:content-[''] before:absolute before:max-w-[560px] before:w-full before:max-h-[600px] before:h-full before:bg-highlight-color before:z-0 before:top-[60px] before:right-[0] before:rounded-lg max-[1100px]:before:left-[0] max-[1100px]:before:top-[60px] max-[1100px]:before:max-w-[345px] max-[600px]:before:max-h-[365px]">
        <div className="w-full flex flex-row-reverse h-[600px] max-[1000px]:h-[100%] relative max-[900px]:flex-col max-[1100px]:items-center justify-between gap-4 bg-white drop-shadow-2xl rounded-md ">
          <div className=" w-full max-w-[550px] relative z-50 overflow-hidden rounded-md">
            <img
              className="z-50 relative object-cover w-full"
              src={imageUrls.formImg}
              alt="makeup image"
            />
          </div>

          <div className="max-[600px]:p-4 p-8 max-w-[40.25rem] w-full flex flex-col justify-center items-start text-semi-dark-grey ">
            <div className="w-full max-w-[600px]">
              <span className="max-w-[450px] block mt-[.75rem] mb-[1rem] text-[2.425rem] max-[600px]:text-[2rem] leading-[3.15rem] font-extrabold text-black">
                Contact Us for Availability and Pricing
              </span>
              <form autoComplete="off"
                onSubmit={handleSubmit}
                className="flex w-full max-w-[600px] justify-between gap-4 max-[600px]:flex-col"
              >
                <div className="w-full max-w-[400px] ">
                  <div className="flex flex-col gap-2 pb-4">
                    <label htmlFor="name">Full Name:</label>
                    <input
                      className="border-b-2 w-full focus:outline-none max-w-[300px] p-2 text-black"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your name here..."
                      value={fullName}
                      onChange={(event) => setFullName(event.target.value)}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2 pb-4">
                    <label htmlFor="phone">Phone number:</label>
                    <input
                      className="border-b-2 w-full focus:outline-none max-w-[300px] p-2 text-black"
                      type="phone"
                      name="phone"
                      id="phone"
                      placeholder="0000 000 000"
                      value={number}
                      onChange={(event) => setNumber(event.target.value)}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2 pb-4">
                    <label htmlFor="name">Message:</label>
                    <textarea
                      rows={4}
                      className="border-b-2 w-full focus:outline-none max-w-[300px] p-2 resize-none text-black"
                      type="text"
                      name="message"
                      id="message"
                      placeholder="Send a message..."
                      value={text}
                      onChange={(event) => setText(event.target.value)}

                    />
                  </div>
                  <button className="px-8 py-3 bg-light-green mt-8 rounded-lg text-white">
                    Send
                  </button>
                </div>
                <div className="flex flex-col gap-8 py-4 justify-between w-full max-w-[200px]">
                  <div>
                    <div>
                      <p className="font-bold text-[20px] text-black">
                        Based in
                      </p>
                      <p className="text-sm">SLS Dubai Hotel & Residences
Marasi Dr - Business Bay - Dubai - United Arab Emirates</p>
                    </div>
                  </div>
                  <div className="flex w-[100px] justify-between justify-self-end">
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
