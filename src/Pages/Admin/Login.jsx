import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../../assets/css/Admin/uploadsLatestProjects.css"
import axios from 'axios';

function Login() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin =(e)=>{
      e.preventDefault()
      alert("hey world")
      axios.post("https://correct-coding-protfolio-backend.onrender.com/post/login",{
        username:username,
        password:password
      }).then((user)=>{
        localStorage.setItem("token",user.data.token)
        navigate("/admin")
      }).catch(()=>{
        navigate("/login")
      })
    }
  return (
         <div className='UploadLatestProduct'>
        <div className="LatestProduct">
            <form>
            <h1>User Login</h1>
                <input type="text" placeholder='enter your name' value={username} onChange={(e)=> setUsername(e.target.value)} required/>
                <input type="text" placeholder='enter your name' value={password} onChange={(e)=> setPassword(e.target.value)} required/>
                <button onClick={handleLogin}>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Login