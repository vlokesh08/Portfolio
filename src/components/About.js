import React from "react";
import image2 from "../images/second-pic.jpg";
import Skills from "./Skills";
function About() {
  return (
    <section id="about">
      <div className="container lg:pt-5">
        <div className="flex flex-row px-3 justify-between">
          <div className="w-[1280px] mt-12 h-[580px] object-cover relative overflow-hidden hidden sm:block p-8 rounded-3xl  ">
            <img className="w-full object-cover object-center h-full rounded-3xl" src={image2} alt="textImage"></img>
          </div>
          <div className="p-5 ">
            <h1 className="text-mplus    font-[200] text-4xl mb-4">
              Hello there, I’m Lokesh!
            </h1>
            <p className="font-normal text-gray-500 text-sm md:text-base text-justify">
              I am Lokesh, a driven and accomplished individual who completed my
              Bachelor's in Computer Science at RMK Engineering College with a
              stellar CGPA of 9.3. Notably, my final year project was recognized
              as the best project, showcasing my dedication and expertise in the
              field. 
            </p>
            <br></br>
            <p className="font-normal text-gray-500 text-sm md:text-base text-justify">
              Currently based in Nellore, India, I am actively pursuing my
              passion for web development, with a primary focus on technologies
              such as React, Node.js, and MongoDB. Alongside these, I possess
              proficiency in languages like Python, C++, and Java, as well as
              frameworks like ExpressJS. My enthusiasm extends to contributing
              to impactful open source projects on platforms like GitHub.{" "}
              </p>
              <br></br>
            <p className="font-normal text-gray-500 text-sm md:text-base text-justify">
              I am deeply intrigued by cutting-edge technologies such as
              machine learning, WebRTC and Socket.io. Continuously striving to expand my skills in
              these domains, I aim to leverage them to craft innovative and
              meaningful solutions. 
            </p>
            <br></br>
            <p className="font-normal text-gray-500 text-sm md:text-base text-justify">
              Should you wish to explore potential collaborations or have any
              inquiries, please do not hesitate to contact me via email at{" "}
              <span className=" font-semibold">
              <a href="mailto:venkatalokeshvl@gmail.com">venkatalokeshvl@gmail.com</a>
              </span>
              . I am eager to engage further and discuss how I can contribute
              value to your organization.
            </p>
            <br></br>
            <p className="font-normal text-gray-500 text-sm md:text-base text-justify">
              Among my recent projects, SnapBuy stands out as an e-commerce
              website developed using React and Express, showcasing my adeptness
              in creating dynamic web applications. Additionally, the User API
              project demonstrates my expertise in building RESTful APIs with
              Node.js and MongoDB, proficiently handling CRUD operations.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Skills />
      </div>
    </section>
  );
}

export default About;
