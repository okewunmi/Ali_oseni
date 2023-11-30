"use client"
import React from 'react';

import { Wrapper } from '../about/styles';
import '../globals.css'

import Image from 'next/image';
import Link from 'next/link';
import { IoPersonCircle } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub, FaDribbble  } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { GrSchedules } from "react-icons/gr";

import Nav from '../../Component/Nav/Index';

const Index = () => {
    return (
        <Wrapper>
        <Nav/>
        <section className="timeline">
            <div className="title-wrapper">
              <h3 className="h3">Design Process</h3>
            </div>

            <ol className="timeline-list">
              <li className="timeline-item">
               <h4 className="h4 timeline-item-title">
                The UI/UX design process is a structured approach that UI/UX designers follow to create user-friendly and visually appealing interfaces. Here's a breakdown of the key steps and their explanations
                </h4>
           
                {/* <span>June, 2022</span> */}

                {/* <p className="timeline-text">Greetings! I'm Oseni Ali, a passionate UI/UX designer dedicated to crafting seamless and engaging digital experiences. With a keen eye for aesthetics and a user-centric approach, I specialize in translating complex ideas into intuitive and visually appealing designs. My journey involves a blend of creative thinking, problem-solving, and staying at the forefront of design trends. Here's what defines me:</p> */}
              </li>
              <li className="timeline-item">
              <div className='head'> 
              <h4 className="h4 timeline-item-title">Innovative Design</h4>
                </div>
               


                {/* <span>Feb, 2022</span> */}

                <p className="timeline-text">
                In my design approach, innovation is more than a buzzword – it's a commitment to pushing creative boundaries. I thrive on exploring new possibilities, crafting designs that not only meet the functional needs of users but go above and beyond, leaving a lasting impression and exceeding expectations.
                </p>
              </li>

              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">
                User-Centric Approach
                </h4>

                {/* <span>2019 — 2021</span> */}

                <p className="timeline-text">At the heart of my design philosophy is a profound understanding of the end-user. I see every pixel as an opportunity to enhance the user experience. Through meticulous research and empathetic design thinking, I ensure that every element serves a purpose, contributing to an intuitive and optimal journey for the user.</p>
              </li>

               <li className="timeline-item">

              <h4 className="h4 timeline-item-title">Tech Enthusiast</h4>

              {/* <span>2002 — 2004</span> */}

              <p className="timeline-text">
              As a tech enthusiast, I embrace the dynamic landscape of the digital world. I stay at the forefront of emerging technologies, integrating cutting-edge solutions seamlessly into my designs. This tech-forward mindset ensures that my work not only meets contemporary standards but also resonates with the tech-savvy expectations of modern audiences.
              </p>

            </li> 
            <li className="timeline-item">
              <div className='head'> 
              <h4 className="h4 timeline-item-title">Collaborative Spirit</h4>
                </div>
                <p className="timeline-text">
                Design doesn't happen in isolation. I firmly believe in the power of collaboration. Working seamlessly with cross-functional teams is integral to my process. By fostering open communication and embracing diverse perspectives, I ensure that the design journey is not only smooth but also aligned with the overarching goals of the project.
                </p>
              </li>
              <li className="timeline-item">
              <div className='head'> 
              <h4 className="h4 timeline-item-title">Portfolio Highlights</h4>
                </div>
                <p className="timeline-text">
                Explore my portfolio, and you'll discover a diverse tapestry of projects that showcase not just my technical skills but my versatility, attention to detail, and the ability to deliver designs with a profound impact. Each project is a testament to my dedication to excellence and my capacity to adapt to varied design challenges.
                </p>
              </li>
              <li className="timeline-item">
              <div className='head'> 
              <h4 className="h4 timeline-item-title">Portfolio Highlights</h4>
                </div>
               


                {/* <span>Feb, 2022</span> */}

                <p className="timeline-text">
                Explore my portfolio, and you'll discover a diverse tapestry of projects that showcase not just my technical skills but my versatility, attention to detail, and the ability to deliver designs with a profound impact. Each project is a testament to my dedication to excellence and my capacity to adapt to varied design challenges.
                </p>
              </li>
            </ol>
            
            
            <div className='social'>
              <div className='social__icon'>
            <p>Lets Continue To Projects </p> <span><BsArrowRight /></span> 
              </div>
              
              <div className='social__icon--box'>
                    <Link className='links' href="#"> <FaTwitter/></Link>
                    <Link className='links' href="#"><FaFacebookF /></Link>
                    <Link className='links' href="#"><FaLinkedinIn/></Link>
                    <Link className='links' href="#"><FaGithub/></Link>
                    <Link className='links' href="#">  <FaDribbble /></Link>
                    <Link className='links' href="#"><FaInstagram/></Link> 
              </div>
            </div>
            
          </section>

            
        </Wrapper>
    );
}

export default Index;

