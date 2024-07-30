import React from "react";
import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import axios from "axios";
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Twitter } from 'lucide-react';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const handleSave = async () => {
    try{
      const res = await axios.post(`${BACKEND_URL}/messages`, {
        name,
        email,
        message,
      });
      console.log(res);
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <section id="contact" className="min-h-screen">
        <div className="flex flex-col gap-12 justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">Contact Me</h2>
            <p className="max-w-2xl mt-3 text-lg leading-6 text-gray-500 dark:text-gray-400">Have a question or want to work together?</p>
          </div>
          <div className="flex md:flex-row flex-col gap-3  dark:text-white p-8 w-3/4 ">
        {/* Left Column */}
        <div className=" bg-blue-500 rounded-lg p-6 mr-8 md:w-1/3 w-full text-white" >
          <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
          
          
          <div className="mb-6">
            <h3 className="font-semibold mb-1">Mail</h3>
            <p className="text-sm"></p>
            <p className="text-sm">venkatalokeshvl@gmail.com</p>
          </div>
          
          <div className="">
            <h3 className="font-semibold mb-3">Social media</h3>
            <div className="flex space-x-4 items-center">
              <a href="#" className="text-white hover:text-gray-200 bg-blue-400 p-2 rounded-full">
                <Linkedin className="" />
              </a>
              <a href="#" className="text-white hover:text-gray-200 bg-blue-400 p-2 rounded-full">
                <Github />
              </a>
              <a href="#" className="text-white hover:text-gray-200 bg-blue-400 p-2 rounded-full">
                <Twitter />
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
  
        {/* Right Column - Form */}
        <div className="md:w-2/3 w-full">
        <div className="flex flex-col gap-3 mb-5">
        
        <div className="flex space-x-4">
          <Input type="text" placeholder="Name" className="w-full dark:bg-slate-700 rounded px-3 py-2" value={name} onChange={(e)=>{setName(e.target.value)}}  />
        </div>
        <Input type="email" placeholder="Email" className="w-full  dark:bg-slate-700 rounded px-3 py-2" value={email} onChange={(e)=>{setEmail(e.target.value)}}  />
        
        <Textarea placeholder="Tell us how can I help you with" className="w-full dark:bg-slate-700 rounded px-3 py-2 h-24" value={message} onChange={(e)=>{setMessage(e.target.value)}} ></Textarea>
        </div>

            <button type="submit" className="w-full bg-blue-500 text-white rounded py-2 font-semibold hover:bg-blue-600"
              onClick={handleSave}
            >
              Send Message
            </button>
        </div>
      </div>
        </div>
    </section>
  );
}

export default Contact;
