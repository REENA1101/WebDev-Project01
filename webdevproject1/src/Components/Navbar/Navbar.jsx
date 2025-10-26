import React from 'react'
import "./Navbar.css"
import logoWhite from "../../assets/logo-white.png"
import searchWhite from "../../assets/serach-white-thin.png"
import searchBlack from "../../assets/serach-black-thin.png"
import logo from "../../assets/transparent-logo.png"


const Navbar = () => {
  return (
    <div className="navbar">
      <img style={{width:"100px"}} src={logo} alt="" className="logo"/>
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

      <img style={{width:"100px"}} src={logo} alt="" className="toggle-icon"/>
    </div>
  )
}

export default Navbar