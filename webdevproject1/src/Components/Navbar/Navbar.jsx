import React from 'react'
import "./Navbar.css"
import logoLlight from "../../assets/logo-black.png"
import logoDark from "../../assets/logo-white.png"

import searchWhite from "../../assets/serach-white-thin.png"
import searchBlack from "../../assets/search-black-thin.png"

import toggleLight from '../../assets//black-sun.png'
import logo_light from "../../assets/logo-white.png"

import logo from "../../assets/correct-logo.png"
import darkTheme from "../../assets/black-sun.png"
import lightTheme from "../../assets/sun-white.png"


const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo"/>
      <ul>
        <li>Home</li>
         <li>Products</li>
          <li>Features</li>
          <li>About</li>
      </ul>

      <div className="search-Box">
         <input type="text" placeholder="Search"/>
         <img src={searchWhite} alt=""/>
      </div>

      <img style={{width: "30px"}} src={lightTheme} alt="" className="toggle-icon"/>
    </div>
  )
}

export default Navbar