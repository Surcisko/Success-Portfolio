import { Typewriter } from "react-simple-typewriter";
import bgprofile from "../../assets/bgprofile.jpg";
import newProfile from "../../assets/newProfile.png";
import { FaDownload } from "react-icons/fa";
import React, { useState } from "react";
import jsPDF from "jspdf";
import { Link } from "react-router-dom";
import { Cta } from "./Cta";

import { PreviewServices } from "./PreviewServices";
import { Footer } from "./Footer";
import { PreviewPortfolio } from "./PreviewPortfolio";

export const Hero = () => {
  const [saving, nowSaving] = useState(false);
  const saveResume = () => {
    nowSaving(true);

    const img = new Image();
    // img.crossOrigin = "anonymous"; // important for external images
    img.src = "https://i.ibb.co/Cpv6HV18/undefined.jpg"; // replace with your real image URL

    img.onload = () => {
      const imgdoc = new jsPDF("portrait", "px", "a4");

      imgdoc.addImage(img, "jpg", 0, 0, 417, 653);
      imgdoc.save("SUCCESS.pdf");

      nowSaving(false);
    };
  };

  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-x-20 gap-y-10 items-center md:p-10 xl:p-0 mt-0 mb-0">
        {/* left content */}
        <div>
          <h1 className="font-bold text-primary text-[75px] mt-30 ">
            <span className="text-green-400 text-5xl ">
              <Typewriter
                words={["Web Developer", "Web Designer"]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={70}
                delaySpeed={100}
              />
            </span>
            <br />
            Hi! I'm <span>Success</span>
          </h1>

          <p className="text-gray-300 max-w-125 mt-10  text-lg/relaxed ">
            I build visually captivating, user friendly websites and web apps
            that transform your ideas into seamless, engaging digital experience
          </p>

          <div className="flex md:mt-12 gap-5">
            <Link to="/contact">
              <button className=" bg-primary hover:bg-primary/90 transition px-13 py-3 rounded-full  text-black font-medium md:px-3 lg:px-6 xl:px-11">
                Contact Me
              </button>
            </Link>

            <button
              onClick={saveResume}
              className="flex  gap-3  bg-transparent border-2 border-primary text-white hover:bg-primary/90 transition-colors px-6 py-3 md:px-3 lg:px-6 rounded-full  hover:text-black font-medium cursor-pointer"
            >
              <div>
                <FaDownload />
              </div>
              Download CV
            </button>
          </div>
        </div>

        {/* right content */}
        <div className="relative  md:flex justify-center">
          {/* bg image */}
          <img
            src={bgprofile}
            alt=""
            className="relative size-120 lg:size-150 rounded-full object-cover md:-top-8 opacity-100 md:left-60 xl:top-30 lg:top-10 "
          />
          {/* main profile image */}
          <img
            src={newProfile}
            alt=""
            className="relative -top-120 md:-top-8 md:-left-60 w-120 h-120 lg:size-150 rounded-full lg:top-10 lg:-left-70 xl:top-30 xl:-left-92 "
          />
        </div>
      </div>
      <div className="  lg:mt-20">
        <PreviewServices />
        <PreviewPortfolio />
        <Cta />
        <Footer />
      </div>
    </div>
  );
};
