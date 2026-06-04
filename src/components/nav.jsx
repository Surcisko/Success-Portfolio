import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import jsPDF from "jspdf";

const navLinks = [
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
];

export const Nav = () => {
  const [saving, setSaving] = useState(false);
  const saveResume = () => {
    setSaving(true);

    const img = new Image();
    // img.crossOrigin = "anonymous"; // important for external images
    img.src = "https://i.ibb.co/Cpv6HV18/undefined.jpg"; // replace with your real image URL

    img.onload = () => {
      const doc = new jsPDF("portrait", "px", "a4");

      doc.addImage(img, "jpg", 0, 0, 417, 653);
      doc.save("SUCCESS.pdf");

      setSaving(false);
    };
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed bg-transparent backdrop-blur-md py-4 md:py-5 top-0 w-full border-b border-primary/50 z-10">
      <header className="flex items-center justify-between w-full max-w-7xl px-6  mx-auto text-white">
        <a
          href="/"
          className="text-primary text-xl md:text-[24px] xl:text-3xl font-bold"
        >
          SUCCESS OYEBAMIJI
        </a>

        {/* <!--   Menu Items --> */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex space-x-6">
            {navLinks.map((nav) => (
              <Link
                key={nav.label}
                to={nav.to}
                className="hover:text-primary font-medium"
              >
                {nav.label}
              </Link>
            ))}
          </div>

          <button onClick={saveResume} className="btn-small">
            Download CV
          </button>
        </div>

        {/* <-------Mobile view------>  */}
        <div className="md:hidden">
          <div className="size-10 p-2 flex items-center justify-center hover:bg-neutral-400/10 hover:text-accent rounded-full transition duration-300">
            <Menu onClick={() => setIsOpen(true)} />
          </div>

          {isOpen && (
            <>
              <div
                onClick={() => setIsOpen(false)}
                className="absolute inset-0 min-h-screen size-full bg-black/70"
              />

              <div className="bg-gray-700/70  backdrop-blur-2xl absolute z-100 top-0 right-0 w-[60vw] min-h-screen flex items-center justify-center">
                <div className="h-[70vh] flex flex-col items-center space-x-6 justify-between py-10 px-10">
                  <div className="absolute top-3 right-0 size-10 p-2 flex items-center justify-center hover:bg-neutral-400/10 hover:text-accent rounded-full transition duration-300">
                    <X onClick={() => setIsOpen(false)} />
                  </div>

                  <div className="flex flex-col items-center space-y-15 pt-7 ">
                    {navLinks.map((nav) => (
                      <Link
                        key={nav.label}
                        to={nav.to}
                        className="hover:text-primary text-2xl font-medium"
                      >
                        {nav.label}
                      </Link>
                    ))}
                  </div>

                  <button
                    onClick={saveResume}
                    className="btn-large flex gap-3 px-4 justify-center cursor-pointer"
                  >
                    <FaDownload />
                    Download CV
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </header>
    </nav>
  );
};
