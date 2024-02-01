import React from "react";
import Projects from "./Projects";
const Hero = () => {
  return (
    <>
    {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute z-0 opacity-60 w-3/4 right-9 top-[50px]">
        <path
          fill="#0F62FE"
          d="M38.1,25.6C24.1,46.4,-30.1,47.5,-43.2,27.3C-56.2,7.1,-28.1,-34.4,-1,-35C26.1,-35.6,52.2,4.8,38.1,25.6Z"
          transform="translate(100 100)"
        />
      </svg> */}
    <div className="container relative">
      <div className="flex justify-center align-middle h-screen relative z-10">
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
