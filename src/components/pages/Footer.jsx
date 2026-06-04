import { Link } from "react-router-dom";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const currentYear = new Date().getFullYear();
const pageLinks = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
];

export const Footer = () => {
  return (
    <footer className="bg-gray-500 py-5 px-10">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-0 md:flex justify-between items-center mb-12">
        {/* Left column */}
        <div>
          <h2 className="text-2xl text-white font-semibold  px-5 lg:px-0">
            Building structured, scalable and sustainable Websites and Apps.
          </h2>
        </div>
        {/* Middle column */}
        <div className="mt-9 hidden md:block px-3 lg:px-0">
          {pageLinks.map((link) => {
            return (
              <ul>
                <li>
                  <Link
                    key={link.label}
                    to={link.to}
                    className="  text-lg  text-white "
                  >
                    {link.label}
                  </Link>
                </li>
              </ul>
            );
          })}
        </div>
        {/* Right column */}
        <div className="p-2 mt-5">
          {/*  Contact*/}
          <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>

          <p className="text-gray-400 mb-2">
            Email: oyebamijisuccess1@gmail.com.com
          </p>

          <p className="text-gray-400 mb-4">Phone: +234 704 670 6407</p>

          {/* Social Icons */}
          <div className="flex gap-3 text-xl text-white">
            <a href="https://www.linkedin.com/in/success-dev" target="blank">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className=" py-1 text-white  max-w-7xl mx-auto justify-start">
        © {currentYear} Oyebamiji Success. All Rights Reserved.
      </div>
    </footer>
  );
};
