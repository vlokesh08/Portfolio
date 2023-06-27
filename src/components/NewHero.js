import React from 'react';
import image from '../images/main.jpeg';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { Button } from "@material-tailwind/react";
import twitter from "../images/icons8-twitter.svg";
import linkedin from "../images/icons8-linkedin.svg";
import github from "../images/icons8-github (1).svg";

const NewHero = () => {
    const [text, count] = useTypewriter({
        words: [
            "Teach Enthusiastic",
            "Building Web Apps",
            "Problem Solving",
        ],
        loop: true,
        delaySpeed: 1000,
    });

    return (
        <div className="container">
            <br />
            <br />
            <div className="flex flex-col md:flex-row items-center justify-center m-10">
                <div className="md:w-1/2">
                    <div className="text-center md:text-left">
                        <h2 className="text-bold font-[700]">Hello Welcome!</h2>
                        <div className="flex flex-row">
                            <div><h2 className="text-popp font-[300] sm:text-4xl leading-9 mt-5">I'm </h2></div>
                            <div>
                                <h1 className="text-popp font-bold sm:text-4xl leading-9 mt-5 px-3">
                                    Venkata Lokesh
                                </h1>
                            </div>
                        </div>
                        <br />
                        <div className="">
                            <span className="text-popp font-bold sm:text-4xl leading-9 mt-5">{text}</span>
                            <Cursor cursorColor='black' />
                        </div>
                        <div className="flex items-center gap-6 mt-7">
                            <a href="#contact">
                                <Button variant="gradient" size="sm" fullWidth>
                                    Contact
                                </Button>
                            </a>
                        </div>
                        <div className="justify-start h-[5px]">
                            <div className="m-2 py-5 flex items-center gap-8">
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/vlokesh08">
                                    <img className="w-6 h-6 sm:w-8 sm:h-8" src={github} alt="GitHub"></img>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/venkata-lokesh-7327b8210/">
                                    <img className="w-6 h-6 sm:w-8 sm:h-8" src={linkedin} alt="LinkedIn"></img>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/vlokesh204">
                                    <img className="w-6 h-6 sm:w-8 sm:h-8" src={twitter} alt="Twitter"></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0">
                    <div className="w-full h-auto md:w-96 mx-auto">
                        <img
                            src={image}
                            alt="Hero Image"
                            className="w-full h-auto rounded animate-fade-in-right md:rounded-none md:animate-none md:mb-0"
                        />
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default NewHero;
