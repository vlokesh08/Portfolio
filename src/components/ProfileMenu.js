import React from 'react'
import resume from "../images/Lokesh_Resume.pdf"
import hehe from "../images/Custom_Cursor_Light.svg"
const ProfileMenu = () => {

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid flex justify-between align-middle">
          <a className="navbar-brand py-2 font-quicksand font-semibold -tracking-tighter text-sm" href='/'>VENKATA LOKESH</a>
          <div className="flex align-middle justify-evenly" >
            <div className="navbar-nav flex align-middle justify-center">
              <a className="nav-link px-5 py-2" href="/">Projects</a>
              <a className="nav-link px-5 py-2" href="/learnings">Learnings</a>
              <a className="nav-link px-5 py-2" href="/about">About</a>
              <a className="nav-link px-5 py-2" href="/contact">Contact</a>
              <a href={resume} target='_blank' className="px-3 py-4 md:px-3 md:py-2 font-medium md:font-medium bg-gray-700 flex justify-center align-middle text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-300">Resume</a>
              {/* <a className="nav-link px-3" target='_blank' href={resume}>Resume</a> */}
            </div>
          </div>
          
        </div>
      </nav>
    </div>
  )
}

export default ProfileMenu