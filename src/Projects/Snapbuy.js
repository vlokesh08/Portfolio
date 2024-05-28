import React from "react";
import Snapbuypic from "../images/Projects/SnapBuy.png";
const Snapbuy = () => {
  const techstack = [
    "React",
    "Express",
    "Node.js",
    "MongoDB",
    "HTML",
    "CSS",
    "JavaScript",
  ];
  return (
    <div>
      <section className="container py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-2">
          <div className="">
            <div className="text-center">
              <h1 className="font-normal text-gray-300 text-3xl md:text-6xl lg:text-7xl mb-10 md:mb-15 lg:mb-25">
                SnapBuy <br></br>
              </h1>
            </div>
            <div className="flex justify-center align-middle">
              <img src={Snapbuypic} className=" "></img>
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
                  <h2 className="font-semibold mt-4 mb-2 text-xl">About the Project</h2>
                  <p className=" text-justify">
                    SnapBuy is an e-commerce website for renting, buying, and
                    selling products within a college premise, utilizing React
                    and Express to offer a dynamic, user-friendly experience
                    with secure authentication and personalized recommendations.
                    Users can easily browse, search, and manage products using
                    intuitive filters and categories for seamless navigation and
                    checkout.
                  </p>
                </div>
                <div className="w-full md:ml-12">
                  <h2 className=" font-semibold mt-4 mb-2 text-xl">TimeLine</h2>
                  <h4>Jun 2015 - Dec 2015 </h4>
                  <h2 className=" font-semibold mt-4 mb-2 text-xl">Platforms</h2>
                  <h4>iOS, Android & Web </h4>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3 mt-12 text-justify justify-center align-middle">
              <div className="flex flex-row">
                <div className="">
                  <p className="m-15 p-2 text-lg">
                    SnapBuy is an innovative e-commerce platform designed
                    specifically for the unique needs of a college community,
                    facilitating the renting, buying, and selling of products
                    within the college premise. This dynamic and interactive
                    website leverages the power of React for the frontend,
                    Node.js and Express for the backend, and MongoDB for the
                    database, ensuring a seamless and efficient shopping
                    experience.
                  </p>
                  <br></br>
                  <h2 className=" font-semibold p-2 text-xl">Key Features:</h2>
                  <div>
                    <h3 className="font-bold">User-Friendly Interface:</h3>
                    <ul className="list-disc my-3 font-medium p-4">
                      <li>
                        Built with React, SnapBuy offers a responsive and
                        intuitive interface that simplifies navigation and
                        enhances user experience.
                      </li>
                      <li>
                        Users can effortlessly browse through various product
                        categories and apply filters to find specific items
                        quickly.
                      </li>
                    </ul>
                    <h3 className="font-bold">Product Discovery:</h3>
                    <ul className="list-disc my-3 font-medium p-4">
                      <li>
                        The platform incorporates a powerful search
                        functionality, allowing users to use keywords, filters,
                        and sorting options to find products that meet their
                        exact requirements.
                      </li>
                      <li>
                        This efficient search capability streamlines the product
                        discovery process, saving users valuable time.
                      </li>
                    </ul>
                    <h3 className="font-bold">Cart Management:</h3>
                    <ul className="list-disc my-3 font-medium p-4">
                      <li>
                        Users can add, remove, and modify items in their carts,
                        providing flexibility and control over the checkout
                        process.
                      </li>
                      <li>
                        The cart management system ensures that users can curate
                        their orders according to their needs and preferences.
                      </li>
                    </ul>
                    <h3 className="font-bold">Backend and Database:</h3>
                    <ul className="list-disc my-3 font-medium p-4">
                      <li>
                        The backend, powered by Node.js and Express, handles
                        server-side logic, API integration, and ensures smooth
                        operation of the platform.
                      </li>
                      <li>
                        MongoDB, as the database, offers flexible and scalable
                        data storage solutions, efficiently managing product
                        listings, user information, and transaction records.
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center">
                  <a href="https://github.com/vlokesh08/Snapbuy">
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

export default Snapbuy;
