import { ArrowDown } from "lucide-react";

function Hero() {
  return (
    <div
      className="relative bg-cover bg-center bg-[url('/assets/images/banner.jpg')] bg-opacity-60 flex flex-col justify-center items-center px-8 sm:px-4 bg-blend-overlay"
      style={{ height: "calc(100vh - 60px)" }}
    >
      <h2 className="text-white text-center text-[60px] font-semibold tracking-[8px] leading-none uppercase sm:text-[40px] sm:tracking-[4px] md:text-[50px] md:tracking-[5px] lg:text-[60px] lg:tracking-[6px]">
        Velvet Rose
      </h2>
      <span className="text-white text-center text-[28px] font-semibold leading-none uppercase sm:text-[20px] sm:tracking-[5px] md:text-[24px] md:tracking-[8px] lg:text-[28px] lg:tracking-[10px]">
        Curtain
      </span>
      <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center px-8 sm:px-4 md:px-8 sm:bottom-4 md:bottom-8">
        <p className="text-white text-center text-[16px] sm:text-[14px] sm:text-center sm:font-normal sm:mb-4 sm:max-w-none md:text-[16px] md:max-w-none">
          Transform Your Home with Our Beautiful Collection of Curtains, <br />
          Wallpapers, Carpets, and Custom Tailoring Services.
        </p>

        <a href="#about">
          <ArrowDown className="w-[55px] fill-current text-white animate-bounce sm:w-[35px]" />
        </a>
      </div>
    </div>
  );
}

export default Hero;
