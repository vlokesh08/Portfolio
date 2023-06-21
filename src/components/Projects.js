import React from 'react'
import projects from "./Skilltemp";

function Projects() {
  return (
    <section id="projects">
        <div className="container lg:pt-5">
            <div className="w-auto h-[2px] bg-pallete-300 m-8"></div>
            <div className="text-center">
                <br></br>
                <h2 className="text-popp font-[700] text-3xl mb-5">PROJECTS</h2><br></br>
                <h3>The Projects that I have made till now!</h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-12"> 
                {
                    projects?.map((project) => (
                        <div className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]">
                            <figure>
                                <img src={project.imageUrl}></img>
                            </figure>

                        </div>
                    ))
                }

            </div>
        </div>
    </section>
  )
}

export default Projects