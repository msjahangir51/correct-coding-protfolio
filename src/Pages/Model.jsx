import React from 'react';
import Navbar2 from '../Component/Navbar2';
import "../assets/css/Home.css";
import { Link } from 'react-router-dom';
import Skills from './Skills';
import AboutBody from '../Component/AboutBody';
import ServiceBody from '../Component/ServiceBody';
import SkillsBody from '../Component/SkillsBody';
import ProtfolioBody from './../Component/ProtfolioBody';
import Footer from '../Component/Footer';
import Lottie from "lottie-react";
import ScrollDown from "../../public/ScrollDown.json"
function Model() {
  const handleHashRemove= ()=>{
    setTimeout(()=>{
      history.replaceState("", document.title,window.location.origin +  window.location.pathname +  window.location.search)
    },5)
  }
  return(
  <>
        <Navbar2/>
    <div className='Home'>
        <h4>Hello World.</h4>
        <h1>I'm Jahangir Alom</h1>
        <p>FRONT-END DEVELOPER</p>

        <a href="#skill" onClick={handleHashRemove}>
          <Lottie an animationData={ScrollDown}/>
         </a>
    </div>

    <SkillsBody/>

    <AboutBody/>

    <ServiceBody/>

    <ProtfolioBody/>

    <Footer/>
  </> 
  )
}

export default Model