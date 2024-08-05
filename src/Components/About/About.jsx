import React from 'react'
import "./About.css";

const About = () => {
  return (
    <>
        <section className='about'>
            <div className="miniSec">
                <div className="aboutPart">
                    <h2 style={{color:"white"}}>About</h2>
                    <p style={{color:"white"}} className='para1'>As mentioned I am a Frontend Developer with the necesarry professional skills. Instaed of the professional life i have also a personal life in which i owns a lots of hobbies in which Travelling is on my first priority after this I am also fond of cooking and eating delicious vegetarian food. Apart from this, I am from a rural area named Baraut in District Baghpat (U.P), but currently residing in Ghaziabad for my studies.</p>
                    <br /><br />
                    <p style={{color:"white"}} className='para2'>You can hire me through the given contact information</p>
                </div>
                <div className="basicInfo">
                    <div className="heading"><h2 style={{color:"white"}}>Basic Information</h2></div>
                    <div className="row">
                        <div className='span1' style={{color:"white"}}>Age:</div>
                        <div className='span2' style={{color:"white"}}>19</div>
                    </div>
                    <div className="row">
                        <div className="span1" style={{color:"white"}}>Email:</div>
                        <div className="span2" style={{color:"white"}}>sunnyvermaverma2005@gmail.com</div>
                    </div>
                    <div className="row">
                        <div className="span1" style={{color:"white"}}>Phone:</div>
                        <div className="span2" style={{color:"white"}}>9027259417</div>
                    </div>
                    <div className="row">
                        <div className="span1" style={{color:"white"}}>Address:</div>
                        <div className="span2" style={{color:"white"}}>Ghaziabad (U.P)</div>
                    </div>
                    <div className="row">
                        <div className="span1" style={{color:"white"}}>Language:</div>
                        <div className="span2" style={{color:"white"}}>Hindi, English</div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About