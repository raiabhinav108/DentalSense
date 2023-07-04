
import './newnav.css'


const NewNav = () => {
  return (
    <>
    <header class="header">
    <div className="nav_main">
    <div className="navhead">
    <a href="" class="logo"><img src='images/Header-Logo.svg'></img></a>
    </div>
    <div className="nav_subhead">
    <input class="menu-btn" type="checkbox" id="menu-btn" />
   
    <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
   
    <ul class="menu">
    <li>
    <a  href='/' className='nav-links'>Home</a>
    <a href='/studio' className='nav-links'>About Us</a>
    <a href='/services' className='nav-links'>Services</a>
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