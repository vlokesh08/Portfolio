import React from 'react'
import image2 from "../images/main.jpeg";
import Skills from './Skills';
function About() {
  return (
    <section id="about">
        <div className="container lg:pt-5">
            <div className="flex flex-row px-3 justify-between">
                <div className="w-[1280px] hidden sm:block p-8  ">
                    <img className="" src={image2} alt="textImage"></img>
                </div>
                <div className="p-5 ">
                    <h1 className="text-quicksand font-[200] text-4xl mb-4">
                    Hello there, I’m Lokesh!
                    </h1>
                    <p className=" text-justify font-mplus text-sm font-medium tracking-wider" id="lala">
                    Currently I am based in Nellore, India. I'm persuing Bachelors in Computer Science from RMK Engineering College in Present.                    </p>
                    <br></br>
                    <p className=" text-justify font-mplus text-sm font-medium tracking-wider" id="lala">
                    My focus is predominantly web development using technologies like React, Node.js, and MongoDB, but I also have experience with languages like Python, C++, Java, and frameworks like ExpressJS. I enjoy contributing to open source projects on platforms like GitHub.                    </p>
                    <br></br>
                    <p className=" text-justify font-mplus text-sm font-medium tracking-wider" id="lala">
                    New and emerging technologies like artificial intelligence, machine learning, blockchain, and augmented reality excite me. I hope to continue enhancing my skills in these domains and apply them to create impactful and innovative solutions.                    </p>
                    <br></br>
                    <p className=" text-justify font-mplus text-sm font-medium tracking-wider" id="lala">
                    Some of my recent projects include <span className=' font-semibold'><a href="https://github.com/vlokesh08/Snapbuy">SnapBuy</a></span>, a e-commerce website developed using React and Express, and <span className=' font-semibold'><a href="https://github.com/vlokesh08/Snapbuy">User API</a></span>, a RESTful API project utilizing CRUD operations with Node.js and MongoDB.
                    </p>
                    <br></br>
                    <p className=" text-justify font-mplus text-sm font-medium tracking-wider" id="lala">
                    If you would like to discuss potential opportunities or have any other questions, please feel free to reach out via email at <span className="font-semibold"><a onclick="handleClick()" href="mailto:venkatalokeshvl@gmail.com">venkatalokeshvl@gmail.com</a> </span> . I would be happy to connect further and discuss how I can add value to your organization.
                    </p>
                </div>
            </div>
        </div>
        <div>
            <Skills />
        </div>
    </section>
  )
}

export default About