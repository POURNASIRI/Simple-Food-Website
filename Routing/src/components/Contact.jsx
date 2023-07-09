import React from 'react'
import img from "./image/pexels-photo-751047.webp"
import './Contact.css'

export default function Contact() {

  const handelsubmit = (e) =>{
      e.preventDefault()
  }
  return (
    <div className='contact__wrapper'>
      <div className='contact__image'>
        <img src={img} alt="" />
      </div>
      <div className='contact__form'>
        <h1 className='form__title'>Contact Us</h1>
        <form action="" onSubmit={handelsubmit}>
          <input type="email" placeholder='Enter your email address' />
          <textarea  placeholder='write your message'></textarea>
            <button type='submit' className='form__btn'>Send</button>
        </form>
      </div>

    </div>
  )
}
