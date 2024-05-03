import React from "react";
import projects from "./Skilltemp";

const Projects = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="mb-10 lg:mb-0">
            <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
              Projects
            </h1>

            <p className="font-normal text-gray-500 text-xs md:text-base">
              These are the Projects <br></br>that I have worked with!
            </p>
          </div>

          <div className="space-y-24">
            {projects.slice(0,4).map((project) => {
              return (
                <div className="flex space-x-6">
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                    {project.id}
                  </h1>

                  <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                  <div>
                    <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                      {project.title}
                    </h1>

                    <p className="font-normal text-gray-500 text-sm md:text-base w-[250px] sm:w-[450px] text-justify">
                      {project.description}
                    </p>
                    <div class="relative">
                      <a href={"/project/" + project.id}>
                        <h6 class="font-semibold text-gray-500 text-md relative z-10">
                          Read More
                        </h6>
                      </a>
                      <span class="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          </div>
          <div className="w-full flex justify-center mt-12">
          <a href="/projects">
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          View all Projects
        </button>
          </a>
          </div>
      </div>
    </section>

    // </div>
  );
};

export default Projects;
