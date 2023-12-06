"use client"
import React from 'react';

import { useTheme } from '../ThemeContext';
import Nav from '../../Component/Nav/Index';
import Footer from '../../Component/Footer/Index'
const Page = () => {
    // const {darkMode} = useTheme();
    return (
        <div >
            <Nav/>
            <Footer/>
            
        </div>
    );
}

export default Page;
