"use client"
import React, {useState} from 'react';
import { ThemeProvider, useTheme } from '../ThemeContext';
import { IoPersonCircle } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { Wrapper } from '@/Component/Header/styles';
import { NavBar } from '@/Component/Nav/styles';
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import Link from 'next/link';
import { FaTwitter, FaSlack, FaGithub, FaDribbble  } from "react-icons/fa";
import { Content } from '@/Component/Footer/styles';
import Image from 'next/image';
import { Fade } from 'react-swift-reveal/index';

const Page = () => {
    const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode=() => {
    setDarkMode((prev) => !prev);
  };

    return (
        <Fade duration={500} distance='30px' delay={500} >
        <Wrapper style={{background:darkMode? "#031529":"#EBF4F6",  color:darkMode? '#ffff': "#020A13"}}>
            <NavBar style={{background:darkMode? "#020A13":"#EBF4F6", color:darkMode? '#ffff': "#171F38"}} >  
            <div className='NavBar__link' >
                <Link className='links' href="/contact">Contact Me</Link>
                <Link className='links' href="/project">Projects</Link>
                <Link className='links' href="/process">Process</Link>
                <Link className='links' href="/about">About Me</Link> 
            </div>
            <div>
                <div className='NavBar__btn'>
                <Link className='NavBar__btn--btn' href="#">Download Resume</Link>
                <buton className='btn' onClick={toggleDarkMode}> <WiMoonAltFirstQuarter/> </buton>
                {/* <buton className='btn' > <WiMoonAltFirstQuarter/> </buton> */}
                </div>
            </div>
        </NavBar>
            <div className='header__work' style={{background:darkMode? "#031529":"#EBF4F6",  color:darkMode? '#ffff': "#020A13"}}>
            <h1 className='header__bring__head' style={{  color:darkMode? '#ffff': "#020A13"}}>Want to work with me?</h1>
                <p className='header__bring__txt' style={{  color:darkMode? '#ffff': "#020A13"}}>Cool! Let’s talk about your project</p>
                <form>
                    <div className='form-box'>
                    <label>Your Name</label>
                    <div className='form-icon'>
                        <div className='icons' style={{ color:darkMode? '#000': "#020A13"}}> <IoPersonCircle className='icon' /></div>
                       
                    <input type='text' className='input' placeholder='e.g. Bonnie Green' style={{background:darkMode? "#ffff":"#ffff" , color:darkMode? '#020A13': "#020A13"}} />
                    </div>
                    </div>
                    <div className='form-box'>
                    <label>Your Email</label>
                    <div className='form-icon'>
                        <div className='icons' style={{ color:darkMode? '#000': "#020A13"}} ><IoIosMail className='icon'/></div>
                        
                    <input type='text' className='input' placeholder='example@company.com' style={{background:darkMode? "#ffff":"#ffff" , color:darkMode? '#020A13': "#020A13"}} />
                    </div>
                    </div>

                    <div className='form-box'>
                    <label>Your Message</label>
                    <div className='form-icon'>
                        
                    <textarea className='' placeholder='Your message' style={{background:darkMode? "#ffff":"#ffff", color:darkMode? '#020A13': "#020A13"}} />
                    </div>
                    </div>
                    <button className='send__btn'> Send message</button>
               
                </form>
            </div>
            <Content>
            <div className='footer' >
            {/* <div className='footer' > */}
                <div className='footer__box' >
                    <Image src='/logo.png' className='footer__logo' alt='footer-logo' width={35} height={35} />
                    <p className='footer__txt'>Contact Us for your premium design and we will help you prototype and design beautiful, creative and modern websites.</p>
                    <div className='footer__icon'>
                    <Link className='links' href="#"> <FaTwitter/></Link>
                    <Link className='links' href="#"><FaGithub/></Link>
                    <Link className='links' href="#">  <FaDribbble /></Link>
                    <Link className='links' href="#"><FaSlack/></Link> 
                    </div>
                </div>
                <div className='footer__link'>
                    <h3 className='footer__link-head'>Dope UX</h3>
                    <Link href='/project' >Project</Link>
                    <Link href='/process' >Process</Link>
                    <Link href='/about' >About Us</Link>
                    <Link href='/contact' >Contact Us</Link>
                </div>
                <div className='footer__box'>
                <h3 className='footer__link-head'>Dope UX</h3>
                <p className='footer__txt'>Join our mailing list. We write rarely, but only the best content.</p>
                <form>
                    <label>Email address</label>
                    <input type='txt' placeholder="example@company.com" />
                    <button>Subscribe</button>
                </form>
                </div>
            </div>
            <p className='footer__copyRight'>Copyright © Dope UX 2019-2023. All rights reserved.</p>
           <div className='footer__white' style={{background:darkMode? "#031529":"#ffff"}}>

           </div>
        </Content>
            
        </Wrapper>
        </Fade>
      
    );
}

export default Page;
