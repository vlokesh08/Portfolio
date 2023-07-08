import React from 'react'
import projects from "./Skilltemp";
import Card from './Card';

function Projects() {
  return (
    <section id="projects">
        <div className="container lg:pt-5">
            <div className="w-auto h-[2px] bg-pallete-300 m-8"></div>
            <div className="">
                <div className="text-center">
                    <br></br>
                    <h2 className="text-popp font-[700] text-3xl mb-5">PROJECTS</h2><br></br>
                    <h3>The Projects that I have made till now!</h3>
                </div>
                <div className="flex items-center justify-center gap-4 mt-12"> 
                    {
                        projects?.map((project) => (
                            <Card project={project} />
                        ))
                    }

                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects