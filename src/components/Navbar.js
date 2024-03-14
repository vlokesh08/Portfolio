import React from 'react'
import image from '../images/VL03.png'
import resume from "../images/VenkataLokesh Resume.pdf"
function Navbar() {
  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center">
        <div className="container">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-[10px]">
                    <img className=" w-[35px] h-[35px]"src = {image}></img>
                </div>
                <div className="menu">
                    <ul className="flex items-center gap-10">
                        <li><a className="text-body font-[300]" href="#about">ABOUT ME</a></li>
                        {/* <li><a className="text-body font-[300]" href="#experience">EXPERIENCE</a></li> */}
                        <li><a className="text-body font-[300]" href="#skills">SKILLS</a></li>
                        <li><a className="text-body font-[300]" href="#projects">PROJECTS</a></li>
                        <li><a className="text-body font-[300]" href="#contact">CONTACT ME</a></li>

                    </ul>
                </div>
                <div className="flex items-center gap-4">
                <a href={resume} className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">Resume
                    {/* <button className="flex text-pallete-200 bg-pallete-700  items-center gap-2 text-bold font-[300] border border-solid
                    py-2 px-8 max-h-[40px] rounded-2xl hover:text-white hover:font-[500] hover:bg-pallete-700">
                        RESUME
                    </button> */}
                    </a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar