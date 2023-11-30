import React from 'react';
import Link from 'next/link';
import { NavBar } from './styles';
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { LuSunMoon } from "react-icons/lu";

const Index = () => {
    return (
        <NavBar>
            <div className='NavBar__link' >
                <Link className='links' href="/contact">Contact Me</Link>
                <Link className='links' href="/project">Projects</Link>
                <Link className='links' href="/process">Process</Link>
                <Link className='links' href="/about">About Me</Link> 
            </div>
            <div>
                <div className='NavBar__btn'>
                <Link className='NavBar__btn--btn' href="#">Download Resume</Link>
                <buton className='btn'> <WiMoonAltFirstQuarter/> </buton>
                </div>
            </div>
        </NavBar>
    );
}

export default Index;
