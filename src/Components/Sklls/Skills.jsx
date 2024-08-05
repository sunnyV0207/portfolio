import React from 'react'
import "./Skills.css"

const Skills = () => {
  return (
    <section className="skills">
        <div className="skillsec">
            <div className="heading">
                <h2>Professional Skills</h2>
            </div>
            <div className="skillbar">
                <div className="progress-cont">
                    <div className="skillName">
                        <span>Html</span>
                        <span>95%</span>
                    </div>
                    <div className="progressbar">
                        <div className="left1"></div>
                        <div className="right1"></div>
                    </div>
                </div>
                <div className="progress-cont">
                    <div className="skillName">
                        <span>Css</span>
                        <span>90%</span>
                    </div>
                    <div className="progressbar">
                        <div className="left2"></div>
                        <div className="right2"></div>
                    </div>
                </div>
                <div className="progress-cont">
                    <div className="skillName">
                        <span>JavaScript</span>
                        <span>80%</span>
                    </div>
                    <div className="progressbar">
                        <div className="left3"></div>
                        <div className="right3"></div>
                    </div>
                </div>
                <div className="progress-cont">
                    <div className="skillName">
                        <span>NodeJs</span>
                        <span>70%</span>
                    </div>
                    <div className="progressbar">
                        <div className="left4"></div>
                        <div className="right4"></div>
                    </div>
                </div>
                <div className="progress-cont">
                    <div className="skillName">
                        <span>C++</span>
                        <span>85%</span>
                    </div>
                    <div className="progressbar">
                        <div className="left5"></div>
                        <div className="right5"></div>
                    </div>
                </div>
                <div className="progress-cont">
                    <div className="skillName">
                        <span>React</span>
                        <span>70%</span>
                    </div>
                    <div className="progressbar">
                        <div className="left6"></div>
                        <div className="right6"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills