import React from 'react'
import "./Education.css";

const Education = () => {
  return (
    <section className='education'>
        <div className="heading"><h2>Education</h2></div>
        <div className="eduSec">
            <div className="left">
                <div className="what">
                    <h1 style={{marginBottom:"1rem"}}>Bachelor of Technology</h1>
                    <h3 style={{marginBottom:"1rem"}}>Computer Science Engineering</h3>
                    <p>(2022 - 2026)</p>
                </div>
            </div>
            <div className="right">
                <div className="headPart">
                    <h2>B.Tech in Computer Science and Engineering</h2>
                    <p className="content">Dr. K.N Modi University Newai (Rajasthan)</p>
                </div>
                <div className="contentPart">
                    <p className='para1'>Currelntly, I am pursuing Bachelor of Technology in Computer Science from Dr. K.N Modi University Newai (Rajsthan), a private university approved by AICTE, UGC that was estabilished in 2010.</p>
                    <p className='para2'>I have completed my senior secondary education in science stream  from the State Board.</p>
                    <p className='para3'>CGPA : 8.9/10</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Education