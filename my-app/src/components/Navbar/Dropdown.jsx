
"use client"

import './dropdown.css'




const Dropdown = () => {

    
  return (
    <>
<ul 
className='dropdown-menu'>
    

    <li >
        <a className="dropdown-link" href="/" >
            Doctor Profile
        </a>
        <a className="dropdown-link" href="/services" >
            General Info
        </a>
    </li>
  

</ul>
    </>
  )
}

export default Dropdown