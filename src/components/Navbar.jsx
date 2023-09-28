import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  function handleDocumentClick(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  }
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="flex py-6 justify-between px-4 text-[1.125rem] z-50 text-white sticky top-0">
      <div className="max-w-[1200px] w-full mx-auto flex justify-between items-center relative">
        <div className="logo-title">
          <a href="#">
            <p className=" font-bold text-2xl">Viktoria</p>
          </a>
        </div>
        <FontAwesomeIcon
          ref={ref}
          className="hidden  max-[1000px]:block hover:cursor-pointer hover:text-highlight-color"
          icon={faBars}
          onClick={handleClick}
          size="2x"
        />
        <ul
          className={`absolute min-[1001px]:static min-[1001px]:flex min-[1001px]:justify-between min-[1001px]:gap-10 min-[1000px]:flex-row transition-all duration-300 flex flex-col items-center list-none ${
            open
              ? "flex max-[1000px]:top-[4rem] max-[1000px]:p-4 right-2 max-[1000px]:bg-gradient-to-tr from-gradient-1 to-gradient-2 max-[1000px]:border-2 gap-4 w-[250px]"
              : "hidden"
          }`}
        >
          <li>
            <a href="#hero" onClick={() => setOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setOpen(false)}>
              Services
            </a>
          </li>
          <li>
            <a href="#gallery" onClick={() => setOpen(false)}>
              Gallery
            </a>
          </li>
          <li>
            <a href="#reviews" onClick={() => setOpen(false)}>
              Testimonials
            </a>
          </li>
          <li>
            <a href="#faq" onClick={() => setOpen(false)}>
              FAQ
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="min-[1000px]:hidden border px-8 py-3 rounded-lg"
              onClick={() => setOpen(false)}
            >
              Contact us
            </a>
          </li>
        </ul>
        
          <a
            href="#contact"
            className="max-[1000px]:hidden border px-8 py-3 rounded-lg"
            onClick={() => setOpen(false)}
          >
            Contact us
          </a>
        
      </div>
    </nav>
  );
};
