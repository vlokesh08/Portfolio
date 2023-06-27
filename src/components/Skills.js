import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
import python from "../images/python-svgrepo-com.svg"
import express from "../images/expressjs-icon.svg"
import html from "../images/html-5-svgrepo-com.svg"
import java from "../images/java-logo-svgrepo-com.svg"
import javascript from "../images/javascript-svgrepo-com.svg"
import git from "../images/git-svgrepo-com.svg"
import github from "../images/github-svgrepo-com.svg"
import node from "../images/node-js-svgrepo-com.svg"
import tailwind from "../images/tailwind-svgrepo-com.svg"
import cpp from "../images/icons8-c.svg"
function Skills() {
    const data = [
        { src: python, name: 'Python' },
        { src: cpp, name: 'C++' },
        { src: java, name: 'Java' },
        { src: javascript, name: 'JavaScript' },
        { src: node, name: 'Node JS' },
        { src: express, name: 'Express JS' },
        { src: git, name: 'Git' },
        { src: github, name: 'Github' },
        { src: html, name: 'HTML' },
        { src: tailwind, name: 'Tailwind' },
      ];
  return (
    <section id="skills">
        <div className="container lg:pt-5">
            <div className="w-auto h-[2px] bg-pallete-300 m-5 "></div>
            <div className=" text-center">
                <h1 className="text-popp font-[700] text-3xl">SKILLS</h1><br></br>
                <h3>These are the Languages, tools and frameworks I'm familiar with.</h3>
            </div>
            <div className="flex flex-wrap justify-evenly items-center gap-3 m-4 p-4">
            {data.map((item, index) => (
                <Card key={index} className="w-[170px] h-[170px] mt-4">
                <CardHeader shadow={false} floated={false} className="h-96">
                    <img src={item.src} className="w-full h-full" alt={item.name} />
                </CardHeader>
                <CardBody>
                    <div className="flex items-center justify-center mb-2">
                    <Typography color="blue-gray" className="font-popp font-[500]">
                        {item.name}
                    </Typography>
                    </div>
                </CardBody>
                </Card>
            ))}
            </div> 
        </div>
    </section>
  )
}

export default Skills