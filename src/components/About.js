import React from 'react'
import image2 from "../images/27.svg";

function About() {
  return (
    <section id="about">
        <div className="container lg:pt-5">
        <div className="w-auto h-[2px] bg-pallete-300 m-8"></div>
            <div className="text-center">
                <h2 className="text-popp font-[700] text-3xl mb-5">ABOUT</h2>
            </div>
            <div className="flex flex-row px-3 justify-evenly ">
                <div className="w-[3000px] hidden sm:block ">
                    <img className="" src={image2} alt="textImage"></img>
                </div>
                <div className="">
                    <h1 className="text-popp font-[600] text-2xl mb-4">
                        I'm Lokesh. I live in Nellore, where I design the future.
                    </h1>
                    <p className="">
                    I am a final year student at RMK Engineering College, and I'm thrilled to share my journey and interests with you. With a remarkable CGPA of 9.4, I have consistently demonstrated a strong commitment to academic excellence throughout my college years.
                    </p>
                    <br></br>
                    <p>
                    Prior to my engineering studies, I completed my 12th grade at Narayana Junior College in Nellore, where I achieved an impressive CGPA of 9.8. This foundation laid the groundwork for my passion for learning and continuous personal growth.
                    </p>
                    <br></br>
                    <p>
                    Even during my 10th grade, I excelled academically with a CGPA of 9.7, showcasing my consistent dedication to education. But my enthusiasm doesn't end with academics alone; I am particularly fascinated by web development and always eager to expand my knowledge in this field.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About