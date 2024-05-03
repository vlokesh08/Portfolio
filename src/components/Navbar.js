import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import resume from "../images/Lokesh_Resume.pdf"

const Navbar = () => {
  const [clicked,setClicked] = useState(false);
  const [clicked1,setClicked1] = useState(false);

  return (
    <>
      <nav className="bg-white">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setClicked1(!clicked1)}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                
                <a className="navbar-brand py-2 font-quicksand font-semibold -tracking-tighter text-sm" href='/'>VENKATA LOKESH</a>
              </div>
              
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              

              <div className="relative ml-3">
                <div className="hidden sm:ml-6 sm:block">
                <div className="flex align-middle justify-evenly" >
            <div className="navbar-nav flex align-middle justify-center">
              <a className="nav-link px-5 py-2" href="/projects">Projects</a>
              <a className="nav-link px-5 py-2" href="/learnings">Learnings</a>
              <a className="nav-link px-5 py-2" href="/about">About</a>
              <a className="nav-link px-5 py-2" href="/contact">Contact</a>
              <a href={resume} target='_blank' className="px-3 py-4 md:px-3 md:py-2 font-medium md:font-medium bg-gray-700 flex justify-center align-middle text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-300">Resume</a>
              {/* <a className="nav-link px-3" target='_blank' href={resume}>Resume</a> */}
            </div>
          </div>
                </div>

                {
                  clicked && (
                    <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  
                >
                  <a
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    
                    id="user-menu-item-1"
                  >
                    Settings
                  </a>
                  <button
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    id="user-menu-item-2"
                  >
                    Sign out
                  </button>
                </div>
                  )
                }

                
              </div>
            </div>
          </div>
        </div>
        {
          clicked1 && (
            <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <a
                href="/projects"
                className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                aria-current="page"
              >
                Projects
              </a>
              <a
                href="/learnings"
                className="text-gray-700 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Learnings
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-gray-700 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Contact
              </a>
              <a
                href={resume}
                className="px-3 py-4 md:px-3 md:py-2 font-medium md:font-medium bg-gray-700 flex justify-center align-middle text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-300"
              >
                Resume
              </a>
            </div>
          </div>
          )
        }

      </nav>
    </>
  );
};

export default Navbar;