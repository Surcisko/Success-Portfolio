import { Typewriter } from "react-simple-typewriter";
import bgprofile from "../../assets/bgprofile.jpg";
import newProfile from "../../assets/newProfile.png";
import { FaDownload } from "react-icons/fa";

export const Home = () => {
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
          <button className=" bg-primary hover:bg-primary/90 transition px-6 py-3 rounded-full  text-black font-medium md:px-3 lg:px-6">
            Contact Me
          </button>
          <button className="flex  gap-3  bg-primary hover:bg-primary/90 transition-colors px-6 py-3 md:px-3 lg:px-6 rounded-full  text-black font-medium">
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
          className="relative size-120 lg:size-150 rounded-full object-cover md:-top-8 opacity-100 md:left-60"
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
