'use client'
import Nav from '../Component/Nav/Index';
import Header from '../Component/Header/index'
import Footer from '../Component/Footer/Index'
import './globals.css'
import Head from 'next/head';
import { ThemeProvider } from './ThemeContext';
export default function Home() {
  return (
    <ThemeProvider>
     <Nav/>
     <Header/>
     <Footer/>
    </ThemeProvider>
  
  )
}


