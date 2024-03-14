import React from "react";
import Projects from "./Projects";
import image from "../images/background_circles.svg"
const Hero = () => {
  return (
    <>
      <div className="container bg-circles" id="main_hero">
        <div className="flex justify-center align-middle h-screen z-10">
          <div className="flex flex-col justify-center align-middle h-screen p-4">
            <div className=" text-4xl p-2">
              <h2>Hello! </h2>
            </div>
            <div className=" text-4xl p-2">
              <h2>This is Lokesh,</h2>
            </div>
            <div className=" text-4xl p-2">
              <h2>
                I am an{" "}
                <span className=" font-semibold">
                  Enthusiastic Fullstack Developer
                </span>{" "}
                .{" "}
              </h2>
            </div>
            <div className=" text-lg text-pallete-600 p-2">
              Aspiring and enthusiastic full-stack developer dedicated to
              mastering new technologies, with a current focus on WebRTC and
              WebSockets. Passionate about creating innovative web solutions and
              constantly exploring the evolving landscape of programming.
              Committed to honing skills and crafting seamless digital
              experiences.
            </div>
          </div>
        </div>
        <div>
          <Projects />
        </div>
      </div>
    </>
  );
};

export default Hero;
