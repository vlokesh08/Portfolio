import React from 'react';
import projects from "./Skilltemp"


const Projects = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 p-4 sm:grid-cols-1">
      {projects.map((project) => (
        <div
          key={project.id}
          className="relative overflow-hidden rounded-md cursor-pointer hover:shadow-lg"
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-[320px] object-cover transition-transform duration-300 transform scale-100 hover:scale-105 hover:hidden"
          />
          <div className=" w-full h-[320px] absolute inset-0 flex items-center justify-center align-middle opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="text-black text-center p-4 bg-white bg-opacity-100 rounded-md w-full h-[320px]">
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
