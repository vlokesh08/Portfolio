import React from 'react'
import Links from './Links'

function Footer() {
  return (
    <footer className="bg-pallete-700 pt-4">
        <div className="container">
            <div className="flex justify-center items-center p-5">
                <a id="tella" href="mailto:venkatalokeshvl@gmail.com">venkatalokeshvl@gmail.com</a>
            </div>
            <Links />
            <br />
            <br />

        </div>
    </footer>
  )
}

export default Footer