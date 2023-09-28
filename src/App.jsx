// import { Suspense, lazy } from 'react';
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Perks } from "./components/Perks";
import { Navbar } from "./components/Navbar";
// import { Services } from "./components/Services";
// // import { Portfolio } from "./components/Portfolio"
// import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

// In your main file, where you want to use lazy loading
import { lazy, Suspense } from "react";

const Portfolio = lazy(() => import("./components/Portfolio"));
const Services = lazy(() => import("./components/Services"));
const Testimonials = lazy(() => import("./components/Testimonials"));

function App() {
  return (
    <main className="relative">
      <div className=" bg-highlight-color w-fit px-4 py-2 text-white fixed z-50 right-0 bottom-[100px] rounded-l-md">
        <a
          className="flex items-center"
          href="https://wa.me/971506346869"
          target="_blank"
        >
          <img
            className="w-[30px]"
            src="./whatsappwhite.png"
            alt="whats app logo"
          />
          <span className="hover:text-dark-grey"></span>
        </a>
      </div>

      <Navbar />
      <Hero />
      <Perks />
      <About />
      <Suspense fallback={<div>Loading...</div>}>
        <Services />
        <Portfolio />
        <Testimonials />
      </Suspense>

      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
