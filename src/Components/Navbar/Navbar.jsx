import React, { useState } from 'react'
import "./Navbar.css"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showMenu,setShowMenu] = useState(true);
  const [visi,setVisi] = useState(true);

  return (
    <>
        <nav className='navbar'>
            <h3>Sunny Verma</h3>
            <div className='links'>
                <Link className='link' activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} >Home</Link>
                <Link className='link' activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} >About</Link>
                <Link className='link' activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} >Skills</Link>
                <Link className='link' activeClass='active' to='education' spy={true} smooth={true} offset={-100} duration={500}>Education</Link>
                <Link className='link' activeClass='active' to='work' spy={true} smooth={true} offset={-100} duration={500} >Work</Link>
            </div>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}><button className='navbtn'><img src='/public/assets/message.png' className='btnimg'/>Contact me</button></Link>
            <i className="fa-solid fa-bars mobMenu" onClick={()=>{setShowMenu(!showMenu);setVisi(!visi)}} ></i>
            <div className='menulinks' style={{display: showMenu? 'none' : 'flex',visibility: visi? 'hidden': 'visible'}}>
                <Link className='mlink' activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setShowMenu(false)}>Home</Link>
                <Link className='mlink' activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setShowMenu(false)}>About</Link>
                <Link className='mlink' activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setShowMenu(false)}>Skills</Link>
                <Link className='mlink' activeClass='active' to='education' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setShowMenu(false)}>Education</Link>
                <Link className='mlink' activeClass='active' to='work' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setShowMenu(false)}>Work</Link>
                <Link className='mlink' activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setShowMenu(false)}>Contact me</Link>
        </div>
        </nav>
        
    </>
  )
}

export default Navbar