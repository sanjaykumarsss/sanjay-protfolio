import React from 'react'
import "./navbar.css"
import sanjay from "../assets/sanjay.jpg"
import aerrow from "../assets/aerrow.jpeg"
import Rawdata from '../Rawdata'
import { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { BiSolidMessageRounded } from "react-icons/bi";
import { Link } from 'react-router-dom'
import About from './About'



export default function Navbar() {

  const [ishover, setishover] = useState(false);




  const handlemouseEnter = (id) => {

    setishover(id);


  };
  const [allshow, setallshow] = useState(true)
  const [brand, setbrand] = useState(false)
  const [UXDesign, setUXDesign] = useState(false)
  const [photo, setphoto] = useState(false)


  const handleall = () => {
    setallshow(true)
    setbrand(false)
    setUXDesign(false)
    setphoto(false)
  }
  const handlebrand = () => {
    setbrand(true)
    setallshow(false)
    setUXDesign(false)
    setphoto(false)
  }
  const handleUXD = () => {
    setUXDesign(true)
    setbrand(false)
    setallshow(false)
    setphoto(false)

  }
  const handlephoto = () => {
    setUXDesign(false)
    setbrand(false)
    setallshow(false)
    setphoto(true)

  }
  return (

    <>
      <div className='body'>

        <b className='span'>folio.</b>
        <div className='container'>
          <ul className='container-1'>
            <li className='container-2'><b>creative demos</b> <div class="dropdown">

  
</div></li>
            <li className='container-2'><b>pages</b></li>
            <li className='container-2' ><b>  <Link className='about' to={'/About'}>about me</Link> </b></li>
            <li className='container-2'><b> <Link className='contect' to={'/Form'}>contect</Link></b></li>
            <li className='container-2'><b>support</b></li>
          </ul>
        </div>
      </div>

      <div className='container-3 '>
        <div className='container-3-1'>
          <h5>Hii</h5>
          <h5>I Am Sanjay</h5>
          <h5 >lisener, software designer, Traveler</h5>
        </div>
        <div className='container-3-2'>
          <b className='container-3-3'>I design digital</b><br />
          <b className='container-3-3'>crafts for clients.</b>



          <div>
            <img className='react-img' src={sanjay} alt="sanjay" />

          </div>

          <div className='contanier-4'>

            <button className='explore'>EXPlORE WORKS <FaArrowRight />  </button>
          </div>

        </div>
      </div>


      <div>
        <br />  <br />  <br />



        <div className='container'>
          <div className='row'>


          </div>

        </div>

        <div className='row'>
          <div className='col img'>
            <div onClick={handleall}> ALL WORKS</div>
            <div onClick={handlebrand}> BRANDING</div>
            <div onClick={handleUXD}> UX DESIGN</div>
            <div onClick={handlephoto}> PHOTOGRAPHY</div>

          </div>
        </div>




        {brand &&
          <div className='row'>
            <div className='col-6 '>
              <div className='container'>
                <div className='row'>

                  <div className='col-6 mt-5'>
                    <div className='card'>


                      <img onMouseEnter={() => handlemouseEnter('B')} className="img-fluid" id='B' src='src/assets/can.jpg' />
                      {ishover === "B" && (<div className='hover-content'> <h6>UX DESIGN</h6><a href="">manali </a></div>)}


                    </div>


                  </div>
                  <div className='col-6 mt-5'>
                    <div className='card'>


                      <img onMouseEnter={() => handlemouseEnter('C')} className="img-fluid" id='C' src='src/assets/ice.jpg' />
                      {ishover === "C" && (<div className='hover-content'> <h6>Potography</h6><a href="">goa</a></div>)}
                    </div>

                  </div>
                  <div className='col-6 mt-5'>
                    <div className='card'>


                      <img onMouseEnter={() => handlemouseEnter('D')} className="img-fluid" id='D' src='src/assets/shoses.jpg' />
                      {ishover === "D" && (<div className='hover-content'> <h6>BRANDING</h6><a href="">kerala</a></div>)}
                    </div>

                  </div>
                  <div className='col-6 mt-5'>
                    <div className='card'>


                      <img onMouseEnter={() => handlemouseEnter('E')} className="img-fluid" id='E' src='src/assets/cam1.jpg' />
                      {ishover === "E" && (<div className='hover-content'> <h6>UX Design</h6> <a href="">ladakh</a></div>)}
                    </div>

                  </div>


                </div>

              </div>

            </div>




            <div className='col-6 '>
              <div className='container'>
                <div className='row'>
                  <div className='col-6 mt-5'>
                    <div className='card'>


                      <img onMouseEnter={() => handlemouseEnter("F")} className="img-fluid" id='F' src='src/assets/coffe.jpg' />
                      {ishover === "F" && (<div className='hover-content'> <h6>PHOTOGRAPHY</h6><a href="">foodie</a></div>)}
                    </div>

                  </div>
                  <div className='col-6 mt-5'>
                    <div className='card'>


                      <img onMouseEnter={() => handlemouseEnter("G")} className="img-fluid" id='G' src='src/assets/cok.jpg' />
                      {ishover === "G" && (<div className='hover-content'> <h6>BRANDING</h6><a href="">drinks</a></div>)}
                    </div>


                  </div>
                  <div className='col-6 mt-5'>
                    <div className='card'>


                      <img onMouseEnter={() => handlemouseEnter("H")} className="img-fluid" id='H' src='src/assets/leaf.jpg' />
                      {ishover === "H" && (<div className='hover-content'> <h6>UX design</h6><a href="">plants</a></div>)}
                    </div>

                  </div>
                  <div className='col-6 mt-5'>
                    <div className='card'>


                      <img onMouseEnter={() => handlemouseEnter("I")} className="img-fluid" id='I' src='src/assets/noodels.jpg' />
                      {ishover === "I" && (<div className='hover-content'> <h6>Potography</h6><a href="">wounderlaw</a></div>)}
                    </div>

                  </div>
                  <div className='col-6 mt-5'>
                    <div className='card'>


                      <img onMouseEnter={() => handlemouseEnter("J")} className="img-fluid" id='J' src='src/assets/flim.jpg' />
                      {ishover === 'J' && (<div className='hover-content'> <h6>UX DESIGN</h6><a href="">fucking film</a></div>)}
                    </div>

                  </div>


                </div>

              </div>

            </div>

          </div>}
        {allshow &&
          <div className='row'>
            <div className='col-6 '>
              <div className='container'>
                <div className='row'>
                  <div className='col-6 mt-5'>
                    <div className='card'>


                      <img onMouseEnter={() => handlemouseEnter('A')} className="img-fluid" id='A' src='src/assets/cam.jpg' />
                      {ishover === 'A' && (<div className='hover-content'> <h6>BRANDING</h6><a href="">travel app</a></div>)}

                    </div>

                  </div>
                  <div className='col-6 mt-5'>
                    <div className='card'>


                      <img onMouseEnter={() => handlemouseEnter('B')} className="img-fluid" id='B' src='src/assets/can.jpg' />
                      {ishover === "B" && (<div className='hover-content'> <h6>UX DESIGN</h6><a href="">manali </a></div>)}


                    </div>


                  </div>
                  <div className='col-6 mt-5'>
                    <div className='card'>


                      <img onMouseEnter={() => handlemouseEnter('C')} className="img-fluid" id='C' src='src/assets/cam1.jpg' />
                      {ishover === "C" && (<div className='hover-content'> <h6>Potography</h6><a href="">goa</a></div>)}
                    </div>

                  </div>
                  <div className='col-6 mt-5'>
                    <div className='card'>


                      <img onMouseEnter={() => handlemouseEnter('D')} className="img-fluid" id='D' src='src/assets/shoses.jpg' />
                      {ishover === "D" && (<div className='hover-content'> <h6>BRANDING</h6><a href="">kerala</a></div>)}
                    </div>

                  </div>
                  <div className='col-6 mt-5'>
                    <div className='card'>


                      <img onMouseEnter={() => handlemouseEnter('E')} className="img-fluid" id='E' src='src/assets/ice.jpg' />
                      {ishover === "E" && (<div className='hover-content'> <h6>UX Design</h6> <a href="">ladakh</a></div>)}
                    </div>

                  </div>


                </div>

              </div>

            </div>




            <div className='col-6 '>
              <div className='container'>
                <div className='row'>
                  <div className='col-6 mt-5'>
                    <div className='card'>


                      <img onMouseEnter={() => handlemouseEnter("F")} className="img-fluid" id='F' src='src/assets/coffe.jpg' />
                      {ishover === "F" && (<div className='hover-content'> <h6>PHOTOGRAPHY</h6><a href="">foodie</a></div>)}
                    </div>

                  </div>
                  <div className='col-6 mt-5'>
                    <div className='card'>


                      <img onMouseEnter={() => handlemouseEnter("G")} className="img-fluid" id='G' src='src/assets/cok.jpg' />
                      {ishover === "G" && (<div className='hover-content'> <h6>BRANDING</h6><a href="">drinks</a></div>)}
                    </div>


                  </div>
                  <div className='col-6 mt-5'>
                    <div className='card'>


                      <img onMouseEnter={() => handlemouseEnter("H")} className="img-fluid" id='H' src='src/assets/leaf.jpg' />
                      {ishover === "H" && (<div className='hover-content'> <h6>UX design</h6><a href="">plants</a></div>)}
                    </div>

                  </div>
                  <div className='col-6 mt-5'>
                    <div className='card'>


                      <img onMouseEnter={() => handlemouseEnter("I")} className="img-fluid" id='I' src='src/assets/noodels.jpg' />
                      {ishover === "I" && (<div className='hover-content'> <h6>Potography</h6><a href="">wounderlaw</a></div>)}
                    </div>

                  </div>
                  <div className='col-6 mt-5'>
                    <div className='card'>


                      <img onMouseEnter={() => handlemouseEnter("J")} className="img-fluid" id='J' src='src/assets/flim.jpg' />
                      {ishover === 'J' && (<div className='hover-content'> <h6>UX DESIGN</h6><a href="">fucking film</a></div>)}
                    </div>

                  </div>


                </div>

              </div>

            </div>

          </div>}


        {UXDesign &&
          <div className='row'>
            <div className='col-6 '>
              <div className='container'>
                <div className='row'>

                  <div className='col-6 mt-5'>
                    <div className='card'>


                      <img onMouseEnter={() => handlemouseEnter('B')} className="img-fluid" id='B' src='src/assets/noodels.jpg' />
                      {ishover === "B" && (<div className='hover-content'> <h6>UX DESIGN</h6><a href="">foodie</a></div>)}


                    </div>


                  </div>
                  <div className='col-6 mt-5'>
                    <div className='card'>


                      <img onMouseEnter={() => handlemouseEnter('C')} className="img-fluid" id='C' src='src/assets/ice.jpg' />
                      {ishover === "C" && (<div className='hover-content'> <h6>Potography</h6><a href="">goa</a></div>)}
                    </div>

                  </div>
                  <div className='col-6 mt-5'>
                    <div className='card'>


                      <img onMouseEnter={() => handlemouseEnter('D')} className="img-fluid" id='D' src='src/assets/shoses.jpg' />
                      {ishover === "D" && (<div className='hover-content'> <h6>BRANDING</h6><a href="">kerala</a></div>)}
                    </div>

                  </div>
                  <div className='col-6 mt-5'>
                    <div className='card'>


                      <img onMouseEnter={() => handlemouseEnter('E')} className="img-fluid" id='E' src='src/assets/cam1.jpg' />
                      {ishover === "E" && (<div className='hover-content'> <h6>UX Design</h6> <a href="">ladakh</a></div>)}
                    </div>

                  </div>


                </div>

              </div>

            </div>




            <div className='col-6 '>
              <div className='container'>
                <div className='row'>
                  <div className='col-6 mt-5'>
                    <div className='card'>


                      <img onMouseEnter={() => handlemouseEnter("F")} className="img-fluid" id='F' src='src/assets/coffe.jpg' />
                      {ishover === "F" && (<div className='hover-content'> <h6>PHOTOGRAPHY</h6><a href="">foodie</a></div>)}
                    </div>

                  </div>
                  <div className='col-6 mt-5'>
                    <div className='card'>


                      <img onMouseEnter={() => handlemouseEnter("G")} className="img-fluid" id='G' src='src/assets/cok.jpg' />
                      {ishover === "G" && (<div className='hover-content'> <h6>BRANDING</h6><a href="">drinks</a></div>)}
                    </div>


                  </div>
                  <div className='col-6 mt-5'>
                    <div className='card'>


                      <img onMouseEnter={() => handlemouseEnter("H")} className="img-fluid" id='H' src='src/assets/leaf.jpg' />
                      {ishover === "H" && (<div className='hover-content'> <h6>UX design</h6><a href="">plants</a></div>)}
                    </div>

                  </div>
                  <div className='col-6 mt-5'>
                    <div className='card'>


                      <img onMouseEnter={() => handlemouseEnter("I")} className="img-fluid" id='I' src='src/assets/can.jpg' />
                      {ishover === "I" && (<div className='hover-content'> <h6>Potography</h6><a href="">wounderlaw</a></div>)}
                    </div>

                  </div>
                  <div className='col-6 mt-5'>
                    <div className='card'>


                      <img onMouseEnter={() => handlemouseEnter("J")} className="img-fluid" id='J' src='src/assets/flim.jpg' />
                      {ishover === 'J' && (<div className='hover-content'> <h6>UX DESIGN</h6><a href="">fucking film</a></div>)}
                    </div>

                  </div>


                </div>

              </div>

            </div>

          </div>}


        {/* 
        {PHOTOGRAPHY &&
        <div className='row'>
          <div className='col-6 '>
            <div className='container'>
              <div className='row'>
              
                <div className='col-6 mt-5'>
                  <div className='card'>


                    <img onMouseEnter={() => handlemouseEnter('B')}  className="img-fluid" id='B' src='src/assets/coffe.jpg' />
                    {ishover === "B" && (<div className='hover-content'> <h6>UX DESIGN</h6><a href="">foodie</a></div>)}


                  </div>


                </div>
                <div className='col-6 mt-5'>
                  <div className='card'>


                    <img onMouseEnter={() => handlemouseEnter('C')}  className="img-fluid" id='C' src='src/assets/ice.jpg' />
                    {ishover === "C" && (<div className='hover-content'> <h6>Potography</h6><a href="">goa</a></div>)}
                  </div>

                </div>
                <div className='col-6 mt-5'>
                  <div className='card'>


                    <img onMouseEnter={() => handlemouseEnter('D')} className="img-fluid" id='D' src='src/assets/shoses.jpg' />
                    {ishover === "D" && (<div className='hover-content'> <h6>BRANDING</h6><a href="">kerala</a></div>)}
                  </div>

                </div>
                <div className='col-6 mt-5'>
                  <div className='card'>


                    <img onMouseEnter={() => handlemouseEnter('E')}className="img-fluid" id='E' src='src/assets/cam1.jpg' />
                    {ishover === "E" && (<div className='hover-content'> <h6>UX Design</h6> <a href="">ladakh</a></div>)}
                  </div>

                </div>


              </div>

            </div>

          </div>




          <div className='col-6 '>
            <div className='container'>
              <div className='row'>
                <div className='col-6 mt-5'>
                  <div className='card'>


                    <img onMouseEnter={() => handlemouseEnter("F")} className="img-fluid" id='F' src='src/assets/noodels.jpg' />
                    {ishover === "F" && (<div className='hover-content'> <h6>PHOTOGRAPHY</h6><a href="">foodie</a></div>)}
                  </div>

                </div>
                <div className='col-6 mt-5'>
                  <div className='card'>


                    <img onMouseEnter={() => handlemouseEnter("G")} className="img-fluid" id='G' src='src/assets/cok.jpg' />
                    {ishover === "G" && (<div className='hover-content'> <h6>BRANDING</h6><a href="">drinks</a></div>)}
                  </div>


                </div>
                <div className='col-6 mt-5'>
                  <div className='card'>


                    <img onMouseEnter={() => handlemouseEnter("H")}  className="img-fluid" id='H' src='src/assets/leaf.jpg' />
                    {ishover === "H" && (<div className='hover-content'> <h6>UX design</h6><a href="">plants</a></div>)}
                  </div>

                </div>
                <div className='col-6 mt-5'>
                  <div className='card'>


                    <img onMouseEnter={() => handlemouseEnter("I")}  className="img-fluid" id='I' src='src/assets/can.jpg' />
                    {ishover === "I" && (<div className='hover-content'> <h6>Potography</h6><a href="">wounderlaw</a></div>)}
                  </div>

                </div>
                <div className='col-6 mt-5'>
                  <div className='card'>


                    <img onMouseEnter={() => handlemouseEnter("J")}  className="img-fluid" id='J' src='src/assets/flim.jpg' />
                    {ishover === 'J' && (<div className='hover-content'> <h6>UX DESIGN</h6><a href="">fucking film</a></div>)}
                  </div>

                </div>


              </div>

            </div>

          </div>

        </div>} */}




        {/* <div>
          <div className="row">
            {Rawdata.map((item, index) => (
              <div key={index} className="col-md-4 hover">
                <img onMouseEnter={handlemouseEnter} onMouseLeave={handleMouseLeave} className="img-fluid" src={item.img} alt={`Image ${index + 1}`} />
                {ishover && (<div className='hover-content'> sanjay</div>)}
              </div>
            ))}
          </div>
        </div>  */}


      </div>

      <div className='container-5'>
        <h5 className='container-5-1'>
          AVAILABLE FOR FREELANCE PROJECTS
        </h5>
        <h1 className='container-5-2'>
          Do you have illustration  </h1>
        <h1 className='container-5-3'>project? Let's talk.  </h1>


      </div>

      <div>
        <button className='select'>
          <a className='anchor' href='http://localhost:5173/'> <BiSolidMessageRounded /><Link to={'/Form'}>Let's Talk Now</Link> </a>
        </button>
      </div>

      <div className='footer'>
        © 2020 ALL RIGHT RESEVED
      </div>
    </>

  )
}










