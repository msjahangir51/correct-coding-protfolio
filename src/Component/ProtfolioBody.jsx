import React, { useEffect, useRef, useState } from 'react';
import "../assets/css/Protfolio.css";
import "../assets/css/loading.css"

import { FaExternalLinkAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
// icons
import axios from 'axios';
function ProtfolioBody() {
    const [projectData,setProjectData] = useState(null)

    useEffect(()=>{
        axios.get("https://correct-coding-protfolio-backend.onrender.com/get/latestproductdata ").then((Data)=> setProjectData(Data.data)).catch((err)=> console.log(err))
    }, [])
  return (
    <div className="Protfolio_body">
        <h1 className='Protfolio_heading'>Letest <span>Projects</span></h1>
        <div className="cards">
            { projectData ? projectData.map((item)=>{
    return(
        <div className="card" key={item._id}>
            <img src={"https://correct-coding-protfolio-backend.onrender.com/"+ item.image} className='imgCls' draggable="false"/>
            <div className="card-inside">
                <p className='Title'>{item.name}</p>
                <p className='description'>{item.desc}</p>
                <div>
                <a href={item.github} target='_blank' className='code' title='View Code'><FaCode/></a>
                <a href={item.live} target='_blank' title='Live Link'><FaExternalLinkAlt/></a>
                </div>
            </div>
        </div> 
    )
})
        :<>
        <div className='card loading'>
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>     
       <div className='card loading'>
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
       <div className='card loading'>
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
       <div className='card loading'>
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
       <div className='card loading'>
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
        </>
            }
        </div>
    </div>
  )
}

export default ProtfolioBody