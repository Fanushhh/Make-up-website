import React from "react";


export const Question = ({ faq, index, toggleFAQ }) => {
    

  return (
    <div
      className={"faq cursor-pointer " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question text-[1.125rem] leading-[21.6px] pr-[50px]">{faq.question}</div>
      <div className="faq-answer text-semi-dark-grey pr-4">{faq.answer}
      {faq.firstLink ? <div className="flex flex-col gap-2 mt-2">
      <a className="hover:text-slate-900 hover:underline" href="https://www.instagram.com/viktoriia.mua" target="_blank">{faq.firstLink}</a>
      <a className="hover:text-slate-900 hover:underline" href="https://wa.me/380957523742" target="_blank">{faq.secondLink}</a>
      </div> 
      : ''}</div>
      
      
    </div>
  );
};


