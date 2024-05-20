import React from 'react'
import sk from "../assets/sk.jpg"
import sign from "../assets/sign.png"
import "./About.css"

export default function About() {
  return (
    
    <div className='main'>
      <h1>Folio.</h1>

      <div className='about'>
        <img className='about-1' src={sk}>
        </img>
      </div>


      <div className='about-2'>
        <h1>
          SANJAY KUMAR S
        </h1>
        <p>UX Designer based in New York, USA. I am designing <br />with a minimal and beautiful design in mind.</p><br />
        <p>I strive for a minimal and beautiful design.</p>

        <p>Email me at</p>
        <a href="" className='about-1-1'>sanjay@gmail.com</a>


        <div>
        <img className='sign' src={sign}></img>
        </div>



        <div className='about-3'>
          <h4>
            SANJAY KUMAR S
          </h4>
          <p className='about-p'>
            Founder of Folio Digital
          </p>

        </div>

        <div className='foter'>
          <h5 className='foter-h'> DRIBBLE</h5>
          <h5  className='foter-h'>TWITTER</h5>
          <h5  className='foter-h'>FACEBOOK</h5>
          <h5  className='foter-h'>INSTAGRAM</h5>
        </div>


      
      </div>



    </div>

    
  )
}
