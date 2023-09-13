import React from 'react'

//import{FaPhoneSquareAlt,FaTwitter,FaInstagram,FaLinkedinIn,FiMail,} from 'react-icons/fa'
  
  
  import {  FiSend } from 'react-icons/fi'
  import Example from "../../components/floatingphone"
  import './contact.css'
  

const Contact = () => {
  return (
    <section className="contact section">
        <h2 className="section_title">
            Get In <span>Touch</span>
        </h2>

    <div className="contact_container container grid">
      <div className="container_data">
        <h3 className="contact_title">
          Come Say Hello !
        </h3>

        <p className="contact_description">
          Feel free to get in touch with us. We are always open to discuss
           our future.
        </p>

        <Example/>
      </div>

      <form className="contact_form">

        <div className="form_input-group">
          <div className="form_input-div">
            <input type="text" placeholder='Your Name' className="form_control" />
          </div>
          <div className="form_input-div">
            <input type="email" placeholder='Email' className="form_control" />
          </div>

          <div className="form_input-div">
            <input type="text" placeholder='Subject' className="form_control" />
          </div>
        </div>

        <div className="form_input-div">
        <textarea placeholder='Message' className="form_control textarea"></textarea>
        </div>

        <div className="button contact_button">
          Send 
          <span className="button_icon contact_button-icon">
            <FiSend className='icon'/>
          </span>
        </div>
      </form>
    </div>
    
    </section>
  )
}

export default Contact

/* 
    <svg
        width="50"
        height="39"
        viewBox="0 0 50 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-violet-500"
        >
        <path
            d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
            stopColor="#000000"
        ></path>
        <path
            d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
            stopColor="#000000"
        ></path>
    </svg>
*/

/*
<div className="contact_info">
          <div className="info_item"> 
          
          <FiMail className='info_icon'/> 
          
            <div>
              <span className="info_title">Mail Us</span>
              <h4 className="info_desc">abdcxyz@gmail.com</h4>
            </div>
          </div>

        

            <div className="info_item"> 
            <FaPhoneSquareAlt className='info_icon'/> 


            <div>
              <span className="info_title">Call Us</span>
              <h4 className="info_desc">+2547-1234-5678</h4>
            </div>

          </div>
        </div>


        <div className="contact_socials">
        
        <a href="www.twitter.com" className="contact_social-link"> <FaTwitter className='Icon'/> </a>
        <a href="www.instagram.com" className="contact_social-link"> <FaInstagram className='Icon'/> </a>
        <a href="www.linkedin.com" className="contact_social-link"> <FaLinkedinIn  className='Icon'/> </a>
        </div>
*/