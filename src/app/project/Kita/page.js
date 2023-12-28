"use client"
import React, {useState} from 'react';
import { Wrapper } from '../../../Component/Header/styles';
import {Content} from './styles'
import Nav from '../../../Component/Nav/Index'
import Link from 'next/link';
import Image from 'next/image';
import {Fade} from 'react-swift-reveal'
import { FaBehance } from "react-icons/fa";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { NavBar } from '@/Component/Nav/styles';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';


const Index = () => {
    const [darkMode, setDarkMode] = useState(false);
   
    const toggleDarkMode=() => {
      setDarkMode((prev) => !prev);
    };
    const toggleMenu=()=>{

    }

    return (
        <Fade duration={500} distance='30px' delay={500} >
        <Wrapper style={{background:darkMode? "#1C2540":"#fff", color:darkMode? '#ffff': "#171F38"}}>
        <NavBar style={{background:darkMode? "#1C2540":"#EBF4F6", color:darkMode? '#ffff': "#171F38"}} >  
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
                <buton className='btn btn-menu' onClick={toggleMenu}>  <HiOutlineMenuAlt4 className='menu'/> </buton>
                {/* <buton className='btn' > <WiMoonAltFirstQuarter/> </buton> */}
                </div>
            </div>
        </NavBar>
            <div className='header__ux my-16 'style={{background:darkMode? "#1C2540":"#EBF4F6", color:darkMode? '#ffff': "#171F38"}} >
            <h1 className='header__ux__head '>Latest Project </h1>
                <p className='header__ux__txt'>And if it’s not listed here, I learn incredibly quickly</p>
                <div className='container '>
                   <div className='box !bg-white'>
                        <Image src='/ux-prj-1.png' className='img' width={450} height={250} alt='img' />
                        <p className='title'>Nester Verify</p>
                        <p className='txt'>Website · UI/UX Design</p>
                    </div>
                    <div className='box !bg-white'>
                        <Image src='/ux-prj-2.png' className='img' width={450} height={250} alt='img' />
                        <p className='title'>Kita Folk </p>
                        <p className='txt'>Web Application - UI/UX Design/ Branding</p>
                    </div>
                    <div className='box !bg-white'>
                        <Image src='/ux-prj-3.png' className='img' width={450} height={250} alt='img'/>
                        <p className='title'>Farmhub360</p>
                        <p className='txt'>Website · UI/UX Design/ Pitchdeck/ Branding</p>
                    </div>
                    
                </div>
                </div>
            <Content>
                <div className='head'>
                    <div>
                        <Link href='/project'>
                        <p className='link'>Latest Project</p>
                        </Link>
                    </div>
                    <div>
                    <Link href='/project'>
                        <p className='link'>Back to Project</p>
                        </Link>
                    </div>
                    
                </div>
                <div className='image'>
                    <Image src='/nexter.png' alt='img' width={740} height={992} />
                </div>
                <article className='cont'>
                    <h1>Kita Folk</h1>
                    <p>I am a passionate and dedicated product designer with a keen eye for detail and the ability to craft extraordinary user experiences. With years of experience in the industry, I have honed my skills to create designs that meet client&apos;s needs and exceed their expectations.</p>
                    <div className='line'></div>
                </article>
                <article className='cont'>
                    <h2>Design Tools</h2>
                    <div className='icon'>
                        <Image src='/figma.png' width={50} height={50} alt='icon' />
                        <Image src='/ps.png' width={80} height={50} alt='icon' />
                        <Image src='/ai.png' width={50} height={50} alt='icon' />
                    </div>
                    
                </article>
                <article className='cont'>
                    <h2>Position </h2>
                    <div className='box'>
                        <p>Main designer</p>
                    </div>
                    <div className='line-1'></div>
                    
                </article>
                <article className='cont'>
                    <h2>Position </h2>
                    <div className='box'>
                        <p></p>
                    </div>
                    
                </article>
                <section className='btn--box'>
                    <Link href='#' className='btn btn-color'>
                    <FaBehance className='icon' />
                    <span>Case Study</span> 
                    </Link>
                    <Link href='#' className='btn btn-white'>
                        <p>   Open Project</p>
                
                    </Link>

                </section>

            </Content>
        </Wrapper>
        </Fade>
    );
}

export default Index;
