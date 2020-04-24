import React,{useState} from 'react'
import './Navbar2.css'

const Navbar2 = () => {


    const  openNav= ()=> {
        document.getElementById("mobile__menu").style.width = "100%";
      }
      
      const  closeNav =() =>{
        document.getElementById("mobile__menu").style.width = "0";
      }
      
    return (
        <div>
        <header>
          <a className="logo" href="/"><img src="images/logo.svg" alt="logo" /></a>
          <nav>
            <ul className="nav__links">
              <li><a href="#">Services</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </nav>
          <a className="cta" href="#">Contact</a>
          <p onclick={openNav} className="menu cta">Menu</p>
        </header>
        <div id="mobile__menu" className="overlay">
          <a className="close" onclick={closeNav}>×</a>
          <div className="overlay__content">
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
          </div>
        </div>
      </div>
    )
}

export default Navbar2
