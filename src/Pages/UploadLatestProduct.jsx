import React, { useState } from 'react'
import axios from "axios";
import "../assets/css/Admin/uploadsLatestProjects.css"
import Navigation from './Admin/Navigation';
import { Auth } from '../Auth';
import { useNavigate } from 'react-router-dom';
function UploadLatestProduct() {
    const navigate = useNavigate()
    const [name,setName] = useState("");
    const [desc,setDesc] = useState("");
    const [live,setLive] = useState("");
    const [github,setGithub] = useState("");
    const [image,setImage] = useState();
    Auth()
    const handleClick = ()=>{
        const fromData = new FormData();
        fromData.append("file", image);
        fromData.append("name", name);
        fromData.append("desc", desc);
        fromData.append("live", live);
        fromData.append("github", github);
        axios.post("http://localhost:3000/post/latestproductdata", fromData,
        {
            headers: {'Content-Type': 'multipart/form-data'}
        })
        setName("")
        setDesc("")
        setLive("")
        setGithub("")
        // setImage("")
        navigate("/view/projects")
    }
  return (
    <div className='UploadLatestProduct'>
        <div className="LatestProduct">
            <Navigation/>
            <form>
                <input type="text" placeholder='enter your name' value={name} onChange={(e)=> setName(e.target.value)} required/>
                <textarea type="text" placeholder='enter your drescription' value={desc} onChange={(e)=> setDesc(e.target.value)} required/>
                <input type="text" placeholder='enter your live' value={live} onChange={(e)=> setLive(e.target.value)} required/>
                <input type="text" placeholder='enter your github' value={github} onChange={(e)=> setGithub(e.target.value)} required/>
                <input type="file" placeholder accept='image/*' onChange={(e)=> setImage(e.target.files[0])} required/>
                <button type='submit' onClick={handleClick}>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default UploadLatestProduct