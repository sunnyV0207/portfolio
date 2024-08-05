import React from 'react';
import "./Work.css";

const Work = () => {
  return (
    <>
        <section className='work'>
            <h2 className='heading'>What I do</h2>
            <div className='para'>I am a frontend developer and builds responsive user interface for the websites, apps, games etc. with the required logic. I am also learning Backend Development and hope to become a Full Stack Devloper soon.<br />I work for my client as the Freelancer also.</div>
            <div className="skillsbar">
                <div className="skillbar">
                    <img src='src/assets/ui.jpg' className='skillimg'/>
                    <div className="skill">
                        <h3 className='title'>UI Design</h3>
                        <p className='desc'>I builds responsive user interface for the websites and games.</p>
                    </div>
                </div>
                <div className="skillbar">
                    <img src='src/assets/web.avif' className='skillimg'/>
                    <div className="skill">
                        <h3 className='title'>Web Design</h3>
                        <p className='desc'>I builds web pages according to the requirement.</p>
                    </div>
                </div>
                <div className="skillbar">
                    <img src='src/assets/app.webp' className='skillimg'/>
                    <div className="skill">
                        <h3 className='title'>App Design</h3>
                        <p className='desc'>I also design different types of applications.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Work