import { imageUrls } from "../assets/imageIDs"
import { Navbar } from "./Navbar"

export const Hero = () => {
    return (
    <section className="hero-section h-screen max-[1000px]:h-fit w-full" id="hero">
    <div className="max-w-[1200px] mx-auto">
        
        <div className="flex items-center justify-between py-[3.5rem] text-white w-full p-4 max-[1200px]:flex-col-reverse max-[1200px]:justify-center">
            <div className="max-w-[32.31rem] max-[1200px]:text-center">
                <h1 className=" text-[3.5rem] leading-[4.2rem] my-[2.5rem] max-[600px]:text-[2.5rem]   max-[600px]:leading-[2.8rem]">Viktoria's Makeup and Hairstyles</h1>
                <p className="max-w-[27rem] max-[1200px]:max-w-full">What makes me different from everyone else is my attention to every detail because each of my clients is unique and deserves the best!</p>
                <a href="#contact"><button className="px-8 py-3 bg-light-green mt-8 rounded-lg">Book Now</button></a>
            </div>
            <div>
                <img className="object-contain h-full w-full" src={imageUrls.heroImg} alt="hero image"/>
            </div>
            </div>
        </div>
    </section>)
}