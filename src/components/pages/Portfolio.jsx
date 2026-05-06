// // import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";
import { PortfolioData } from "./PortfolioData";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa6";

const portfolioArray = [
  {
    id: 1,
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

      {
        icon: <FaRegClock />,
        time: "30|05|24",
      },
    ],
  },

  {
    id: 2,
    img: "https://i.ibb.co/ntRQH7g/bcard.jpg",
    title: "Business Card",
    details: [
      {
        icon: <FiFileText />,
        title: "Project:",
        desc: "Business Card",
      },

      {
        icon: <FiUser />,
        title: "Client:",
        desc: "Success",
      },

      {
        icon: <FiFileText />,
        title: "Language:",
        desc: "HTML, CSS, JS",
      },

      {
        icon: (
          <a href="https://success-business-card.vercel.app/" target="_blank">
            <FiExternalLink />
          </a>
        ),
        title: (
          <a href="https://success-business-card.vercel.app/ " target="_blank">
            View Project
          </a>
        ),
      },

      {
        icon: <FaRegClock />,
        time: "07|04|25",
      },
    ],
  },

  {
    id: 3,
    img: "https://i.ibb.co/F4RbWhfg/space.jpg",
    title: "Space Exploration Site",
    details: [
      {
        icon: <FiFileText />,
        title: "Project:",
        desc: "Timer",
      },

      {
        icon: <FiUser />,
        title: "Client:",
        desc: "Timer",
      },

      {
        icon: <FiFileText />,
        title: "Language:",
        desc: "HTML, CSS, JS",
      },

      {
        icon: (
          // <a href="https://space-site-puce.vercel.app/ " target="_blank"></a>
          <FiExternalLink />
        ),
        title:
          // <a href="https://space-site-puce.vercel.app/ " target="_blank">

          // </a>
          "View Project",
      },

      {
        icon: <FaRegClock />,
        time: "09|04|25",
      },
    ],
  },

  {
    id: 4,
    img: "https://i.ibb.co/21PbPtC7/counter.jpg",
    title: "Counter App",
    details: [
      {
        icon: <FiFileText />,
        title: "Project:",
        desc: "Counter App",
      },

      {
        icon: <FiUser />,
        title: "Client:",
        desc: "Counter App",
      },

      {
        icon: <FiFileText />,
        title: "Language:",
        desc: "HTML, CSS, JS",
      },

      {
        icon: (
          <a href="https://counter-app-one-orcin.vercel.app/" target="_blank">
            <FiExternalLink />
          </a>
        ),
        title: (
          <a href="https://counter-app-one-orcin.vercel.app/ " target="_blank">
            View Project
          </a>
        ),
      },

      {
        icon: <FaRegClock />,
        time: "09|04|25",
      },
    ],
  },

  {
    id: 5,
    img: "https://i.ibb.co/vv4qB2kZ/hometown.jpg",
    title: "Hometown",
    details: [
      {
        icon: <FiFileText />,
        title: "Project:",
        desc: "Hometown of Lagos",
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
        icon: (
          <a href="https://hometown-beta.vercel.app/ " target="_blank">
            <FiExternalLink />
          </a>
        ),
        title: (
          <a href="https://hometown-beta.vercel.app/ " target="_blank">
            View Project
          </a>
        ),
      },

      {
        icon: <FaRegClock />,
        time: "11|04|25",
      },
    ],
  },

  {
    id: 6,
    img: "https://i.ibb.co/DHxrwfD0/bday.jpg",
    title: "Timer",
    details: [
      {
        icon: <FiFileText />,
        title: "Project:",
        desc: "Birthday",
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
        icon: (
          <a
            href="https://birthday-gift-card-five.vercel.app/ "
            target="_blank"
          >
            <FiExternalLink />
          </a>
        ),
        title: (
          <a
            href="https://birthday-gift-card-five.vercel.app/ "
            target="_blank"
          >
            View Project
          </a>
        ),
      },

      {
        icon: <FaRegClock />,
        time: "13|04|25",
      },
    ],
  },

  {
    id: 7,
    img: "https://i.ibb.co/VYjwJsCv/game.jpg",
    title: "Blackjack Game",
    details: [
      {
        icon: <FiFileText />,
        title: "Project:",
        desc: "A game",
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
        icon: (
          <a href="https://blackjack-game-mocha.vercel.app/" target="_blank">
            <FiExternalLink />
          </a>
        ),
        title: (
          <a href="https://blackjack-game-mocha.vercel.app/" target="_blank">
            View Project
          </a>
        ),
      },

      {
        icon: <FaRegClock />,
        time: "15|04|25",
      },
    ],
  },

  {
    id: 8,
    img: "https://i.ibb.co/V0wBndPD/timer.jpg",
    title: "Timer",
    details: [
      {
        icon: <FiFileText />,
        title: "Project:",
        desc: "Timer",
      },

      {
        icon: <FiUser />,
        title: "Client:",
        desc: "Timer",
      },

      {
        icon: <FiFileText />,
        title: "Language:",
        desc: "HTML, CSS, JS",
      },

      {
        icon: (
          <a href="https://timer-roan-mu.vercel.app/ " target="_blank">
            <FiExternalLink />
          </a>
        ),
        title: (
          <a href="https://timer-roan-mu.vercel.app/ " target="_blank">
            View Project
          </a>
        ),
      },

      {
        icon: <FaRegClock />,
        time: "04|01|26",
      },
    ],
  },

  {
    id: 9,
    img: "https://i.ibb.co/0RgQPLXr/grocify.jpg",
    title: "Grocify",
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
        icon: (
          // <a href="https://grocify-olive.vercel.app/ " target="_blank">

          // </a>
          <FiExternalLink />
        ),
        title:
          // <a href="https://grocify-olive.vercel.app/ " target="_blank">

          // </a>
          "View Project",
      },

      {
        icon: <FaRegClock />,
        time: "07|01|26",
      },
    ],
  },

  {
    id: 10,
    img: "https://i.ibb.co/nqNyKGCn/js-quote.jpg",
    title: "JS Quote Generator",
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
        icon: (
          <a href="https://js-quote-generator-kohl.vercel.app/">
            <FiExternalLink />
          </a>
        ),
        title: (
          <a href="https://js-quote-generator-kohl.vercel.app/">View Project</a>
        ),
      },

      {
        icon: <FaRegClock />,
        time: "12|01|26",
      },
    ],
  },

  {
    id: 11,
    img: "https://i.ibb.co/N6D4FSKz/faq.jpg",
    title: "FAQ",
    details: [
      {
        icon: <FiFileText />,
        title: "Project:",
        desc: "Frequently Asked Question Features",
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
        icon: (
          <a
            href="https://frequently-asked-questions-sandy.vercel.app/ "
            target="_blank"
          >
            <FiExternalLink />
          </a>
        ),
        title: (
          <a
            href="https://frequently-asked-questions-sandy.vercel.app/ "
            target="_blank"
          >
            View Project
          </a>
        ),
      },

      {
        icon: <FaRegClock />,
        time: "13|01|26",
      },
    ],
  },

  {
    id: 12,
    img: "https://i.ibb.co/Kj2shpY9/to-do.jpg",
    title: "To Do List",
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
        icon: (
          <a
            href="https://to-do-list-surciskos-projects.vercel.app/"
            target="_blank"
          >
            <FiExternalLink />
          </a>
        ),
        title: (
          <a
            href="https://to-do-list-surciskos-projects.vercel.app/"
            target="_blank"
          >
            View Project
          </a>
        ),
      },

      {
        icon: <FaRegClock />,
        time: "14|01|26",
      },
    ],
  },

  {
    id: 13,
    img: "https://i.ibb.co/6csQJPWc/modal.jpg",
    title: "Modal",
    details: [
      {
        icon: <FiFileText />,
        title: "Project:",
        desc: "Modal",
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
        icon: (
          <a href="https://modal-gold-tau.vercel.app/ " target="_blank">
            <FiExternalLink />
          </a>
        ),
        title: (
          <a href="https://modal-gold-tau.vercel.app/ " target="_blank">
            View Project
          </a>
        ),
      },

      {
        icon: <FaRegClock />,
        time: "15|01|26",
      },
    ],
  },

  {
    id: 14,
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

      {
        icon: <FaRegClock />,
        time: "09|01|26",
      },
    ],
  },

  {
    id: 15,
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

      {
        icon: <FaRegClock />,
        time: "16|01|26",
      },
    ],
  },

  {
    id: 16,
    img: "https://i.ibb.co/W4bnpPyd/p5roduct-cap.jpg",
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
          <a href="https://product-filter-eta-nine.vercel.app/" target="_blank">
            <FiExternalLink />
          </a>
        ),
        title: (
          <a href="https://product-filter-eta-nine.vercel.app/" target="_blank">
            View Project
          </a>
        ),
      },

      {
        icon: <FaRegClock />,
        time: "16|02|26",
      },
    ],
  },

  {
    id: 17,
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

      {
        icon: <FaRegClock />,
        time: "23|02|26",
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
      <div className=" grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-x-10 gap-y-10">
        {portfolioArray.map((item) => (
          <PortfolioData key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
