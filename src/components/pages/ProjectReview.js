import React from "react";
import desc from "../ProDescription";
import { useParams } from "react-router-dom";
const ProjectReview = (props) => {
  const { id } = useParams();
  return (
    <>
      <section className="container py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="">
            <div className="text-center">
              <h1 className="font-normal text-gray-300 text-3xl md:text-6xl lg:text-7xl mb-10 md:mb-15 lg:mb-25">
                {desc[id - 1].title} <br></br>
              </h1>
            </div>
            <div className="flex justify-center align-middle">
              <img src={desc[id - 1].imageUrl} className=" w-3/4 h-3/4"></img>
            </div>
            <div className=" m-8 flex justify-center align-middle items-center">
              <h3 className="px-5 font-semibold">Tech Stack </h3>
              {desc[id - 1].techstack.map((item) => {
                return (
                  <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                    {item}
                  </span>
                );
              })}
            </div>
            <div className="flex flex-row gap-3 mt-12 text-justify justify-center align-middle">
              <div className="flex flex-row lg:w-3/4">
                <div className="">
                  {desc[id - 1].description.map((item) => {
                    return (
                      <div className="">
                        <p className="m-15 p-2 text-lg">{item}</p>
                        <br></br>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-12 px-[150px]">
            {id > 1 ? (
              <a href={`${Number(id) - 1}`}>
                <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                  Prev
                </button>
              </a>
            ) : (
              <button></button>
            )}
            {id < desc.length ? (
              <a href={`${Number(id) + 1}`}>
                <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                  Next
                </button>
              </a>
            ) : (
              <button></button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectReview;
