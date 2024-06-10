import axios from 'axios';
import React from 'react'

import "../../assets/css/Admin/AdminProfile.css"
import { Auth } from '../../Auth';
import Navigation from './Navigation';
function AdminProfile() {
  Auth()
  return (
    <div className='adminProfile'>
      <div className="container">
       <h1 className='admin-header'>Admin Pannel</h1>

       <Navigation></Navigation>


       
      </div>
    </div>
  )
}

export default AdminProfile