import React from 'react'
import "./navbar.css"
import { FaArrowRight } from "react-icons/fa";

export default function Form() {
  return (
    < div className='container-body'>
      <div>
        <h1>Folio.</h1>
      </div>
      <div className='container-fulid'>
        <h1 className='container-fulid-1'>Contact now</h1>
        <p >Have a project or question? Send me a message.<br /> I will reply within 48 hours.</p>

      </div>

      <div className='container-input'>
        <input placeholder='Enter name' className='abc' /><br /> <br />

        <input placeholder='Enter Email' className='abc' /><br /> <br />

        <input placeholder='Enter Age' className='abc' /><br /> <br />

        <input placeholder='Write Your Message' className='abc' />

      </div>


      <button class="btn btn-primary" type="button" className='container-button'>Send <FaArrowRight /></button>

      <div className='box'>
        <div className='box-1'>
         <h3 className='box-1-1'>  Email me at</h3> <br/>
         
        

          <h2 className='box-2-2'>Call me at</h2>
          </div>
          
       
        
        
       
      </div>

    </div>


  )
}
