import React from 'react'
import gpt3Logo from '../../assets/logo.svg'
import './footer.css'
const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step into the future before others?</h1>
      </div>

      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links__logo'>
          <img src={gpt3Logo} alt="logo" />
          <p>Teiman-Oyarifa TM124/1 All rights reserved</p>
        </div>
        <div className='gpt3__footer-links__div'>
          <h4>Links</h4>
          <p>Oerons</p>
          <p>Social Media</p>
          <p>Counter</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links__div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Counter</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links__div'>
          <h4>Get In Touch</h4>
          <p>Teiman-Oyarifa TM124/1</p>
          <p>055-50-0055</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>2022 GPT-3. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer