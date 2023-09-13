import React from 'react'
import Profile from '../../assets/nami 1.jpg'
import WaterDropGrid from '../../components/waterdrop';
//import Popup from "../../components/popup"
import { FaArrowRight } from 'react-icons/fa'
import './home.css'
//import { Link } from 'react-router-dom'

const home = () => {
  return (
        <section className="home section Grid">
          <img src={Profile} alt='' className='home_img'/>

          <div className="home_content">
          <WaterDropGrid/>
            <div className="home_data">
              <h1 className="home_title">
                <span>I'm Neiller Anyango</span> Web Designer $ Graphic designer
              </h1>
              <p className="home_description">
                I'm a Kenyan Based web designer & front-end developer focused on crafting clean,responsive & user-friendly
                experiences, I'm passionate about building excelent software that improves the lives of those around me.
              </p>

              <li to='/about' className='button'>
                  More About Me <span className='button_icon'> <FaArrowRight className='icon'/> </span>
                </li>

                {/*<Popup/>*/}
            </div>
          </div>

         <div className="color_block"></div>
        </section>
    
  )
}

export default home