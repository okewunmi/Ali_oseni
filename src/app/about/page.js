"use client" 
import React from 'react';
import {Wrapper} from './styles'
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
        <section class="timeline">
            <div class="title-wrapper">
              <h3 class="h3">About Me.</h3>
            </div>

            <ol class="timeline-list">
              <li class="timeline-item">
                <div className='head'> <h4 class="h4 timeline-item-title">
                Oseni Ali - UI/UX Designer
                </h4>
                <div><Link className='link' href='#'>View Dribbble</Link></div>
                
                </div>
               

                {/* <span>June, 2022</span> */}

                <p class="timeline-text">Greetings! I'm Oseni Ali, a passionate UI/UX designer dedicated to crafting seamless and engaging digital experiences. With a keen eye for aesthetics and a user-centric approach, I specialize in translating complex ideas into intuitive and visually appealing designs. My journey involves a blend of creative thinking, problem-solving, and staying at the forefront of design trends. Here's what defines me:</p>
              </li>
              <li class="timeline-item">
              <div className='head'> 
              <h4 class="h4 timeline-item-title">Innovative Design</h4>
                </div>
               


                {/* <span>Feb, 2022</span> */}

                <p class="timeline-text">
                In my design approach, innovation is more than a buzzword – it's a commitment to pushing creative boundaries. I thrive on exploring new possibilities, crafting designs that not only meet the functional needs of users but go above and beyond, leaving a lasting impression and exceeding expectations.
                </p>
              </li>

              <li class="timeline-item">
                <h4 class="h4 timeline-item-title">
                User-Centric Approach
                </h4>

                {/* <span>2019 — 2021</span> */}

                <p class="timeline-text">At the heart of my design philosophy is a profound understanding of the end-user. I see every pixel as an opportunity to enhance the user experience. Through meticulous research and empathetic design thinking, I ensure that every element serves a purpose, contributing to an intuitive and optimal journey for the user.</p>
              </li>

               <li class="timeline-item">

              <h4 class="h4 timeline-item-title">Tech Enthusiast</h4>

              {/* <span>2002 — 2004</span> */}

              <p class="timeline-text">
              As a tech enthusiast, I embrace the dynamic landscape of the digital world. I stay at the forefront of emerging technologies, integrating cutting-edge solutions seamlessly into my designs. This tech-forward mindset ensures that my work not only meets contemporary standards but also resonates with the tech-savvy expectations of modern audiences.
              </p>

            </li> 
            <li class="timeline-item">
              <div className='head'> 
              <h4 class="h4 timeline-item-title">Collaborative Spirit</h4>
                </div>
                <p class="timeline-text">
                Design doesn't happen in isolation. I firmly believe in the power of collaboration. Working seamlessly with cross-functional teams is integral to my process. By fostering open communication and embracing diverse perspectives, I ensure that the design journey is not only smooth but also aligned with the overarching goals of the project.
                </p>
              </li>
              <li class="timeline-item">
              <div className='head'> 
              <h4 class="h4 timeline-item-title">Portfolio Highlights</h4>
                </div>
                <p class="timeline-text">
                Explore my portfolio, and you'll discover a diverse tapestry of projects that showcase not just my technical skills but my versatility, attention to detail, and the ability to deliver designs with a profound impact. Each project is a testament to my dedication to excellence and my capacity to adapt to varied design challenges.
                </p>
              </li>
              <li class="timeline-item">
              <div className='head'> 
              <h4 class="h4 timeline-item-title">Portfolio Highlights</h4>
                </div>
               


                {/* <span>Feb, 2022</span> */}

                <p class="timeline-text">
                Explore my portfolio, and you'll discover a diverse tapestry of projects that showcase not just my technical skills but my versatility, attention to detail, and the ability to deliver designs with a profound impact. Each project is a testament to my dedication to excellence and my capacity to adapt to varied design challenges.
                </p>
              </li>
            </ol>
            
            <h2 className='sub'>My Reads.</h2>
            <ol class="timeline-list">
              <li class="timeline-item">
                <h4 class="h4 timeline-item-title">
                Dont Make Me Think
                </h4>
              
                <p class="timeline-text">By Steve Krug is a seminal guide to web usability. In this succinct and witty exploration, Krug emphasizes simplicity in web design, arguing that a user's interaction with a website should be intuitive and require minimal cognitive effort. He delves into the principles of navigation, clarity, and the elimination of unnecessary complexities. Krug's mantra, "Don't make me think," encapsulates the user's desire for a seamless, instinctive online experience. Through real-world examples and practical advice, the book serves as a foundational resource for designers, urging them to prioritize user-centric design and create interfaces that effortlessly guide users through their digital journey.</p>
              </li>
              <li class="timeline-item">
              <div className='head'> 
              <h4 class="h4 timeline-item-title">The Design of Everyday Things</h4>
                </div>
               
                <p class="timeline-text">
                By Don Norman explores the principles of user-centered design. Norman delves into the psychology behind interactions with everyday objects, illustrating how good design enhances usability and user satisfaction. He introduces concepts like affordances and signifiers, emphasizing the importance of intuitive and understandable design. Norman critiques poorly designed products, highlighting the consequences of bad design on user experience. This influential work encourages designers to prioritize user needs, providing insights into creating products that seamlessly integrate with human behavior, ultimately leading to products that are not just functional but also a joy to use.

                </p>
              </li>

              <li class="timeline-item">
                <h4 class="h4 timeline-item-title">
                Designing for Emotion
                </h4>
                <p class="timeline-text">Emphasizes the profound impact emotional design has on user engagement. Recognizing that user experiences are inherently emotional, the book guides designers in creating products that resonate with users on a deeper level. Aarron Walter explores how empathy, storytelling, and thoughtful interactions foster connections. By understanding users' emotional states, designers can craft interfaces that delight and build lasting relationships. Walter's insights underscore the pivotal role of emotions in user experience, urging designers to go beyond functionality and infuse designs with empathy, ultimately creating memorable and meaningful interactions for users.</p>
              </li>

            </ol>
            <h2 className='sub'>Lets Talk</h2>
            <ol class="timeline-list">
              <li class="timeline-item">
              <div className='head'> 
              <h4 class="h4 timeline-item-title">
                Dont Make Me Think
                </h4>
                <div className='date'>
                <GrSchedules />
                <h5>Currently</h5>
                </div>
                
                </div>
                
              
                <p class="timeline-text">I invite you to join me on a journey where creativity seamlessly meets functionality. Your vision is the compass, and my expertise is the map. Together, let's transcend the ordinary and create something extraordinary that not only meets objectives but elevates the user experience to new heights.</p>
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

