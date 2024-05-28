import React from "react";
import pic1 from "../images/Projects/Google.jpg";
import pic2 from "../images/Projects/Google1.png";
import pic3 from "../images/Projects/Google2.png";

const GoogleAuthentication = () => {
  const techstack = ["Next.js", "Github", "Firebase", "Aceternity UI"];
  return (
    <div>
      <section className="container py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-2">
          <div className="">
            <div className="text-center">
              <h1 className="font-normal text-gray-300 text-3xl md:text-6xl lg:text-7xl mb-10 md:mb-15 lg:mb-25">
                GoogleAuthentication <br></br>
              </h1>
            </div>
            <div className="flex justify-center align-middle">
              <img src={pic1} className=" "></img>
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
                    Google authentication implemented with Next.js, Firebase,
                    and Aceternity UI combines server-side rendering, real-time
                    database features, and a polished interface for secure and
                    convenient user access.
                  </p>
                </div>
                <div className="w-full md:ml-12">
                  <h2 className=" font-semibold mt-4 mb-2 text-xl">TimeLine</h2>
                  <h4>Apr 2024 </h4>
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
                <ListItem text="Server-Side Rendering " />
                <ListItem text="Real-Time Database" />
                <ListItem text="UI Design and Usability" />
              </ul>
            </div>
            <div className="flex flex-row gap-3 mt-12 text-justify justify-center align-middle">
              <div className="flex flex-row">
                <div className="">
                  <p className="m-15 p-2 text-lg">
                    Google authentication is a vital feature in many web
                    applications, providing a secure and convenient way for
                    users to access their accounts. When implemented with
                    Next.js and Firebase using the Aceternity UI library, it
                    combines the power of server-side rendering, real-time
                    database capabilities, and a sleek user interface.
                  </p>
                  <br></br>
                  <div className="flex justify-center align-middle my-5">
                    <img src={pic2} className=" "></img>
                  </div>
                  <p className="text-justify text-lg">
                    In this project, Next.js serves as the framework, enabling
                    server-side rendering for optimized performance and SEO
                    benefits. Firebase Authentication, a robust authentication
                    service, seamlessly integrates with Next.js, allowing users
                    to sign in securely using their Google accounts. Aceternity
                    UI adds a layer of polish to the authentication process,
                    offering pre-designed components for a modern and
                    user-friendly interface.
                  </p>

                  <br></br>
                  <div className="flex justify-center align-middle my-5">
                    <img src={pic3} className=" "></img>
                  </div>
                  <p className="text-justify text-lg">
                    The integration process typically involves setting up
                    Firebase Authentication in the Firebase Console, configuring
                    Next.js to work with Firebase, and implementing the
                    necessary components from Aceternity UI to handle the
                    authentication flow. With these technologies combined,
                    developers can create a seamless and secure authentication
                    experience for users, leveraging the strengths of each
                    platform to deliver a top-notch solution.
                  </p>
                  <br></br>

                  <div className="flex justify-center mt-8">
                    <a href="https://github.com/vlokesh08/google-auth-aceternity-ui">
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
                    <a href="https://google-auth-aceternity-ui.vercel.app/">
                      <button
                        type="button"
                        className="text-white bg-[#24292F] hover:bg-[#24292F]/90  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-4 h-4 me-2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                          />
                        </svg>
                        Live Link
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

export default GoogleAuthentication;
