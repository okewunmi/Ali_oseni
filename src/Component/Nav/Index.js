import React, {useState} from 'react';
import Link from 'next/link';
import { NavBar } from './styles';
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { LuSunMoon } from "react-icons/lu";
import { useTheme } from '../../app/ThemeContext';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import Slider from '../Menu/page'

const Index = () => {
     const {toggleDarkMode, darkMode} = useTheme();
     const [isSidebarOpen, setSidebarOpen] = useState(false);

   const toggleMenu =()=>{
    setSidebarOpen(!isSidebarOpen);

   }
    return (
         <>
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
                <buton className='btn btn-menu' onClick={toggleMenu}>  <HiOutlineMenuAlt4 className='menu'/> </buton>
                </div>
            </div>
        </NavBar>
        <Slider isOpen={isSidebarOpen} onClose={toggleMenu} />
        </>
        
    );
}

export default Index;


