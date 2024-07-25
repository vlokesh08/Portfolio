import React from "react";
import projects from "./ProDescription";
import { Button } from "./ui/button";
import { MousePointerClick } from "lucide-react";
import { Github } from "lucide-react";
const Projects = () => {
  return (
    <section className="py-10 md:py-16">
    <h1 className="font-normal text-gray-300 text-3xl md:text-6xl lg:text-7xl mb-10 md:mb-12 lg:mb-25">
    Projects <br></br>
  </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div className="border dark:border-slate-600 rounded-lg my-2">
            <div className="block w-full bg-white border border-gray-200 rounded-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="h-[350px] bg-cover rounded-sm"
              ></img>
            </div>
            <div className="mt-5 flex flex-col gap-3 px-5 pb-3">
              <h3 className="mb-2 text-2xl  tracking-tight text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <div className="flex gap-3 items-center align-middle h-full">
              <a href={`/project${project.route}`}>
                <Button>
                  <MousePointerClick className="w-5 h-5 mr-2" />
                  View Project
                </Button>
                </a>
                <a href={project.proLink} target="__blank">
                  <Button variant="outline" className="">
                    <Github className="w-5 h-5 mr-2" />
                    Github
                  </Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
