import React from 'react'
import resume from "../images/VenkataLokesh Resume.pdf"

const ProfileMenu = () => {

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid flex justify-between align-middle">
          <a className="navbar-brand font-quicksand font-semibold -tracking-tighter text-sm" href='/'>VENKATA LOKESH</a>
          <div className="flex align-middle justify-evenly" >
            <div className="navbar-nav flex align-middle justify-center">
              <a className="nav-link px-3" href="/">Projects</a>
              <a className="nav-link px-3" href="/about">About</a>
              <a className="nav-link px-3" href="/contact">Contact</a>
              <a className="nav-link px-3" target='_blank' href={resume}>Resume</a>
            </div>
          </div>
          
        </div>
      </nav>
    </div>
  )
}

export default ProfileMenu