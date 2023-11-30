"use client"
import React from 'react';
import Footer from '../../Component/Footer/Index';
import Nav from "../../Component/Nav/Index"
import {  Wrapper} from "../../Component/Header/styles";
import Link from 'next/link';
import { FaTwitter, FaSlack, FaGithub, FaDribbble  } from "react-icons/fa";
import Image from 'next/image';

const Index = () => {
  return (
    <Wrapper>
      <Nav/>
      <div className='header'>
            <div className='header__txt'>
                <div className='header__txt__box' >
               <h1>My Projects </h1>
               <p className='txt'>I am a passionate and dedicated product designer with a keen eye for detail and the ability to craft extraordinary user experiences.</p>
               <p className='txt'>With years of experience in the industry, I have honed my skills to create designs that meet client's needs and exceed their expectations.</p>
               <div className='icon'>
               <Link className='links' href="#"> <FaTwitter/></Link>
               <Link className='links' href="#"><FaGithub/></Link>
                <Link className='links' href="#">  <FaDribbble /></Link>
                <Link className='links' href="#"><FaSlack/></Link> 
               </div>
               </div>
               <div>
                <p className='txt-big'>Projects</p>
               </div>
            </div>
            <div className='header__img'>
                <Image src='/photo.png' alt='photos' width={420} height={420} className='photo__1'/>
            </div>
            </div>
            <div className='header__ux my-16 !bg-gray-200'>
            <h1 className='header__ux__head '>Latest Project </h1>
                <p className='header__ux__txt'>And if it’s not listed here, I learn incredibly quickly</p>
                <div className='container '>
                    <Link href='#'><div className='box !bg-white'>
                        <Image src='/ux-prj-1.png' className='img' width={450} height={250} alt='img' />
                        <p className='title'>Nester Verify</p>
                        <p className='txt'>Website · UI/UX Design</p>
                    </div></Link>
                    <Link href='#'><div className='box !bg-white'>
                        <Image src='/ux-prj-2.png' className='img' width={450} height={250} alt='img' />
                        <p className='title'>Kita Folk </p>
                        <p className='txt'>Web Application - UI/UX Design/ Branding</p>
                    </div></Link>
                    <Link href='#'><div className='box !bg-white'>
                        <Image src='/ux-prj-3.png' className='img' width={450} height={250} alt='img'/>
                        <p className='title'>Farmhub360</p>
                        <p className='txt'>Website · UI/UX Design/ Pitchdeck/ Branding</p>
                    </div></Link>
                    
                </div>
                </div>

                <div class=" header__ux ">
                <h1 className='header__ux__head'>UI/UX Design Projects</h1>
                <p className='header__ux__txt'>And if it’s not listed here, I learn incredibly quickly</p>
                <div className='container'>
                   <Link href='#'><div className='box !bg-blue-950'>
                        <Image src='/stack-1.png' className='img' width={450} height={250} alt='img' />
                        <p className='title !text-gray-300'>StackIAM </p>
                        <p className='txt  !text-gray-300 !pb-24'>Website · UI/UX Design</p>
                    </div></Link>
                   <Link href='#'><div className='box !bg-blue-950'>
                        <Image src='/stack-2.png' className='img' width={450} height={250} alt='img' />
                        <p className='title !text-gray-300'>Stackwalker  </p>
                        <p className='txt !text-gray-300 !pb-24'>Website · UI/UX Design</p>
                    </div></Link>
                   <Link href='#'><div className='box !bg-blue-950'>
                        <Image src='/locus.png' className='img' width={450} height={250} alt='img'/>
                        <p className='title !text-gray-300'>Lotus Capital App</p>
                        <p className='txt !text-gray-300 !pb-24'>Mobile Application - UI/UX Design</p>
                    </div></Link> 
                      
                </div>
                <div className='container'>
                   <Link href='#'><div className='box !bg-blue-950'>
                        <Image src='/muh.png' className='img' width={450} height={250} alt='img' />
                        <p className='title !text-gray-300'>Muhasaba Mobile</p>
                        <p className='txt  !text-gray-300 !pb-24'>Mobile Application - UI/UX Design</p>
                    </div></Link>
                   <Link href='#'><div className='box !bg-blue-950'>
                        <Image src='/office.png' className='img' width={450} height={250} alt='img' />
                        <p className='title !text-gray-300'>OfficeAjo</p>
                        <p className='txt !text-gray-300 !pb-24'>Website - UI/UX Design</p>
                    </div></Link>
                   <Link href='#'><div className='box !bg-blue-950'>
                        <Image src='/flite.png' className='img' width={450} height={250} alt='img'/>
                        <p className='title !text-gray-300'>Flitwire</p>
                        <p className='txt !text-gray-300 !pb-24'>Website - UI/UX Design</p>
                    </div></Link> 
                      
                </div>
                <div className='container'>
                   <Link href='#'><div className='box !bg-blue-950'>
                        <Image src='/vapo.png' className='img' width={450} height={250} alt='img' />
                        <p className='title !text-gray-300'>Vapo Travels  </p>
                        <p className='txt  !text-gray-300 !pb-24'>Website / Mobile- UI/UX Design </p>
                    </div></Link>
                   <Link href='#'><div className='box !bg-blue-950'>
                        <Image src='/luc.png' className='img' width={450} height={250} alt='img' />
                        <p className='title !text-gray-300'>Lumière Couture Website</p>
                        <p className='txt !text-gray-300 !pb-24'>Website - UI/UX Design</p>
                    </div></Link>
                   <Link href='#'><div className='box !bg-blue-950'>
                        <Image src='/loc-2.png' className='img' width={450} height={250} alt='img'/>
                        <p className='title !text-gray-300'>Lumière Couture Website</p>
                        <p className='txt !text-gray-300 !pb-24'>Website - UI/UX Design</p>
                    </div></Link> 
                      
                </div>
                <Link className='links' href='#'><h3>View More</h3></Link>
                </div>

                <div class=" header__ux ">

                <h1 className='header__ux__head'>Brand Identity Projects</h1>
                <p className='header__ux__txt'>And if it’s not listed here, I learn incredibly quickly</p>
                <div className='container'>
                   <Link href='#'><div className='box'>
                        <Image src='/ux-prj-4.png' className='img' width={450} height={250} alt='img' />
                        <p className='title'>Stackwalker LLC</p>
                        <p className='txt'>The Brand Identity Designn</p>
                    </div></Link>
                   <Link href='#'><div className='box'>
                        <Image src='/ux-prj-5.png' className='img' width={450} height={250} alt='img' />
                        <p className='title'>Findworker </p>
                        <p className='txt'>The Pitch-deck Design</p>
                    </div></Link>
                   <Link href='#'><div className='box'>
                        <Image src='/ux-prj-6.png' className='img' width={450} height={250} alt='img'/>
                        <p className='title'>Farmhub360</p>
                        <p className='txt'>The Pitch-deck Design</p>
                    </div></Link> 
                </div>
                <Link className='links' href='#'><h3>View More</h3></Link>
                </div>
           
    </Wrapper>
  )
}

export default Index