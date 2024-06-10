import React, { useEffect, useState } from 'react'
import Navigation from './Navigation';
import "../../assets/css/Admin/Message.css"
import { Auth } from './../../Auth';
import axios from 'axios';
import DemoProfile from "../../../public/demoprofile.png"
function Message() {
  const [project,setProject] = useState();
  Auth()
  useEffect(()=>{
   axios.get("https://correct-coding-protfolio-backend.onrender.com/api/message").then(res=>{
      setProject(res.data)
    }).catch(err =>{
      console.log(err)
    })
  }, [])
  return (
    <div className='ViewProjects message'>
      <div className="container">
        <Navigation/>
      <h1 className='latestProject'>message</h1>
        <div className="views">
          {!project || project.map((item)=>{
            const {_id,email,name,message} = item;
            return(
              <div key={_id} className='view'>
                <div className='image'>
                  <img src={DemoProfile}/>
                </div>

                <div className='docs'>
                  <h1>{name}</h1>
                  <h1>{email}</h1>
                  <p>{message}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Message