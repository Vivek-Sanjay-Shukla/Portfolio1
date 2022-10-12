import React from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className="n-wrapper">

        <div className="n-left">
            <div className="n-name">Vivek</div>
            {/* <span>toggle</span> */}
        </div>

        <div className="n-right">
            <div className="n-list">
                <ul>

                    <Link spy = {true} to = 'Navbar' smooth = {true} activeClass = 'activeClass'>
                    <li>Home</li>
                    </Link>

                    <Link spy = {true} to = 'About' smooth = {true} activeClass = 'activeClass'>
                    <li>About</li>
                    </Link>

                    <Link spy = {true} to = 'Skills' smooth = {true} activeClass = 'activeClass'>
                    <li>Skills</li>
                    </Link>

                    <Link spy = {true} to = 'Projects' smooth = {true} activeClass = 'activeClass'>
                    <li>Portfolio</li>
                    </Link>
{/* 
                    <Link spy = {true} to = 'Navbar' smooth = {true} activeClass = 'activeClass'>
                    <li>Contact</li>
                    </Link> */}

                </ul>
            </div>
            <Link spy = {true} to = 'contact' smooth = {true} activeClass = 'activeClass'>
            <button className="button n-button">
                Contact us
            </button>
            </Link>
            
        </div>

    </div>
  )
}

export default Navbar