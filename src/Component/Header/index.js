import React from 'react';
import { Wrapper } from './styles';
import Image from 'next/image';

import { FaTwitter, FaSlack, FaGithub, FaDribbble  } from "react-icons/fa";
import Link from 'next/link';
import { IoPersonCircle } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

const Index = () => {
    return (
        <Wrapper>
            <div className='header'>
            <div className='header__txt'>
                <div className='header__txt__box' >
               <h1>Hello, I’m <span> <strike>Oseni Ali Abayomi</strike> </span></h1>
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
                <p className='txt-big'>Portfolio</p>
               </div>
            </div>
            <div className='header__img'>
                <Image src='/photo.png' alt='photos' width={420} height={420} className='photo__1'/>
            </div>
            </div>
            <div className='header__details'>
                <div className='box'>
                    <Image src="/icon_1.png" className='image__1'  width={50} height={54} alt='logo'/>
                    <h2 className='heading h__1'>Product Design</h2>
                    <p className='txt__1 txt'>I work at the intersection of design,brand, code, strategy and content; helping organisations bring their concepts and products to life… to make people’s lives better.</p>
                </div>
                <div className='box'>
                    <Image src="/icon-2.png" className='image__2'  width={50} height={54} alt='logo'/>
                    <h2 className='heading h__2'>Prototyping</h2>
                    <p className='txt__2 txt'>With more than a decade of experience I tackle a broad variety of disciplines in the process of
                    creating meaningful products that make a real
                    difference. With carefully selected tools and skills
                    I express my visions ranging from product design
                    to the creation of user experience up to
                    development and delivery.</p>
                    <p className='txt__2'>My distinctive strategic thinking helps me to
                    pinpoint the holistic scope of a product and evolve
                    it by adding new business ideas, innovations and
                    values that meet user needs as well as business
                    objectives. Besides building user flows,
                    information architecture and wireframes, tailor-
                    made interactive prototypes</p>
                </div>
                <div className='box'>
                    <Image src="/icon-3.png" className='image__3'  width={50} height={54} alt='logo'/>
                    <h2 className='heading h__3'>Team Lead</h2>
                    <p className='txt__3 txt'>are constantly putting concepts and ideas to the test and emphasize the user-centered approach in
                    my work. I work with the latest techniques in web
                    development and my agile workflow is the result
                    of the precisely combined tools and strategies
                    that include object oriented patterns, build scripts,
                    pre-processors and minification, source code
                    management, testing as well as deployment.</p>
                    <Image src='/signature.png' className='img__sign' width={100} height={41} alt='sign'/>
                </div>
            </div>
            <div className='header__bring'>
                <h1 className='header__bring__head'>What I Bring to Your Team</h1>
                <p className='header__bring__txt'>When considering what I can bring to your team, there are several valuable assets and skills that I possess. Here are some key highlights:</p>
                <div className='header__bring__box'>
                    <div className='header__bring__box--container box__1'>
                        <h3>Extensive Experience</h3>
                        <p>ith years of hands-on experience in various roles and projects, I bring a wealth of knowledge and expertise to the table.</p>
                        <p>I have tackled diverse challenges and gained insights from different industries, enabling me to offer a fresh perspective and innovative solutions.</p>
                    </div>
                    <div className='header__bring__box--container box__2'>
                        <h3>Strong Design Skills</h3>
                        <p>y design skills encompass a wide range of areas, including user experience (UX) design, user interface
                        (UI) design, visual design, and prototyping.</p>
                        <p>I am well-versed in industry-standard design tools and
                        techniques, allowing me to deliver high-quality work
                        that aligns with industry best practices.</p>
                    </div>
                    <div className='header__bring__box--container box__1'>
                        <h3>Creative Thinking</h3>
                        <p>reativity is at the core of my design process. I have an ability for generating unique and imaginative ideas that
                        push boundaries and captivate users.</p>
                        <p>I constantly strive to think outside the box, infusing my
                        designs with a touch of originality that sets them apart
                        from the competition.</p>
                    </div>
                    <div className='header__bring__box--container box__2'>
                        <h3>Collaborative Approach</h3>
                        <p> strongly believe in the power of collaboration and teamwork. I thrive in an environment where ideas are
                        shared openly, and feedback is embraced.</p>
                        <p>I am a proactive communicator who values constructive
                        input from team members, fostering a collaborative
                        atmosphere that leads to exceptional results.</p>
                    </div>
                    <div className='header__bring__box--container box__1'>
                        <h3>Adaptability and Growth Mindset</h3>
                        <p> he design industry is ever-evolving, and I thrive in dynamic environments. I am quick to adapt to new
                        technologies, design trends, and methodologies,
                        ensuring that I stay ahead of the curve.</p>
                        <p>I approach challenges with a growth mindset,
                        constantly seeking opportunities for personal and
                        professional development.</p>
                    </div>
                    <div className='header__bring__box--container box__2'>
                        <h3>Strong Attention to Detail</h3>
                        <p>  pride myself on my meticulousness and dedication to precision.
                        I pay close attention to every element of a design,
                        ensuring that no detail goes unnoticed.</p>
                        <p>This commitment to excellence results in polished and
                        refined deliverables that resonate with users.</p>
                </div>
                </div>
            </div>
            <div className='header__skill'>
            <h1 className='header__skill__head'>Skills</h1>
                <p className='header__skill__txt'>And if it’s not listed here, I learn incredibly quickly</p>
                <div className='header__skill__box'>
                    <div className='txt'>
                        <h3>Design</h3>
                        <p>Product Design</p>
                        <p>UX Design</p>
                        <p>Visual Design (UI)</p>
                        <p>Wire-framing + Prototyping</p>
                        <p>Journey-Mapping</p>
                        <p>UX Research</p>
                        <p>Logo and Branding</p>
                        <p>Creative Direction</p>

                    </div>
                    <div className='txt'>
                        <h3>Software</h3>
                        <p>Postman</p>
                        <p>Sketch</p>
                        <p>Adobe Illustrator</p>
                        <p>Adobe Photoshop</p>
                        <p>Figma</p>
                        <p>InVision</p>
                    </div>
                    <div className='txt'>
                        <h3>Development</h3>
                        <p>HTML</p>
                        <p>SASS + CSS</p>
                        <p>Javascript + jQuery</p>
                        <p>ReactJS</p>
                        <p>API Integrations</p>
                        <p>Working within SDKsg</p>
                       

                    </div>

                </div>

            </div>
            <div className='header__ux'>
            <h1 className='header__ux__head'>UX Projects</h1>
                <p className='header__ux__txt'>And if it’s not listed here, I learn incredibly quickly</p>
                <div className='container'>
                    <Link href='#'><div className='box'>
                        <Image src='/ux-prj-1.png' className='img' width={450} height={250} alt='img' />
                        <p className='title'>Nester Verify</p>
                        <p className='txt'>Website · UI/UX Design</p>
                    </div></Link>
                    <Link href='#'><div className='box'>
                        <Image src='/ux-prj-2.png' className='img' width={450} height={250} alt='img' />
                        <p className='title'>Kita Folk </p>
                        <p className='txt'>Web Application - UI/UX Design/ Branding</p>
                    </div></Link>
                    <Link href='#'><div className='box'>
                        <Image src='/ux-prj-3.png' className='img' width={450} height={250} alt='img'/>
                        <p className='title'>Farmhub360</p>
                        <p className='txt'>Website · UI/UX Design/ Pitchdeck/ Branding</p>
                    </div></Link>
                    
                </div>
                <h1 className='header__ux__head margin-top'>Brand Identity Projects</h1>
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
                <Link className='links' href='/project'><h3>View More</h3></Link>
                
            </div>
            <div className='header__exp'>
            <h1 className='header__ux__head'>Experience</h1>
                <p className='header__ux__txt'>And if it’s not listed here, I learn incredibly quickly</p>
                <div className='header__exp__box'>
                    <div className='container'>
                        <h3 className='head'>Findworker</h3>
                        <div className='content'> 
                        <h3 className='content-head'>UI/UX Designer</h3>
                        <p className='content-txt'>Collaborate with creative and development teams on the execution of ideas.</p>
                        </div>
                        <div className='date'>
                            <p>2027 - 2018</p></div>
                    </div>
                    <div className='container'>
                        <h3 className='head'>BothofUS</h3>
                        <div className='content'> 
                        <h3 className='content-head'>Interaction Designer</h3>
                        <p className='content-txt'>Collaborate with creative and development teams on the execution of ideas.</p>
                        </div>
                        <div className='date'>
                            <p>2019 - May</p></div>
                    </div>
                    <div className='container'>
                        <h3 className='head'>Freelance/CEO Farmhub360</h3>
                        <div className='content'> 
                        <h3 className='content-head'>Product Designer</h3>
                        <p className='content-txt'>Collaborate with creative and development teams on the execution of ideas.</p>
                        </div>
                        <div className='date'>
                            <p>2021 - Present</p>
                            </div>
                    </div>
                </div>
            </div>
            <div className='header__contact'>
                <div className='header__contact__box' >
                    <Image src='/location.png' width={27} height={37} alt='image' />
                    <h3 className='big'>Visit me</h3>
                    <p className='text'>42, Montgomery Road, Sabo YABA Lagos Nigeria</p>

                </div>
                <div className='header__contact__box' >
                    <Image src='/call.png' width={27} height={37} alt='image' />
                    <h3 className='big'>Call</h3>
                    <div>
                    <p className='text'>+2348026260925</p>
                    <p className='text'>Mon - Fri, 8am - 6pm</p>
                    </div>
                    

                </div>
                <div className='header__contact__box' >
                    <Image src='/message.png' width={27} height={37} alt='image' />
                    <h3 className='big'>Email</h3>
                    <p className='text'>alioseni9@gmail.com</p>

                </div>


            </div>
            <div className='header__work'>
            <h1 className='header__bring__head'>Want to work with me?</h1>
                <p className='header__bring__txt'>Cool! Let’s talk about your project</p>
                <form>
                    <div className='form-box'>
                    <label>Your Name</label>
                    <div className='form-icon'>
                        <div className='icons'> <IoPersonCircle className='icon'/></div>
                       
                    <input type='text' className='input' placeholder='e.g. Bonnie Green'  />
                    </div>
                    </div>
                    <div className='form-box'>
                    <label>Your Email</label>
                    <div className='form-icon'>
                        <div className='icons'><IoIosMail className='icon'/></div>
                        
                    <input type='text' className='input' placeholder='example@company.com'  />
                    </div>
                    </div>

                    <div className='form-box'>
                    <label>Your Message</label>
                    <div className='form-icon'>
                        
                    <textarea className='' placeholder='Your message'  />
                    </div>
                    </div>
                    <button className='send__btn'> Send message</button>
               
                </form>
            </div>
        </Wrapper>
    );
}

export default Index;

