import { FaLaptop, FaMobile } from "react-icons/fa";

const Service = [
  {
    icon: <FaLaptop className="text-6xl mx-auto mb-4" />,
    title: "Web Development",
    description:
      "I build fast and responsive, and scalable websites using the modern technologies like React, Node.js and TailwindCSS",
  },

  {
    icon: <FaMobile className="text-6xl mx-auto mb-4" />,
    title: "Mobile Friendly Design",
    description:
      "Every website I build is fully responsive and looks amazing on phones,tablets and desktops",
  },
];

export const PreviewServices = () => {
  return (
    <div className=" text-center lg:py-8 px-2 text-white ">
      <h2 className="text-3xl md:text-4xl font-bold  mt-0  mb-20 md:mt-25 ">
        MY <span className="text-green-400 ">SERVICES</span>
      </h2>

      {/* Card Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2  max-w-4xl mx-auto cursor-pointer h-200 w-110 md:w-150  lg:h-100 lg:w-400 gap-12 mb-10">
        {Service.map((services, key) => (
          <div
            key={key}
            className="bg-[#001f0e] p-20  rounded-xl text-center w-full transition-transform duration-300 hover:-translate-y-1"
          >
            <h3 className=" text-primary">{services.icon}</h3>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              {services.title}
            </h3>
            <p className="text-gray-400 text-sm md:text-lg">
              {services.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
