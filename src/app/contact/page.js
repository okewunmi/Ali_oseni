"use client"
import React from 'react';

import { ThemeProvider, useTheme } from '../ThemeContext';
import Nav from '../../Component/Nav/Index';
import Footer from '../../Component/Footer/Index'
const Page = () => {
    const {darkMode} = useTheme();
    return (
        <ThemeProvider>
        <div >
            <Nav/>
            <Footer/>
            
        </div>
        </ThemeProvider>
    );
}

export default Page;
