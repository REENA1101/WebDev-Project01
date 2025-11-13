import React from 'react'
import "./Navbar.css"
import logoLlight from "../../assets/logo-black.png"
import logoDark from "../../assets/logo-white.png"
import searchWhite from "../../assets/serach-white-thin.png"
import searchBlack from "../../assets/search-black-thin.png"
import logoW from "../../assets/logo-black.png"
import logoB from "../../assets/logo-white.png"
import toggleDay from "../../assets/sun-white.png"
import toggleNight from "../../assets/black-sun.png"
import logo from "../../assets/correct-logo.png"

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
         <input type="text" placeholder="Search" style={{fontSize:"15px"}}/>
         <img src={searchWhite} alt=""/>
      </div>

      <img style={{width: "24px", marginLeft:"40px"}} src={toggleNight} alt="" className="toggle-icon"/>
    </div>
  )
}

export default Navbar