// // import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";
import { PortfolioData } from "./PortfolioData";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

const portfolioArray = [
  {
    id: 1,
    img: "https://i.ibb.co/RkPMYzYb/social-media.jpg",
    title: "Social-Media-App",
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
        icon: (
          <a
            href="https://social-media-app-murex-one.vercel.app/"
            target="_blank"
          >
            <FiExternalLink />
          </a>
        ),
        title: (
          <a
            href="https://social-media-app-murex-one.vercel.app/"
            target="_blank"
          >
            View Project
          </a>
        ),
      },
    ],
  },

  {
    id: 2,
    img: "https://i.ibb.co/svB3CgWm/image-qr-code.png",
    title: "Mobile-QR-Scan",
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
        icon: (
          <a href="https://mobile-scan-qr-code.vercel.app/ " target="_blank">
            <FiExternalLink />
          </a>
        ),
        title: (
          <a href="https://mobile-scan-qr-code.vercel.app/ " target="_blank">
            View Project
          </a>
        ),
      },
    ],
  },

  {
    id: 3,
    img: "https://i.ibb.co/PssZdKJG/new-Manage.jpg",
    title: "Manage-Landing-Page",
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
        icon: (
          <a
            href="https://manage-landing-page-rose.vercel.app/"
            target="_blank"
          >
            <FiExternalLink />
          </a>
        ),
        title: (
          <a
            href="https://manage-landing-page-rose.vercel.app/"
            target="_blank"
          >
            View Project
          </a>
        ),
      },
    ],
  },

  {
    id: 4,
    img: "https://i.ibb.co/Y4G4XGjF/portfolio-cap.jpg",
    title: "Success-Portfolio",
    details: [
      {
        icon: <FiFileText />,
        title: "Project:",
        desc: "Success-Portfolio",
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
        icon: (
          <a href="https://success-portfolio-seven.vercel.app/" target="_blank">
            <FiExternalLink />
          </a>
        ),
        title: (
          <a href="https://success-portfolio-seven.vercel.app/" target="_blank">
            View Project
          </a>
        ),
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
    <div className="  py-30 text-white text-center ">
      <h2 className="text-4xl  text-white  font-bold mb-20">
        My <span className="text-primary">Portfolio</span>
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
        {portfolioArray.map((item) => (
          <PortfolioData key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
