import React from "react";
import Medicinal from "../images/Projects/Medicinal.jpg";
import Medicinal1 from "../images/Projects/HelpPro1.png";
import Medicinal2 from "../images/Projects/Medicinal3.png";
import { Github, Link } from "lucide-react";

const HelpPro = () => {
  const techstack = [
    "React",
    "Hono",
    "Postgress SQL",
    "Prisma",
    "ShadCN",
    "Github",
    "CloudFlare Workers",
    "Cloudflare R2",
    "Socket.io",
    "Express JS",
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
                    HelpPro is a platform connecting new developers with
                    professionals for GitHub issue bounties and collaboration,
                    utilizing React, Hono, PostgreSQL, Prisma, and Socket.IO for
                    real-time messaging and data management. It fosters
                    community engagement and continuous learning by establishing
                    a warehouse for open-source projects.
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
                <ListItem text="Learnt dealing with the routes and authentication using Hono" />
                <ListItem text="Learnt how Cloudflare workers work and also used R2 buckets to store images" />
                <ListItem text="Learnt Postgress with Prisma ORM" />
                <ListItem text="Implemented clear Realtime messaging between the developers using Socket.io" />
                <ListItem text="Worked with Github Api's for fetching the details of the User Repositories" />
              </ul>
            </div>
            <div className="flex flex-row gap-3 mt-12 text-justify justify-center align-middle">
              <div className="flex flex-row">
                <div className="">
                  <p className="m-15 p-2 text-lg my-4">
                    In the development of HelpPro, various technologies were
                    utilized to create a robust and efficient platform. The
                    primary front-end framework used was React, chosen for its
                    ability to build dynamic and interactive user interfaces.
                    React's component-based architecture allowed for reusable
                    components, enhancing code maintainability and scalability.
                    State management was efficiently handled using React's
                    built-in hooks and context API, ensuring a smooth and
                    responsive user experience.
                  </p>
                  <br></br>
                  <div className="flex justify-center align-middle">
                    <img
                      src="https://res.cloudinary.com/dyhb5midi/image/upload/v1721394366/Screenshot_2024-07-19_183557_rggqfi.png"
                      className=" "
                    ></img>
                  </div>
                  <p className="text-justify text-lg my-6">
                    On the server side, Hono was employed to create a fast and
                    lightweight backend. Hono, being a web framework optimized
                    for performance, provided a solid foundation for handling
                    HTTP requests and routing. Its minimalistic approach allowed
                    for rapid development while maintaining high performance.
                    The backend was responsible for processing user requests,
                    handling authentication, and serving the necessary data to
                    the front end.
                  </p>

                  <br></br>
                  <div className="flex justify-center align-middle">
                    <img
                      src="https://res.cloudinary.com/dyhb5midi/image/upload/v1721394282/login_ll3jq7.png"
                      className=" "
                    ></img>
                  </div>
                  <p className="text-justify text-lg  my-6">
                    PostgreSQL was the database of choice for HelpPro, selected
                    for its reliability and powerful querying capabilities.
                    PostgreSQL's support for advanced data types and indexing
                    techniques ensured efficient data storage and retrieval.
                    This was crucial for managing the platform's extensive user
                    data, including profiles, messages, and project details. The
                    relational database structure also facilitated complex
                    queries and relationships, essential for the platform's
                    collaborative features.
                  </p>
                  <br></br>
                  <div className="flex justify-center align-middle">
                    <img
                      src="https://res.cloudinary.com/dyhb5midi/image/upload/v1721394081/Screenshot_2024-07-19_182624_iwkyhw.png"
                      className=" "
                    ></img>
                  </div>
                  <br></br>
                  <p className=" text-justify text-lg  my-6">
                    To interact with the PostgreSQL database, Prisma was
                    utilized as the ORM (Object-Relational Mapping) tool.
                    Prisma's type-safe query capabilities and intuitive API
                    streamlined database operations, reducing the likelihood of
                    runtime errors. By abstracting the database layer, Prisma
                    allowed developers to focus on application logic rather than
                    writing complex SQL queries. This integration ensured
                    seamless data management and synchronization between the
                    backend and the database.
                  </p>
                  <br></br>
                  <div className="flex justify-center align-middle">
                    <img
                      src="https://res.cloudinary.com/dyhb5midi/image/upload/v1721394076/Screenshot_2024-07-19_182731_ppwncp.png"
                      className=" "
                    ></img>
                  </div>
                  <p className=" text-justify text-lg my-6">
                    Socket.IO played a vital role in enabling real-time
                    communication within HelpPro. It facilitated instant
                    messaging between users, enhancing collaboration and
                    support. Socket.IO's bi-directional communication
                    capabilities allowed for real-time updates without the need
                    for page refreshes, providing a smooth and interactive user
                    experience. This was particularly important for features
                    like live chat and notifications, which are core to the
                    platform's functionality.
                  </p>
                  <br></br>
                  <div className="flex justify-center align-middle">
                    <img
                      src="https://res.cloudinary.com/dyhb5midi/image/upload/v1721394075/Screenshot_2024-07-19_182752_apyy2g.png"
                      className=" "
                    ></img>
                  </div>
                  <p className=" text-justify text-lg my-6">
                    Overall, the combination of these technologies resulted in a
                    highly efficient and scalable platform. React provided a
                    dynamic and responsive user interface, Hono ensured a fast
                    and reliable backend, PostgreSQL offered robust data
                    management, Prisma simplified database interactions, and
                    Socket.IO enabled real-time communication. Together, these
                    tools created a comprehensive solution that met the needs of
                    developers seeking collaboration and support on HelpPro.
                  </p>
                  <div className="flex justify-center align-middle">
                    <img
                      src="https://res.cloudinary.com/dyhb5midi/image/upload/v1721393643/1_m8mkr0.png"
                      className=" "
                    ></img>
                  </div>
                  <div className="flex justify-center mt-8 gap-3">
                    <a href="https://github.com/vlokesh08/HelpPro">
                      <button
                        type="button"
                        className="text-white bg-slate-700   hover:bg-slate-800  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
                      >
                        <Github size={20} className="mr-2" />
                        Github Repository
                      </button>
                    </a>
                    <a href="https://helppro.vercel.app/">
                      <button
                        type="button"
                        className="text-white bg-slate-700 hover:bg-[#24292F]/90  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
                      >
                        <Link size={20} className="mr-2" />
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

export default HelpPro;
