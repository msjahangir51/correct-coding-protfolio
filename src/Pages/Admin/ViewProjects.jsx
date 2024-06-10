import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import "../../assets/css/Admin/ViewProjects.css"
import { Auth } from '../../Auth'
import axios from 'axios'

function ViewProjects() {
  const [project,setProject] = useState();
  Auth()
  useEffect(()=>{
   axios.get("https://correct-coding-protfolio-backend.onrender.com/").then(res=>{
      setProject(res.data)
    }).catch(err =>{
      console.log(err)
    })
  }, [])

  return (
    <div className='ViewProjects'>
      <div className="container">
        <Navigation/>
      <h1 className='latestProject'>Latest Project</h1>
        <div className="views">
          {!project || project.map((item)=>{
            const {_id,desc,github,image,live,name} = item;
            return(
              <div key={_id} className='view'>
                <div className='image'>
                  <img src={"https://correct-coding-protfolio-backend.onrender.com/"+image}/>
                </div>

                <div className='docs'>
                  <h1>{name}</h1>
                  <p>{desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ViewProjects