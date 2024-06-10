import React from 'react'
// import Navbar2 from '../Component/Navbar2'
import Navbar from './../Component/Navbar';
import "../assets/css/Pagenotfound.css"
import Footer from '../Component/Footer';

function PageNotFound() {
  return (
    <div className='pagenotfound'>

        <Navbar/>
        <div className="container">
            <div className='notfoundtext'>
                <h1>404</h1>
                <p>Page not found</p>

            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default PageNotFound