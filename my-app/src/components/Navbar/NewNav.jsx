"use client";
import  { useState,useRef } from 'react'
import Dropdown from './Dropdown'
import Dropdown2 from './Dropdown2';
import './newnav.css'


const NewNav = () => {

  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);


  const onMouseEnter = () => {
    if (window.innerWidth >= 960 && window.innerHeight >= 400) {
      setDropdown(true);
      setDropdown2(false);
    }
  };
 
  


  const onMouseEnter2 = () => {
    if (window.innerWidth >= 960 && window.innerHeight >= 400) {
      setDropdown2(true);
      setDropdown(false);
    }
  };

  const handleOnClick = () => {
    
      
      setDropdown(false);
    
  };
  const handleOnClick2 = () => {
    
      
    setDropdown2(false);
  
};
  

  

  return (
    <>
    <header class="header" >
    <div className="nav_main">
    <div className="navhead">
    <a href="/" class="logo"><img src='images/Header-Logo.svg'></img></a>
    </div>
    <div className="nav_subhead">
    <input className="menu-btn" type="checkbox" id="menu-btn" />
   
    <label className="menu-icon" for="menu-btn"><span class="navicon"></span></label>
   
    <ul className="menu">
    <li>
    <a 
        onMouseOver={onMouseEnter}
        
          href='/' className='nav-links'>Home</a>
    { dropdown && 
     
                  <Dropdown />
               

    }
    
    <a href='/faqs' className='nav-links' onMouseOver={handleOnClick} >FAQs</a>
    <a onClick={handleOnClick2} onMouseEnter={onMouseEnter2} href='/services' className='nav-links'>Services</a>
    { dropdown2 && 
     
     <Dropdown2  />
  

}
    <a href='/appointment' className='nav-links'>Appointment</a>
    <a href='/contact' className='nav-links'>Contact</a>
    </li>
     
      <button className='btn'><i class="fas fa-light fa-magnifying-glass"></i></button>
    </ul>
    </div>
    </div>
  </header> 
  </>
  
  )
}

export default NewNav