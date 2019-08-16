import React from 'react'
import './navbar.scss'
import {Link} from 'react-router-dom'

const navbar = () => {
    function myFunction() {
        var x = document.getElementById("Navbar");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
    return (
        <div className="topnav" id="Navbar">
        <Link to="/">BookStore</Link>
        <Link to="/cart">Cart</Link>
       
         <Link to="/Search">Search</Link>
        <div className="dropdown">
          <button className="dropbtn">Categories
           
          </button>
          <div className="dropdown-content">

           <Link to="/Adventure">Adventure</Link>
           <Link to="/Drama">Drama</Link>
           <Link to="/Lifestyle">Lifestyle</Link>
           <Link to="/Horror">Horror</Link>
           
           <Link to="/">ALL</Link>
           
            
            
          </div>
        </div>  
      
         
      
        
        
     
      
      
        <p  className="icon" onClick={myFunction}>&#9776;</p>
      </div>
    )
}

export default navbar
