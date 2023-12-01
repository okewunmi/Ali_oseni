"use client"
import React from 'react';
import { Wrapper } from '../../../Component/Header/styles';
import {Content} from './styles'
import Nav from '../../../Component/Nav/Index'
import Link from 'next/link';
import Image from 'next/image';
import {Fade} from 'react-swift-reveal'

const Index = () => {
    return (
        <Fade duration={1000} distance='30px' delay={500} >
        <Wrapper>
            <Nav/>
            <div className='header__ux my-16 !bg-gray-200'>
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
                    <p>I am a passionate and dedicated product designer with a keen eye for detail and the ability to craft extraordinary user experiences. With years of experience in the industry, I have honed my skills to create designs that meet client's needs and exceed their expectations.</p>
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
                        <p>Main designer</p>
                    </div>
                    
                </article>
                <div className='line-2'></div>
            </Content>
        </Wrapper>
        </Fade>
    );
}

export default Index;
