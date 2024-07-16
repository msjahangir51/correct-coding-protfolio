import React,{useState,useRef} from 'react'

import "../assets/css/Contact_usBody..css";
import axios from 'axios';
import SMS_send from './SMS_send';




function Contact_usBody() {
  const [loading,setLoading] = useState(false)

  let [SUCCESS, SetSUCCESS] = useState(false) 
    const [name, SetName] = useState("") 
    const [email, SetEmail] = useState("") 
    const [message, SetMessage] = useState("") 
    const [nameerr, SetNameerr] = useState(false) 
    const [emailerr, SetEmailerr] = useState(false) 
    const [messageerr, SetMessageerr] = useState(false) 

    const handleSubpit = (e)=>{
      e.preventDefault()
      if(!name) return SetNameerr(true)
      if(!email) return SetEmailerr(true)
      if(!message) return SetMessageerr(true)
      setLoading(true)
      axios.post("https://correct-coding-protfolio-backend.onrender.com/post/message",{
        name: name,
        email:email,
        message: message
      }).then(()=>{
        SetName("");
        SetEmail("")
        SetMessage("")
        SetSUCCESS(true)
        setLoading(false)
      }).catch((err)=>{
        console.log(err.message)
      })
    } 
  
  return (
    <div className="contactus">
        <h1 className='Contactus_heading'>Contact <span>us</span></h1>
      

      <form>
        <input type="text" name="user_name" value={name} onChange={(e)=> SetName(e.target.value)} placeholder='Enter Your Name' className={nameerr? "emptyerr" : ""}/>
        <input type="email" name="user_email" value={email} onChange={(e)=> SetEmail(e.target.value)} placeholder='Enter Your Email Address' className={emailerr? "emptyerr" :""} />
        <textarea name="message" value={message} onChange={(e)=> SetMessage(e.target.value)} placeholder='Enter Your Message' className={messageerr? "emptyerr" : ""}/>
        <input type="submit" onClick={!loading?handleSubpit :""}  className='SubmitBTN' value={loading? "loading" : "SEMD"} />
      </form>


<SMS_send complate={SUCCESS}/>
    </div>
  )
}

export default Contact_usBody