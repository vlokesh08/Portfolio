import React from 'react'
import twitter from "../images/icons8-twitter.svg"
import linkedin from "../images/icons8-linkedin.svg"
import github from "../images/icons8-github (1).svg"
function Links() {
  return (
    <div>
        <div className="m-2 flex justify-center items-center gap-8">
            <a target="_blank" href="https://github.com/vlokesh08">
                <img className="w-[50px] h-[50px]" src={github}></img>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/venkata-lokesh-7327b8210/">
                <img className="w-[50px] h-[50px]" src={linkedin}></img>
            </a>
            <a target="_blank" href="https://twitter.com/vlokesh204">
                <img className="w-[50px] h-[50px]" src={twitter}></img>
            </a>
        </div>
    </div>
  )
}

export default Links