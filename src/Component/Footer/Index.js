import { Content } from './styles';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { FaTwitter, FaSlack, FaGithub, FaDribbble  } from "react-icons/fa";
import { ThemeProvider, useTheme } from '../../app/ThemeContext';


const Index = () => {
   const {darkMode} =useTheme()
    return (
        <ThemeProvider>
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
                    <Link href='/' >Home</Link>
                    <Link href='/project' >Project</Link>
                    <Link href='/process' >Process</Link>
                    <Link href='/about' >About Us</Link>
                    <Link href='/contact' >Contact Us</Link>
                </div>
                <div className='footer__box'>
                <h3 className='footer__link-head'>Subscribe</h3>
                <p className='footer__txt'>Join our mailing list. We write rarely, but only the best content.</p>
                <form>
                    <label>Email address</label>
                    <input type='txt' placeholder="example@company.com" />
                    <button>Subscribe</button>
                    <p className='footer__privacy'>We’ll never share your details. <span>See our Privacy Policy</span> </p>
                </form>
                </div>
            </div>
            <p className='footer__copyRight'>Copyright © Dope UX 2019-2023. All rights reserved.</p>
           <div className='footer__white' style={{background:darkMode? "#031529":"#ffff"}}>

           </div>
        </Content>
        </ThemeProvider>
    );
}

export default Index;