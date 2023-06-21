import React from 'react'

function Contact() {
  return (
    <section id="contact">
        <div className="container lg:pt-5">
            <div className="w-auto h-[2px] bg-pallete-300 m-5 "></div>
            <div className=" text-center">
                <h1 className="text-popp font-[700] text-3xl">Contact Me</h1><br></br>
            </div>
            <br></br>
            <div className="md:flex justify-between items-center">
                <div className="w-full h-[300px] md:w-1/2 sm:h-[450px]">
                <iframe
                    className="w-full h-full border-0"
                    title="google-maps" 
                    allowFullScreen=""
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1271.0053568815906!2d79.96758555975659!3d14.420742490303219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1687250759506!5m2!1sen!2sin">
                </iframe>
                </div>

                <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-pallete-200 px-7 ml-5 py-4 lg:px-8 ">
                    <form className="w-full">
                        <div className="mb-5">
                            <input type="text" placeholder="Enter your Name" className="w-full focus:outline-none p-3 rounded-sm" />
                        </div>
                        <div className="mb-5">
                            <input type="text" placeholder="Enter your Name" className="w-full focus:outline-none p-3 rounded-sm" />
                        </div>
                        <div className="mb-5">
                            <textarea type="text" placeholder="Enter your Message" rows={3} className="w-full focus:outline-none p-3 rounded-sm" />
                        </div>
                        <button id="tella" className="w-full p-3 text-white bg-pallete-600 rounded-xl hover:outline-none">Send</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact