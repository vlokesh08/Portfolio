import React from "react";
import Medicinal from "../images/Projects/Medicinal.jpg";
import Medicinal1 from "../images/Projects/HelpPro1.png";
import Medicinal2 from "../images/Projects/Medicinal3.png";

const HelpPro = () => {
  const techstack = [
    "React",
    "Node.js",
    "Express.js",
    "Github",
    "MongoDB",
    "JWT",
  ];
  return (
    <div>
      <section className="container py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-2">
          <div className="">
            <div className="text-center">
              <h1 className="font-normal text-gray-300 text-3xl md:text-6xl lg:text-7xl mb-10 md:mb-15 lg:mb-25">
                HelpPro <br></br>
              </h1>
            </div>
            <div className=" mt-5 flex justify-center align-middle items-center">
              <h3 className="px-5 font-semibold">Tech Stack </h3>
              <ul className="flex flex-wrap gap-2 my-2">
                {techstack.map((tag, tagIndex) => (
                  <li
                    key={tagIndex}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between lg:w-3/4 flex-col md:flex-row p-2 w-full">
              <div className="flex justify-between flex-col md:flex-row">
                <div>
                  <h2 className="font-semibold mt-4 mb-2 text-xl">
                    About the Project
                  </h2>
                  <p className=" text-justify">
                  A MERN stack platform fostering collaboration between new developers and experienced professionals, incentivizing problem-solving through a bounty system for GitHub issues.
                  </p>
                </div>
                <div className="w-full md:ml-12">
                  <h2 className=" font-semibold mt-4 mb-2 text-xl">TimeLine</h2>
                  <h4>Apr 2024 - Jun 2024 </h4>
                  <h2 className=" font-semibold mt-4 mb-2 text-xl">
                    Platforms
                  </h2>
                  <h4>Web </h4>
                </div>
              </div>
            </div>
            <div className="w-full mt-3 p-2">
              <h1 className=" font-semibold text-xl my-4">
                Things Learnt in this Project
              </h1>
              <ul className="space-y-3">
                <ListItem text="Integration of Machine Learning with Web Technologies" />
                <ListItem text="Effective Use of APIs" />
                <ListItem text="Caching for Performance Optimization" />
                <ListItem text="Image Processing and Plant Identification" />
              </ul>
            </div>
            <div className="flex flex-row gap-3 mt-12 text-justify justify-center align-middle">
              <div className="flex flex-row">
                <div className="">
                  <p className="m-15 p-2 text-lg">
                    HelpPro is an innovative platform designed to bridge the gap
                    between new developers and experienced professionals,
                    fostering a collaborative environment where learning and
                    growth are paramount. Developed using the MERN stack
                    (MongoDB, ExpressJS, React, and NodeJS), HelpPro enables
                    users to post and solve GitHub issues through a bounty
                    system. This unique approach not only facilitates knowledge
                    sharing but also incentivizes problem-solving, making it an
                    invaluable resource for the developer community.
                  </p>
                  <br></br>
                  <div className="flex justify-center align-middle">
                    <img src={Medicinal1} className=" "></img>
                  </div>
                  <p className="text-justify text-lg">
                    One of the core features of HelpPro is its bounty system,
                    which allows users to attach rewards to specific GitHub
                    issues. New developers can post issues they are facing and
                    attach a bounty, while experienced professionals can claim
                    these bounties by providing solutions. This system
                    encourages active participation and ensures that issues are
                    addressed promptly, benefiting both parties involved. The
                    integration of JWT (JSON Web Token) authentication ensures
                    that all transactions and interactions on the platform are
                    secure, providing a safe environment for users to
                    collaborate.
                  </p>

                  <br></br>
                  <p className="text-justify text-lg">
                    The development of HelpPro involved meticulous planning and
                    execution. The frontend, built with React, provides a
                    responsive and user-friendly interface that enhances the
                    overall user experience. The use of React's component-based
                    architecture ensures that the application is modular and
                    easy to maintain. On the backend, ExpressJS and NodeJS
                    handle the server-side logic and API requests efficiently,
                    while MongoDB serves as the robust database solution,
                    storing user data and project details securely.
                  </p>
                  <br></br>
                  
                  <br></br>
                  <p className=" text-justify text-lg">
                    In addition to its technical architecture, HelpPro
                    emphasizes user experience and ease of use. The platform is
                    designed to be intuitive, allowing users to navigate through
                    different sections effortlessly. Users can easily post new
                    issues, search for existing ones, and view the status of
                    their bounties. The integration of real-time notifications
                    ensures that users are always updated on the progress of
                    their issues, fostering continuous engagement and
                    interaction within the community.
                  </p>
                  <br></br>
                  <p className=" text-justify text-lg">
                    HelpPro stands out not only for its technical implementation
                    but also for its contribution to the developer ecosystem. By
                    providing a platform where new developers can learn from
                    experienced professionals, it helps in building a stronger
                    and more collaborative community. The project's success lies
                    in its ability to connect people, share knowledge, and solve
                    problems efficiently, making it a significant addition to
                    the world of web development and open-source collaboration.
                  </p>
                  <div className="flex justify-center mt-8">
                    <a href="https://github.com/vlokesh08/HelpPro">
                      <button
                        type="button"
                        className="text-white bg-[#24292F] hover:bg-[#24292F]/90  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
                      >
                        <svg
                          className="w-4 h-4 me-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Github Repository
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ListItem = ({ text }) => {
  return (
    <li className="flex text-base text-body-color dark:text-dark-6">
      <span className="mr-2.5 mt-0.5 text-primary">
        <svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_980_24852)">
            <path
              d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
              fill="currentColor"
            />
            <path
              d="M12.6875 7.09375L8.96875 10.7188L7.28125 9.0625C7 8.78125 6.5625 8.8125 6.28125 9.0625C6 9.34375 6.03125 9.78125 6.28125 10.0625L8.28125 12C8.46875 12.1875 8.71875 12.2813 8.96875 12.2813C9.21875 12.2813 9.46875 12.1875 9.65625 12L13.6875 8.125C13.9688 7.84375 13.9688 7.40625 13.6875 7.125C13.4063 6.84375 12.9688 6.84375 12.6875 7.09375Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_980_24852">
              <rect width={20} height={20} fill="white" />
            </clipPath>
          </defs>
        </svg>
      </span>
      {text}
    </li>
  );
};

export default HelpPro;
