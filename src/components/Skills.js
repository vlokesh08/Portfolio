import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
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
import react from "../images/react-svgrepo-com.svg"
import redis from "../images/redis-opened-svgrepo-com.svg"
import docker from  "../images/docker-svgrepo-com.svg"
import mongo from "../images/mongo-svgrepo-com.svg"
function Skills() {
    const data = [
        { src: python, name: 'Python' },
        { src: cpp, name: 'C++' },
        { src: java, name: 'Java' },
        { src: html, name: 'HTML' },
        { src: javascript, name: 'JavaScript' },
        { src: mongo, name: 'MongoDB' },
        { src: express, name: 'Express JS' },
        { src: react, name: 'React' },
        { src: node, name: 'Node JS' },
        { src: git, name: 'Git' },
        { src: github, name: 'Github' },
        { src: tailwind, name: 'Tailwind' },
        { src: redis, name: 'Redis' },
        { src: docker, name: 'Docker' },
      ];
  return (
    <section id="skills">
        <div className="container lg:pt-5">
            <div className=" text-center">
                <h1 className="text-popp font-[700] text-3xl">SKILLS</h1><br></br>
                <h3>These are the Languages, tools and frameworks I'm familiar with.</h3>
            </div>
            <div className="flex flex-wrap justify-evenly items-center gap-3 m-4 p-4">
            {data.map((item, index) => (
                <Card key={index} className="w-[170px] h-[170px] mt-4 dark:bg-darklight dark:text-white rounded-lg">
                <CardHeader shadow={false} floated={false} className="h-96 flex justify-center align-middle dark:bg-darklight">
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