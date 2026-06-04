import { PortfolioData } from "./PortfolioData";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";

const portfolioArray = [
  {
    id: 1,
    img: "https://i.ibb.co/RkPMYzYb/social-media.jpg",
    title: "Social-Media-App",
    link: "https://social-media-app-murex-one.vercel.app/",
    details: [
      {
        icon: <FiFileText className="text-white text-xl " />,
        title: "Project:",
        desc: "Social-Media-App",
      },

      {
        icon: <FiUser />,
        title: "Client:",
        desc: "Social-App",
      },

      {
        icon: <FiFileText />,
        title: "Language:",
        desc: "HTMLL, CSS, JS",
      },

      {
        icon: <FaRegClock />,
        time: "16|01|26",
      },

      {
        icon: <FaLink />,
        view: "Click to view this Project",
      },
    ],
  },

  {
    id: 2,
    img: "https://i.ibb.co/W4bnpPyd/p5roduct-cap.jpg",
    title: "Product Filter App",
    link: "https://product-filter-eta-nine.vercel.app/",
    details: [
      {
        icon: <FiFileText />,
        title: "Project:",
        desc: "Product Filter App",
      },

      {
        icon: <FiUser />,
        title: "Client:",
        desc: "Success",
      },

      {
        icon: <FiFileText />,
        title: "Language:",
        desc: "React, Tailwind Css",
      },

      {
        icon: <FaRegClock />,
        time: "16|02|26",
      },

      {
        icon: <FaLink />,
        view: "Click to view this Project",
      },
    ],
  },

  {
    id: 3,
    img: "https://i.ibb.co/PssZdKJG/new-Manage.jpg",
    title: "Manage-Landing-Page",
    link: "https://manage-landing-page-rose.vercel.app/",
    details: [
      {
        icon: <FiFileText />,
        title: "Project:",
        desc: "Manage-Landing-Page",
      },

      {
        icon: <FiUser />,
        title: "Client:",
        desc: "Manage-Page",
      },

      {
        icon: <FiFileText />,
        title: "Language:",
        desc: "HTML, CSS, JS",
      },

      {
        icon: <FaRegClock />,
        time: "09|01|26",
      },
      {
        icon: <FaLink />,
        view: "Click to view this Project",
      },
    ],
  },
];

export const PreviewPortfolio = () => {
  return (
    <div className="  py-30 text-white text-center px-5">
      <h2 className="text-4xl  text-white  font-bold mb-20">
        My <span className="text-primary">Portfolio</span>
      </h2>
      <div className=" grid grid-cols-1 lg:grid-cols-3  gap-x-5 gap-y-5">
        {portfolioArray.map((item) => (
          <a key={item.id} href={item.link} target="_blank">
            <PortfolioData key={item.id} {...item} />
          </a>
        ))}
      </div>
    </div>
  );
};
