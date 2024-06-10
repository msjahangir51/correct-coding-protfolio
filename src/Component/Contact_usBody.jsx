import React,{useState,useRef} from 'react'

import "../assets/css/Contact_usBody..css";
import axios from 'axios';
import SMS_send from './SMS_send';


function Contact_usBody() {
    let [SUCCESS, SetSUCCESS] = useState(false) 
    const [name, SetName] = useState("") 
    const [email, SetEmail] = useState("") 
    const [message, SetMessage] = useState("") 

    const handleSubpit = (e)=>{
      e.preventDefault()
      axios.post("https://correct-coding-protfolio-backend.onrender.com/post/message",{
        name: name,
        email:email,
        message: message
      }).then(()=>{
        SetName("");
        SetEmail("")
        SetMessage("")
        SetSUCCESS(true)
      }).catch((err)=>{
        console.log(err.message)
      })
    } 
  
  return (
    <div className="contactus">
        <h1 className='Contactus_heading'>Contact <span>us</span></h1>
      

      <form>
        <input type="text" name="user_name" value={name} onChange={(e)=> SetName(e.target.value)} placeholder='Enter Your Name' required/>
        <input type="email" name="user_email" value={email} onChange={(e)=> SetEmail(e.target.value)} placeholder='Enter Your Email Address' required />
        <textarea name="message" value={message} onChange={(e)=> SetMessage(e.target.value)} placeholder='Enter Your Message' required/>
        <input type="submit" onClick={handleSubpit}  className='SubmitBTN' value="Send" />
      </form>


<SMS_send complate={SUCCESS}/>
    </div>
  )
}

export default Contact_usBody