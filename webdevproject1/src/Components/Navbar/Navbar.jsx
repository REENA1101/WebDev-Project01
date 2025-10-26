import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="" alt="" className="logo"/>
      <ul>
        <li>Home</li>
         <li>Products</li>
          <li>Features</li>
          <li>About</li>
      </ul>

      <div className="search-Box">
         <input type="text" placeholder="Search"/>
         <img src="" alt=""/>
      </div>

      <img src="" alt="" className="toggle-btn"/>
    </div>
  )
}

export default Navbar