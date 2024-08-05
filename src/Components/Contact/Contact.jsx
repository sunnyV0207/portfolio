import React from 'react'
import { useState } from 'react';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"

const Contact = () => {

  // function handleClick(){
  //   console.log(this);
  // }

const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(e.target.children[0].value);

    if(e.target.children[0].value===""){
        alert("Please! Add Some Details");
    }else{
        emailjs
      .sendForm('service_wa9fi1g', 'template_mtykh1g', form.current, {
        publicKey: 'Z_J35gZfePkCAGkbY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert("Email sent");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }

    

  };

  return (
    <section className="contact">
        <div className="contactSec">
            <div className="heading">Contact me</div>
            <div className="main">
                <div className="left">
                    <h3>Feel free to contact me</h3>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type='text' placeholder='Name' name='user_name' id='name' />
                        <input type='text' placeholder='Subject' name='subject' id='subject' />
                        <input type='email' placeholder='Email' name='user_email' id='email' />
                        <textarea placeholder='Your message' name='message' id='mssg'></textarea><br />
                        <button type='submit' value='send' onClick={(e)=>{e.target.classList.add("color");console.log(e.target);setTimeout(function(){e.target.classList.remove("color")},300);console.log(e.target)}}>Send</button>
                    </form>
                </div>
                <div className="right">
                        <h3>Address</h3>
                        <p>Street no.5 Shivpuri, Near Raj Chaupla, Pin: 201204, Modinagar(Ghaziabad) Uttar Pradesh</p>
                        <h3>Phone</h3>
                        <p>9027259417</p>
                        <h3>Email</h3>
                        <p>sunnyvermaverma2005@gmail.com</p>
                        <p>anuragvermavrm2003@gmail.com</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact