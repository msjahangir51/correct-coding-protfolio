import React, { useState } from 'react'
import "../../assets/css/Admin/AdminProfile.css"
import { NavLink} from 'react-router-dom';
import { HiMiniBars3 } from "react-icons/hi2";
function Navigation() {
    const handleLogout =()=>{
        localStorage.removeItem("token");
    }

    const [click,setClick] = useState(false)
  return (
    <>
        <button className='navigateBtn' onClick={()=> setClick(!click)}>
          <HiMiniBars3/>
        </button>
      <div className={`navigation ${click? "active" : ""}`}>
        <ul>
          <li><NavLink to="/admin">Home</NavLink></li>
          <li><NavLink to="/admin/project">Latest Project</NavLink></li>
          <li><NavLink to="/view/projects">View Projects</NavLink></li>
          <li><NavLink to="/message">Message</NavLink></li>
          <li><NavLink to="/">FrontEnd</NavLink></li>
          <li onClick={handleLogout}><NavLink to="/">Logout</NavLink></li>
        </ul>
     </div>
    </>
  )
}

export default Navigation