import React from 'react'
import "./Intro.css"
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section className="intro">
      <div className="introSec">
        <div className="left">
            <p className='hello'>Hello,</p>
            <h1 className='nameSec'>I'm <span className='name'>Sunny</span></h1>
            <h1 className='profession'>Frontend Developer</h1>
            <p className='aboutMe'>A skilled frontend developer proficient in HTML, CSS, and Bootstrap creates visually appealing and responsive web designs. With expertise in JavaScript and React, I build dynamic and interactive user interfaces. Additionally, my knowledge of Data Structures and Algorithms (DSA) in programming language C++ equips me with strong problem-solving skills and efficient coding practices. This combination of front-end development tools and algorithmic understanding enables me to develop both user-friendly and technically robust web applications.</p>
            {/* <button className='btn'>Hire me</button> */}
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}><button className='btn'>Hire me</button></Link>
        </div>
        <div className="right">
            <div className="imageSec">
                <img src="public/assets/sunny.jpg" alt="myImage" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Intro