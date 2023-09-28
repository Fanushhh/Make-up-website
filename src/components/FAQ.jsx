import { useState } from "react";
import { imageUrls } from "../assets/imageIDs";
import { Question } from "./question";

export const FAQ = () => {
  const [faqs, setFaqs] = useState(imageUrls.faqSection.questions);
  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <section className="bg-light-grey pb-[124px]" id='faq'>
      <div className="max-w-[1200px] mx-auto p-4  relative before:content-[''] before:absolute before:max-w-[560px] before:w-full before:max-h-[600px] before:h-full before:bg-highlight-color before:z-0 before:top-[0px] before:left-[0] before:rounded-lg max-[1100px]:before:left-[00px] max-[1100px]:before:top-[0px] max-[1100px]:before:max-w-[345px] max-[600px]:before:max-h-[330px]">
        <div className="w-full flex h-[600px] max-[1000px]:h-[100%] relative max-[900px]:flex-col max-[1100px]:items-center justify-between gap-4 bg-white drop-shadow-xl rounded-md ">
          <div className=" w-full max-w-[550px] relative z-50 overflow-hidden rounded-md">
            <img
              className="z-50 relative object-cover h-full w-full"
              src={imageUrls.faqSection.faqImg}
              alt="makeup image"
            />
          </div>
          <div className="p-4 max-w-[40.25rem]  flex flex-col justify-center items-start text-semi-dark-grey ">
            <span className="mt-[.75rem] mb-[1rem] text-[2.425rem] max-[600px]:text-[2rem] leading-[3.15rem] font-extrabold text-black">
              Frequently <span className=" border-b-4 border-highlight-color">asked</span> Questions
            </span>
            <div className="faqs font-bold text-black flex flex-col">
              {faqs.map((faq, index) => (
                <Question
                  faq={faq}
                  index={index}
                  key={index}
                  toggleFAQ={toggleFAQ}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
