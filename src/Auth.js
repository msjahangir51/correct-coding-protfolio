import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const Auth =()=>{
    const navigate = useNavigate();
    useEffect(()=>{
        const token = localStorage.getItem("token");
        axios.get("https://correct-coding-protfolio-backend.onrender.com/profile",{
          headers:{
            Authorization: token
          }
        }).catch((err)=>{
          navigate("/login")
        })
      }, [])
}