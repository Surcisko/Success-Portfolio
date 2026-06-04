import { FaLaptop, FaMobile } from "react-icons/fa";

const services = [
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
    <div className="text-center py-4 px-2 text-white ">
      <h2 className="text-4xl font-bold  mt-30 mb-20">
        MY <span className="text-green-400">SERVICES</span>
      </h2>

      {/* Card Container */}
      <div className="grid grid-cols-1 xl:grid-cols-2  max-w-4xl mx-auto cursor-pointer size-4xl gap-12 mb-10">
        {services.map((services, key) => (
          <div
            key={key}
            className="bg-[#001f0e] p-20  rounded-xl text-center w-full transition-transform duration-300 hover:-translate-y-1"
          >
            <h3 className=" text-primary">{services.icon}</h3>
            <h3 className="text-2xl font-semibold mb-3">{services.title}</h3>
            <p className="text-gray-400 text-lg">{services.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
