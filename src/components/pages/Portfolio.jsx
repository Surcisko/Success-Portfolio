// // import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";
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

  {
    id: 4,
    img: "https://i.ibb.co/0RgQPLXr/grocify.jpg",
    title: "Grocify",
    link: "https://grocify-olive.vercel.app/",
    details: [
      {
        icon: <FiFileText />,
        title: "Project:",
        desc: "A landing Page",
      },

      {
        icon: <FiUser />,
        title: "Client:",
        desc: "Personal Project",
      },

      {
        icon: <FiFileText />,
        title: "Language:",
        desc: "HTML, CSS, JS",
      },

      {
        icon: <FaRegClock />,
        time: "07|01|26",
      },

      {
        icon: <FaLink />,
        view: "Click to view this Project",
      },
    ],
  },

  {
    id: 5,
    img: "https://i.ibb.co/nqNyKGCn/js-quote.jpg",
    title: "JS Quote Generator",
    link: "https://js-quote-generator-kohl.vercel.app/",
    details: [
      {
        icon: <FiFileText />,
        title: "Project:",
        desc: "Quote Generator",
      },

      {
        icon: <FiUser />,
        title: "Client:",
        desc: "Personal Project",
      },

      {
        icon: <FiFileText />,
        title: "Language:",
        desc: "HTML, CSS, JS",
      },

      {
        icon: <FaRegClock />,
        time: "12|01|26",
      },

      {
        icon: <FaLink />,
        view: "Click to view this Project",
      },
    ],
  },

  {
    id: 6,
    img: "https://i.ibb.co/Kj2shpY9/to-do.jpg",
    title: "To Do List",
    link: "https://to-do-list-surciskos-projects.vercel.app/",
    details: [
      {
        icon: <FiFileText />,
        title: "Project:",
        desc: "To Do List",
      },

      {
        icon: <FiUser />,
        title: "Client:",
        desc: "Personal Project",
      },

      {
        icon: <FiFileText />,
        title: "Language:",
        desc: "HTML, CSS, JS",
      },

      {
        icon: <FaRegClock />,
        time: "14|01|26",
      },

      {
        icon: <FaLink />,
        view: "Click to view this Project",
      },
    ],
  },

  {
    id: 7,
    img: "https://i.ibb.co/svB3CgWm/image-qr-code.png",
    title: "Mobile-QR-Scan",
    link: "https://mobile-scan-qr-code.vercel.app/",
    details: [
      {
        icon: <FiFileText />,
        title: "Project:",
        desc: "Mobile-QR-Scan",
      },

      {
        icon: <FiUser />,
        title: "Client:",
        desc: "QR-Scan",
      },

      {
        icon: <FiFileText />,
        title: "Language:",
        desc: "HTML, CSS, JS",
      },

      {
        icon: <FaRegClock />,
        time: "30|05|24",
      },

      {
        icon: <FaLink />,
        view: "Click to view this Project",
      },
    ],
  },
];

// export const Portfolio = () => {
//   <div className=" py-80 text-white ">
//     <h2 className="text-4xl  text-white text-center font-bold mb-12">
//       My <span>Portfolio</span>
//     </h2>

{
  /* <div className=" grid grid-cols-3 gap-3">
      {portfolioArray.map((item) => (
        <PortfolioData key={item.id} {...item} />
      ))}
    </div> */
}
//   </div>;
// };

export const Portfolio = () => {
  return (
    <div className="  py-30 text-white text-center px-5">
      <h2 className="text-4xl  text-white  font-bold mb-20">
        My <span className="text-primary">Portfolio</span>
      </h2>
      <div className=" grid grid-cols-1 xl:grid-cols-2  gap-x-5 gap-y-5">
        {portfolioArray.map((item) => (
          <a key={item.id} href={item.link} target="_blank">
            <PortfolioData key={item.id} {...item} />
          </a>
        ))}
      </div>
    </div>
  );
};
