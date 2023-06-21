import React from 'react'
import python from "../images/python-svgrepo-com.svg"
import express from "../images/expressjs-icon.svg"
import html from "../images/html-5-svgrepo-com.svg"
import java from "../images/java-logo-svgrepo-com.svg"
import javascript from "../images/javascript-svgrepo-com.svg"
import git from "../images/git-svgrepo-com.svg"
import github from "../images/github-svgrepo-com.svg"
import node from "../images/node-js-svgrepo-com.svg"
import tailwind from "../images/tailwind-svgrepo-com.svg"
function Skills() {
  return (
    <section id="skills">
        <div className="container lg:pt-5">
            <div className="w-auto h-[2px] bg-pallete-300 m-5 "></div>
            <div className=" text-center">
                <h1 className="text-popp font-[700] text-3xl">SKILLS</h1><br></br>
                <h3>These are the Languages, tools and frameworks I'm familiar with.</h3>
            </div>
            <div className="flex flex-wrap justify-evenly items-center gap-3 m-4 p-4">
                <div className="w-[170px] h-[170px] m-5 text-center p-4 flex flex-col items-center  hover:bg-pallete-200 hover:rounded-2xl sm:w-1/2 md:w-1/3 lg:w-1/5">
                    <img src={python} className="w-[120px] flex items-center justify-center h-[120px] m-4 p-4" alt loading='hehe'></img>
                    <h3 className="">Python</h3>
                </div>
                <div className="w-[170px] h-[170px] m-5 text-center p-4 flex flex-col items-center  hover:bg-pallete-200 hover:rounded-2xl sm:w-1/2 md:w-1/3 lg:w-1/5">
                    <img src={java} className="w-[120px] flex items-center justify-center h-[120px] m-4 p-4" alt loading='hehe'></img>
                    <h3 className="">Java</h3>
                </div>
                <div className="w-[170px] h-[170px] m-5 text-center p-4 flex flex-col items-center  hover:bg-pallete-200 hover:rounded-2xl sm:w-1/2 md:w-1/3 lg:w-1/5">
                    <img src={javascript} className="w-[120px] flex items-center justify-center h-[120px] m-4 p-4" alt loading='hehe'></img>
                    <h3 className="">JavaScript</h3>
                </div>
                <div className="w-[170px] h-[170px] m-5 text-center p-4 flex flex-col items-center  hover:bg-pallete-200 hover:rounded-2xl sm:w-1/2 md:w-1/3 lg:w-1/5">
                    <img src={node} className="w-[120px] flex items-center justify-center h-[120px] m-4 p-4" alt loading='hehe'></img>
                    <h3 className="">Node JS</h3>
                </div>
                <div className="w-[170px] h-[170px] m-5 text-center p-4 flex flex-col items-center  hover:bg-pallete-200 hover:rounded-2xl sm:w-1/2 md:w-1/3 lg:w-1/5">
                    <img src={express} className="w-[120px] flex items-center justify-center h-[120px] m-4 p-4" alt loading='hehe'></img>
                    <h3 className="">Express JS</h3>
                </div>
                <div className="w-[170px] h-[170px] m-5 text-center p-4 flex flex-col items-center  hover:bg-pallete-200 hover:rounded-2xl sm:w-1/2 md:w-1/3 lg:w-1/5">
                    <img src={git} className="w-[120px] flex items-center justify-center h-[120px] m-4 p-4" alt loading='hehe'></img>
                    <h3 className="">Git</h3>
                </div>
                <div className="w-[170px] h-[170px] m-5 text-center p-4 flex flex-col items-center  hover:bg-pallete-200 hover:rounded-2xl sm:w-1/2 md:w-1/3 lg:w-1/5">
                    <img src={github} className="w-[120px] flex items-center justify-center h-[120px] m-4 p-4" alt loading='hehe'></img>
                    <h3 className="">Github</h3>
                </div>
                <div className="w-[170px] h-[170px] m-5 text-center p-4 flex flex-col items-center  hover:bg-pallete-200 hover:rounded-2xl sm:w-1/2 md:w-1/3 lg:w-1/5">
                    <img src={html} className="w-[120px] flex items-center justify-center h-[120px] m-4 p-4" alt loading='hehe'></img>
                    <h3 className="">HTML</h3>
                </div>
                <div className="w-[170px] h-[170px] m-5 text-center p-4 flex flex-col items-center  hover:bg-pallete-200 hover:rounded-2xl sm:w-1/2 md:w-1/3 lg:w-1/5">
                    <img src={tailwind} className="w-[120px] flex items-center justify-center h-[120px] m-4 p-4" alt loading='hehe'></img>
                    <h3 className="">Tailwind</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills