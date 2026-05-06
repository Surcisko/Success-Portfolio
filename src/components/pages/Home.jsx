import { Typewriter } from "react-simple-typewriter";
import bgprofile from "../../assets/bgprofile.jpg";
import newProfile from "../../assets/newProfile.png";
import { FaDownload } from "react-icons/fa";
import React, { useState } from "react";
import jsPDF from "jspdf";

export const Home = () => {
  const [saving, setSaving] = useState(false);
  const saveResume = () => {
    setSaving(true);

    const img = new Image();
    // img.crossOrigin = "anonymous"; // important for external images
    img.src = "https://i.ibb.co/TSB0TJB/EDUCATION-CV-042846-page-0001.jpg"; // replace with your real image URL

    img.onload = () => {
      const doc = new jsPDF("portrait", "px", "a4");

      doc.addImage(img, "jpg", 0, 0, 417, 653);
      doc.save("SUCCESS.pdf");

      setSaving(false);
    };
  };

  return (
    <div className="grid lg:grid-cols-2 gap-20 items-center md:p-10 xl:p-0 mt-0">
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
          I build visually captivating, user friendly websites and web apps that
          transform your ideas into seamless, engaging digital experience
        </p>

        <div className="mt-12 flex gap-20 ">
          <a href="/contact">
            <button className=" bg-primary hover:bg-primary/90 transition px-13 py-3 rounded-full  text-black font-medium md:px-3 lg:px-6 xl:px-11">
              Contact Me
            </button>
          </a>

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
          className="relative size-120 lg:size-150 rounded-full object-cover md:-top-8 opacity-100 md:left-60 xl:top-30"
        />
        {/* main profile image */}
        <img
          src={newProfile}
          alt=""
          className="relative -top-120 md:-top-8 md:-left-60 w-120 h-120 lg:size-150 rounded-full lg:top-30 lg:-left-92 "
        />
      </div>
    </div>
  );
};
