import React from 'react'
import image1 from '../images/main.jpeg'
import { Cursor, useTypewriter } from 'react-simple-typewriter';

import twitter from "../images/icons8-twitter.svg"
import linkedin from "../images/icons8-linkedin.svg"
import github from "../images/icons8-github (1).svg"
function Hero() {
    const [text, count] = useTypewriter({
        words: [
            "Teach Enthusiastic",
            "Building Web Apps",
            "Problem Solving",
        ],
        loop: true,
        delaySpeed: 1000,
    })
  return (
    <section id="home" className="pt-0">
        <div className="container pt-14">
            <div className="md:flex items-center justify-center sm:flex-col md:flex-row">
                <div className="w-full md:basis-1/2">
                    <h2 className="text-Bold font-[700]">Hello Welcome!</h2>
                    <div className="flex flex-row">
                    <div><h2 className="text-popp font-[300] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5">I'm </h2></div>
                    <div>
                    <h1 className="text-popp font-[900] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5 px-3">
                        Venkata Lokesh
                    </h1>
                    </div>
                    </div>
                    <br />
                    <div className="">
                            <span className="text-popp font-[700] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5">{text}</span>
                            <Cursor cursorColor='black' />
                    </div>
                    <div className="flex items-center gap-6 mt-7">
                        <a href="#contact">
                        <button className="flex text-pallete-200 bg-pallete-700  items-center gap-2 text-bold font-[300] border border-solid
                    py-2 px-8 max-h-[40px] rounded-2xl hover:text-white hover:font-[500] hover:bg-pallete-700">
                        Contact Me
                    </button>
                        </a>
                    </div>
                    <div className=" justify-start h-[5px]">
                    <div className="m-2 py-5 flex items-center gap-8">
                        <a target="_blank" href="https://github.com/vlokesh08">
                            <img className="w-[30px] h-[30px]" src={github}></img>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/venkata-lokesh-7327b8210/">
                            <img className="w-[30px] h-[30px]" src={linkedin}></img>
                        </a>
                        <a target="_blank" href="https://twitter.com/vlokesh204">
                            <img className="w-[30px] h-[30px]" src={twitter}></img>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="basis-1/3 mt-10 sm:mt-0 ">
                    <figure className="flex items-center justify-center rounded-xl">
                        <img className=" rounded-full" src={image1} alt="lala"></img>
                    </figure>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero