import { useState } from "react";
import close from "../../assets/close.png";

export const PortfolioData = ({ img, title, details }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  return (
    <>
      <div
        className=" relative rounded-xl overflow-hidden cursor-pointer group"
        onClick={toggleModal}
      >
        {/* Bannner Img */}
        <img
          src={img}
          alt=""
          className="h-100 w-full object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
          <h3 className="text-white text-xl font-semibold transform translate-y-4 group-hover:translate-y-0 transition duration-500">
            {title}
          </h3>
        </div>

        {/* Modal Section */}
        {modal && (
          <div className="fixed inset-0 bg-black-70 top-8 z-999 grid place-items-center gap-4">
            <div className="bg-[#111]  max-w-xl w-100 md:w-full p-8 rounded-xl relative shadow-2xl text-white">
              {/* Close Btn */}
              <img
                src={close}
                alt=""
                onClick={toggleModal}
                className=" absolute -top-5 -right-5 size-10 bg-white rounded-full p-2 shadow-lg"
              />

              <h3 className="text-green-400 text-2xl font-bold text-center mb-6 tracking-wider">
                {title}
              </h3>

              {/* details */}
              <ul className=" grid grid-cols-1 mb-8 p-3 space-y-3">
                {details.map(({ icon, title, desc, link }, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="text-xl ">{icon}</span>
                    <div className=" flex  justify-center items-center space-x-1">
                      <p className="text-sm font-semibold text-white">
                        {title}
                      </p>
                      <p className="text-xs">{desc}</p>
                      <a href={`${link}`} className="text-[0.55rem]">
                        {link}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>

              {/* main modal image */}
              <img
                src={img}
                alt=""
                className=" w-full h-100 object-cover  rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
