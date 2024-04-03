import React from "react";
import Projects from "./Projects";
import image from "../images/background_circles.svg";
import { a } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div className="container">
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
            <div>
              <h1 className="font-bold text-7xl text-blue-gray-200">
                # Learning <span className="text-5xl">🚀</span>
              </h1>
            </div>
            <div className="mt-5">
              <div className="w-[35px] flex flex-row gap-5">
                <a
                  className="w-[35px] h-[35px]"
                  href="https://leetcode.com/vlokesh08/"
                >
                  <svg
                    className="w-[35px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="leetcode"
                  >
                    <path
                      fill="#B3B1B0"
                      d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"
                    ></path>
                    <path
                      fill="#E7A41F"
                      d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"
                    ></path>
                    <path
                      fill="#070706"
                      d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z"
                    ></path>
                  </svg>
                </a>
                <a
                  className="w-[35px] h-[35px]"
                  href="https://github.com/vlokesh08/"
                >
                  <svg
                    className="w-[35px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    id="github"
                  >
                    <path
                      fill="#5C6BC0"
                      d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"
                    ></path>
                  </svg>
                </a>
                <a
                  className="w-[35px] h-[35px]"
                  href="https://www.linkedin.com/in/vlokesh08/"
                >
                  <svg
                    className="w-[35px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28.87 28.87"
                    id="aedin"
                  >
                    <g data-name="Layer 2">
                      <g data-name="Layer 1">
                        <rect
                          width="28.87"
                          height="28.87"
                          fill="#0b86ca"
                          rx="6.48"
                          ry="6.48"
                        ></rect>
                        <path
                          fill="#fff"
                          d="M8 12h3v9.68H8zm1.53-4.81a1.74 1.74 0 11-1.74 1.75 1.74 1.74 0 011.74-1.75M12.92 12h2.89v1.32a3.16 3.16 0 012.85-1.56c3 0 3.61 2 3.61 4.61v5.31h-3V17c0-1.12 0-2.57-1.56-2.57s-1.8 1.22-1.8 2.48v4.79h-3z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
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
